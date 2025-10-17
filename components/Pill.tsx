
import React from 'react';

interface PillProps {
  text: string;
  color: 'green' | 'cyan';
}

export const Pill: React.FC<PillProps> = ({ text, color }) => {
  const colorClasses = {
    green: 'bg-green-500/20 text-green-300 border border-green-500/30',
    cyan: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30',
  };

  return (
    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${colorClasses[color]}`}>
      {text}
    </span>
  );
};
