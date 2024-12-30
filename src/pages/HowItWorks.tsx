import React from 'react';
import { MessageCircle, Calendar, HeartPulse, ArrowRight, Bot, Zap, Workflow } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/ui/Button';
import GradientText from '../components/ui/GradientText';

const steps = [
  {
    icon: Bot,
    title: "AI-Powered Interaction",
    description: "Our advanced AI system engages with patients through multiple channels, providing instant, accurate responses to their queries.",
    details: [
      "Natural language processing",
      "Multi-channel support",
      "24/7 availability",
      "Contextual understanding"
    ]
  },
  {
    icon: Workflow,
    title: "Intelligent Processing",
    description: "Smart automation handles scheduling, documentation, and routine tasks based on your practice's specific requirements.",
    details: [
      "Automated scheduling",
      "Document processing",
      "Task prioritization",
      "Custom workflows"
    ]
  },
  {
    icon: Zap,
    title: "Seamless Integration",
    description: "Everything connects smoothly with your existing systems, ensuring a unified and efficient operation.",
    details: [
      "EHR integration",
      "API connectivity",
      "Real-time sync",
      "Secure data transfer"
    ]
  }
];

export default function HowItWorks() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Experience the Power of <GradientText>Intelligent Automation</GradientText>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover how our AI-powered platform transforms healthcare operations into a seamless, efficient experience.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <ScrollReveal key={index} className="relative">
                <div className="bg-secondary-800 rounded-xl p-8 border border-secondary-700 hover:border-blue-400 transition-all duration-300 group">
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="mb-6 pt-2">
                    <div className="p-3 rounded-lg bg-blue-500/10 inline-block group-hover:bg-blue-500/20 transition-colors duration-300">
                      <step.icon className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-400 mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-secondary-900 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <ScrollReveal>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-400">
              Transform your practice with our cutting-edge automation solutions.
            </p>
            <Button to="/demo" variant="primary" className="inline-flex items-center">
              See it in Action
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}