import React from 'react';
import HeroSection from '../components/home/HeroSection';
import SocialProof from '../components/home/SocialProof';
import BenefitsSection from '../components/home/BenefitsSection';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/ui/Button';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SocialProof />
      <BenefitsSection />
      
      {/* CTA Section */}
      <section className="relative overflow-hidden bg-secondary-900 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <ScrollReveal>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Practice Today</h2>
            <p className="text-xl mb-8 text-gray-400">
              Experience the power of intelligent healthcare automation
            </p>
            <Button to="/demo" variant="primary">
              Book Your Free Demo
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}