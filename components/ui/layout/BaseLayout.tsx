
import { Navbar } from "@ui";
import { FunctionComponent, ReactNode } from "react";

interface BaseLayoutProps {
    children?: ReactNode;
  }
  
const BaseLayout: FunctionComponent<BaseLayoutProps> = ({children}) => {
    return(
        <>
          <Navbar/>
          <div className="py-16 bg-gray-50 overflow-hidden min-h-screen">
              <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                  {children}
              </div>
          </div>
        </>
    )
} 

export default BaseLayout;