import React from 'react';
import { Brain, MessageSquare, Shield, Clock, Bot, Heart } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import GradientText from '../ui/GradientText';

const features = [
  {
    icon: Brain,
    title: "Advanced AI Intelligence",
    description: "I leverage cutting-edge AI to understand and respond to complex healthcare scenarios."
  },
  {
    icon: MessageSquare,
    title: "Natural Communication",
    description: "I communicate naturally with patients and staff, providing clear and helpful responses."
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "Your data security is my priority, with built-in HIPAA compliance and encryption."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "I'm always here to help, providing consistent support around the clock."
  },
  {
    icon: Bot,
    title: "Continuous Learning",
    description: "I evolve and improve through each interaction, becoming more helpful over time."
  },
  {
    icon: Heart,
    title: "Patient-Centric Care",
    description: "I help you focus on what matters most - providing excellent patient care."
  }
];

export default function SophiaFeatures() {
  return (
    <section className="py-20 bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              My <GradientText>Capabilities</GradientText>
            </h2>
            <p className="text-xl text-gray-400">
              Here's how I can help transform your healthcare practice
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} className={`delay-${(index + 1) * 100}`}>
              <div className="group p-8 rounded-2xl transition-all duration-200 hover:bg-secondary-800 bg-secondary-800/50 border border-secondary-700">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}