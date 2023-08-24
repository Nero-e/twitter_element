import { ReactNode } from "react";

interface ScreenStyleProps {
  children: ReactNode;
}

const ScreenStyle = ({ children }: ScreenStyleProps) => {
  return (
    <>
      {/* screen */}
      <div className="h-screen bg-ghost-white selection:bg-[#1C1E30] selection:text-ghost-white p-4">
        {children}
      </div>
    </>
  );
};

export default ScreenStyle;
