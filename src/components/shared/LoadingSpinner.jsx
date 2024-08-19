function LoadingSpinner() {
    return (
      <div className="h-screen flex items-center justify-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  
  export default LoadingSpinner;