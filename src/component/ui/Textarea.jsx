import React from "react";

export const Textarea = React.forwardRef(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`flex min-h-[60px] w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm shadow-sm
        placeholder:text-gray-400
        focus:outline-none focus:ring-1 focus:ring-blue-500
        disabled:cursor-not-allowed disabled:opacity-50
        ${className}`}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";