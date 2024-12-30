import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import GradientText from '../components/ui/GradientText';
import PackageCard from '../components/packages/PackageCard';
import ComparisonTable from '../components/packages/ComparisonTable';

const packages = [
  {
    title: 'Build and Deliver',
    description: 'We design and implement your automation workflows, provide training, and hand over the system for you to manage.',
    benefits: [
      'One-time cost with no ongoing fees',
      'Custom-built to meet your practice\'s needs',
      'Hands-on training for your team',
      'Full control over your system',
      'Comprehensive documentation',
    ],
    ctaText: 'Get a Quote',
    ctaLink: '/contact',
  },
  {
    title: 'Build and Maintain',
    description: 'We design, implement, and provide continuous support to keep your system running smoothly and up-to-date.',
    benefits: [
      'Ongoing support and updates',
      'Compliance with changing regulations',
      'Performance analytics and optimization',
      'Regular system maintenance',
      'Priority support access',
    ],
    ctaText: 'Explore Support Plans',
    ctaLink: '/support-plans',
  },
];

export default function Packages() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Choose the Right <GradientText>Service Model</GradientText>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Whether you want full control or ongoing support, we've got you covered
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <ScrollReveal key={index} className={`delay-${(index + 1) * 100}`}>
                <PackageCard {...pkg} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-secondary-800 rounded-xl p-8 border border-secondary-700">
              <h2 className="text-2xl font-bold mb-8 text-center">Feature Comparison</h2>
              <ComparisonTable />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}