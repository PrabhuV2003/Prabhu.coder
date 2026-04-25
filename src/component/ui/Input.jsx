import React from "react";

export const Input = React.forwardRef(
  ({ className = "", type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors 
        placeholder:text-gray-400 
        focus:outline-none focus:ring-1 focus:ring-blue-500 
        disabled:cursor-not-allowed disabled:opacity-50 
        ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";