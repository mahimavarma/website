import React, { forwardRef } from 'react'
export const Separator = forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`shrink-0 bg-border ${
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"
      } ${className}`}
      {...props}
      role={decorative ? "none" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
    />
  )
})
Separator.displayName = "Separator"