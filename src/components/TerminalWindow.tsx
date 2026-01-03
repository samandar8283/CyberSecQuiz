import { ReactNode } from 'react';

interface TerminalWindowProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

const TerminalWindow = ({ children, title = "terminal", className = "" }: TerminalWindowProps) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="flex gap-2">
          <div className="terminal-dot bg-destructive" />
          <div className="terminal-dot bg-warning" />
          <div className="terminal-dot bg-success" />
        </div>
        <span className="text-muted-foreground text-sm ml-4">
          {title}
        </span>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
