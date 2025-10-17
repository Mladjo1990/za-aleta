
import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  return (
    <section className="my-16 sm:my-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
      <div>
        {children}
      </div>
    </section>
  );
};
