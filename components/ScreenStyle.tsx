import { ReactNode } from "react";

interface ScreenStyleProps {
  children: ReactNode;
}

const ScreenStyle = ({ children }: ScreenStyleProps) => {
  return (
    <>
      {/* screen */}
      <div className="justify-center h-screen selection:bg-[#1C1E30] selection:text-ghost-white p-4">
        {children}
      </div>
    </>
  );
};

export default ScreenStyle;
