
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 transition-all duration-300 hover:border-cyan-500/50 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 text-cyan-400 mr-4 flex-shrink-0">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};
