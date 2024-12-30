import React from 'react';
import { Clock, DollarSign, Heart } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import GradientText from '../ui/GradientText';

const benefits = [
  {
    icon: Clock,
    title: "Save Precious Time",
    description: "Automate repetitive tasks and save 20+ hours every week for what matters most - patient care."
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description: "Cut operational costs by up to 40% with smart automation and efficient resource allocation."
  },
  {
    icon: Heart,
    title: "Happier Patients",
    description: "Provide instant support 24/7 and watch your patient satisfaction scores soar above 95%."
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Stop Losing Time on <GradientText>Administrative Tasks</GradientText>
            </h2>
            <p className="text-xl text-gray-400">
              Focus on what matters most - your patients. Let our AI handle the rest.
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