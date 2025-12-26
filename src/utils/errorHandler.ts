// Comprehensive error handling system
export interface ErrorInfo {
  message: string;
  code: string;
  timestamp: Date;
  context?: any;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export class PlatformError extends Error {
  public code: string;
  public severity: 'low' | 'medium' | 'high' | 'critical';
  public context?: any;
  public timestamp: Date;

  constructor(message: string, code: string, severity: 'low' | 'medium' | 'high' | 'critical' = 'medium', context?: any) {
    super(message);
    this.name = 'PlatformError';
    this.code = code;
    this.severity = severity;
    this.context = context;
    this.timestamp = new Date();
  }
}

export class ErrorHandler {
  private static instance: ErrorHandler;
  private errors: ErrorInfo[] = [];
  private maxErrors = 100;

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  logError(error: Error | PlatformError, context?: any): void {
    const errorInfo: ErrorInfo = {
      message: error.message,
      code: error instanceof PlatformError ? error.code : 'UNKNOWN_ERROR',
      timestamp: new Date(),
      context: context || (error instanceof PlatformError ? error.context : undefined),
      severity: error instanceof PlatformError ? error.severity : 'medium'
    };

    this.errors.unshift(errorInfo);
    if (this.errors.length > this.maxErrors) {
      this.errors.pop();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error(`[${errorInfo.severity.toUpperCase()}] ${errorInfo.code}: ${errorInfo.message}`, errorInfo.context);
    }

    // Send to analytics in production (placeholder)
    if (process.env.NODE_ENV === 'production' && errorInfo.severity === 'critical') {
      this.sendToAnalytics(errorInfo);
    }
  }

  private sendToAnalytics(errorInfo: ErrorInfo): void {
    // Placeholder for analytics integration
    console.log('Sending error to analytics:', errorInfo);
  }

  getRecentErrors(limit = 10): ErrorInfo[] {
    return this.errors.slice(0, limit);
  }

  clearErrors(): void {
    this.errors = [];
  }
}

export const errorHandler = ErrorHandler.getInstance();

// Error boundary hook for React components
export const useErrorHandler = () => {
  const handleError = (error: Error, context?: any) => {
    errorHandler.logError(error, context);
  };

  return { handleError };
};

// Async operation wrapper with error handling
export const withErrorHandling = async <T>(
  operation: () => Promise<T>,
  errorCode: string,
  context?: any
): Promise<T | null> => {
  try {
    return await operation();
  } catch (error) {
    const platformError = new PlatformError(
      error instanceof Error ? error.message : 'Unknown error occurred',
      errorCode,
      'medium',
      context
    );
    errorHandler.logError(platformError);
    return null;
  }
};