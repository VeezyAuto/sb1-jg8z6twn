import React from 'react';
import ScrollReveal from '../ScrollReveal';
import GradientText from '../ui/GradientText';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
              Healthcare Automation That Works
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <GradientText>Transform Your</GradientText><br />
              <GradientText>Practice Operations</GradientText>
            </h1>
            <p className="text-xl mb-8 text-gray-400">
              Streamline your healthcare practice with intelligent automation that saves time, reduces costs, and improves patient satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/demo" variant="primary">
                Schedule Your Free Demo
              </Button>
              <Button to="/how-it-works" variant="secondary">
                See How It Works
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}