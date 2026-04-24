import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { LuCheck, LuChevronDown, LuChevronUp } from "react-icons/lu";

// Root Elements
export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

// Trigger
export const SelectTrigger = React.forwardRef(
  ({ className = "", children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={`flex h-9 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm
      focus:outline-none focus:ring-1 focus:ring-blue-500
      disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <LuChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
);
SelectTrigger.displayName = "SelectTrigger";

// Scroll Up Button
export const SelectScrollUpButton = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      className={`flex items-center justify-center py-1 ${className}`}
      {...props}
    >
      <LuChevronUp className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  )
);
SelectScrollUpButton.displayName = "SelectScrollUpButton";

// Scroll Down Button
export const SelectScrollDownButton = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      className={`flex items-center justify-center py-1 ${className}`}
      {...props}
    >
      <LuChevronDown className="h-4 w-4" />
    </SelectPrimitive.ScrollDownButton>
  )
);
SelectScrollDownButton.displayName = "SelectScrollDownButton";

// Content
export const SelectContent = React.forwardRef(
  ({ className = "", children, ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={`z-50 min-w-[8rem] max-h-60 overflow-y-auto rounded-md border border-gray-300 bg-white shadow-md ${className}`}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = "SelectContent";

// Label
export const SelectLabel = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <SelectPrimitive.Label
      ref={ref}
      className={`px-2 py-1.5 text-sm font-semibold ${className}`}
      {...props}
    />
  )
);
SelectLabel.displayName = "SelectLabel";

// Item
export const SelectItem = React.forwardRef(
  ({ className = "", children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={`relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-2 pr-8 text-sm
      hover:bg-gray-100 focus:bg-gray-100 ${className}`}
      {...props}
    >
      <span className="absolute right-2 flex items-center">
        <SelectPrimitive.ItemIndicator>
          <LuCheck className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
);
SelectItem.displayName = "SelectItem";

// Separator
export const SelectSeparator = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <SelectPrimitive.Separator
      ref={ref}
      className={`my-1 h-px bg-gray-200 ${className}`}
      {...props}
    />
  )
);
SelectSeparator.displayName = "SelectSeparator";