import { useState, useCallback } from 'react';
import { errorHandler, PlatformError } from '../utils/errorHandler';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseAsyncOperationOptions {
  errorCode?: string;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export const useAsyncOperation = <T>(
  operation: () => Promise<T>,
  options: UseAsyncOperationOptions = {}
) => {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null
  });

  const execute = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const result = await operation();
      setState({ data: result, loading: false, error: null });
      
      if (options.onSuccess) {
        options.onSuccess(result);
      }
      
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      
      const platformError = new PlatformError(
        errorMessage,
        options.errorCode || 'ASYNC_OPERATION_ERROR',
        'medium',
        { operation: operation.name }
      );
      
      errorHandler.logError(platformError);
      setState({ data: null, loading: false, error: errorMessage });
      
      if (options.onError) {
        options.onError(error instanceof Error ? error : new Error(errorMessage));
      }
      
      throw error;
    }
  }, [operation, options]);

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return {
    ...state,
    execute,
    reset
  };
};