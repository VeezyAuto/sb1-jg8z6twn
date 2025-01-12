import React from 'react';
import { Clock, DollarSign, Heart } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import GradientText from '../ui/GradientText';

const benefits = [
  {
    icon: Clock,
    title: "Save Valuable Time",
    description: "Automate routine tasks and dedicate more time to what truly matters - patient care. Save over 20 hours every week."
  },
  {
    icon: DollarSign,
    title: "Reduce Operational Costs",
    description: "Optimize your practice's efficiency with smart automation and resource management, reducing costs by up to 40%."
  },
  {
    icon: Heart,
    title: "Enhance Patient Satisfaction",
    description: "Provide immediate, 24/7 support and watch your patient satisfaction scores exceed 95%."
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Eliminate <GradientText>Administrative Burden</GradientText>
            </h2>
            <p className="text-xl text-gray-400">
              Focus on delivering exceptional patient care while our AI handles the administrative tasks.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} className={`delay-${(index + 1) * 100}`}>
              <div className="group p-8 rounded-2xl transition-all duration-200 hover:bg-secondary-800 bg-secondary-800/50 border border-secondary-700">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <benefit.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}