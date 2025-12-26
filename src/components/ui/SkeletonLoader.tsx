import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'text' | 'card' | 'image' | 'button' | 'timeline' | 'model';
  count?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  variant = 'text', 
  count = 1, 
  className = '' 
}) => {
  const renderSkeleton = () => {
    switch (variant) {
      case 'text':
        return (
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          </div>
        );
      
      case 'card':
        return (
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
            <div className="h-48 bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
            </div>
            <div className="flex space-x-2">
              <div className="h-8 bg-gray-200 rounded animate-pulse w-20"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse w-16"></div>
            </div>
          </div>
        );
      
      case 'image':
        return (
          <div className="aspect-video bg-gray-200 rounded-lg animate-pulse"></div>
        );
      
      case 'button':
        return (
          <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-24"></div>
        );
      
      case 'timeline':
        return (
          <div className="flex items-center space-x-4 p-4">
            <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
            </div>
          </div>
        );
      
      case 'model':
        return (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
            <div className="p-6 space-y-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
              </div>
              <div className="flex space-x-2">
                <div className="h-8 bg-gray-200 rounded animate-pulse flex-1"></div>
                <div className="h-8 bg-gray-200 rounded animate-pulse w-12"></div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        );
    }
  };

  return (
    <div className={className}>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className={count > 1 ? 'mb-4' : ''}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;