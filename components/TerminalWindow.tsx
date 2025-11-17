
import React from 'react';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`border-2 border-accent/30 bg-secondary/50 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm animate-border-glow ${className}`}>
      <div className="bg-secondary/80 px-4 py-2 flex items-center justify-between border-b-2 border-accent/30">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <p className="text-sm text-text-secondary font-semibold">{title}</p>
        <div className="w-12"></div>
      </div>
      <div className="p-6 md:p-8 font-mono">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;