import type { PropsWithChildren } from "react"

export const Wrapper: React.FC<PropsWithChildren> = ({ children }) => ( 
  <ol className="relative ml-4 border-l border-gray-200 dark:border-gray-700 [&>:last-child]:mb-0">                  
    {children}
  </ol>
)
