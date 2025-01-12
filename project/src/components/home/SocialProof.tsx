import React from 'react';
import ScrollReveal from '../ScrollReveal';

const stats = [
  { label: 'Time Saved Weekly', value: '20+' },
  { label: 'Patient Satisfaction', value: '95%' },
  { label: 'ROI Within 3 Months', value: '300%' },
  { label: 'Satisfied Providers', value: '500+' }
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-secondary-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}