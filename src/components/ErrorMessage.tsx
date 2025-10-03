import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ErrorMessageProps {
  error: Error | string;
  onDismiss?: () => void;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  error, 
  onDismiss, 
  className = '' 
}) => {
  const errorMessage = typeof error === 'string' ? error : error.message;

  return (
    <div className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <AlertTriangle className="w-5 h-5 text-red-400" />
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-red-800">
            Error
          </h3>
          <p className="mt-1 text-sm text-red-700">
            {errorMessage}
          </p>
        </div>
        {onDismiss && (
          <div className="ml-auto pl-3">
            <button
              onClick={onDismiss}
              className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
            >
              <span className="sr-only">Dismiss</span>
              <X className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;