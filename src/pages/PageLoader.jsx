import React from 'react'

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 dark:border-white"></div>
    </div>
  );
}

export default PageLoader