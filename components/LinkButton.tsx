
import React from 'react';

interface LinkButtonProps {
    href: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, icon, children }) => {
    return (
        <a 
            href={href} 
            className="group flex items-center justify-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-cyan-500 transition-colors"
        >
            <div className="w-6 h-6 mr-3 text-cyan-500 group-hover:text-cyan-400 transition-colors">{icon}</div>
            <span className="font-semibold">{children}</span>
        </a>
    );
};
