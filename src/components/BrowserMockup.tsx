import { ReactNode } from "react";

interface BrowserMockupProps {
  url?: string;
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark" | "infinall";
}

const BrowserMockup = ({ url = "infinall.ai", children, className = "", variant = "dark" }: BrowserMockupProps) => {
  const barBg = variant === "infinall" ? "bg-[hsl(220,20%,8%)]" : "bg-[hsl(0,0%,8%)]";
  const borderColor = variant === "infinall" ? "border-[hsl(190,100%,50%,0.15)]" : "border-[hsl(0,0%,15%)]";

  return (
    <div className={`rounded-xl overflow-hidden shadow-[0_20px_60px_-15px_hsl(0,0%,0%,0.6)] border ${borderColor} ${className}`}>
      {/* Top bar */}
      <div className={`${barBg} px-4 py-3 flex items-center gap-3 border-b ${borderColor}`}>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[hsl(0,70%,50%)]" />
          <div className="w-3 h-3 rounded-full bg-[hsl(45,90%,50%)]" />
          <div className="w-3 h-3 rounded-full bg-[hsl(120,60%,45%)]" />
        </div>
        <div className="flex-1 max-w-md mx-auto">
          <div className={`${variant === "infinall" ? "bg-[hsl(220,18%,12%)]" : "bg-[hsl(0,0%,12%)]"} rounded-md px-3 py-1.5 text-xs text-muted-foreground text-center font-mono`}>
            {url}
          </div>
        </div>
        <div className="w-14" />
      </div>
      {/* Content */}
      <div className={variant === "infinall" ? "bg-[hsl(220,20%,4%)]" : "bg-[hsl(0,0%,5%)]"}>
        {children}
      </div>
    </div>
  );
};

export default BrowserMockup;
