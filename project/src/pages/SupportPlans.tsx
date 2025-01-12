import React from 'react';
import { Shield, Clock, Zap, HeartPulse, Check } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import GradientText from '../components/ui/GradientText';
import Button from '../components/ui/Button';

const plans = [
  {
    name: "Essential Support",
    price: "$1,500",
    description: "Basic support package for smaller practices",
    features: [
      "Email support during business hours",
      "48-hour response time",
      "Monthly system health checks",
      "Basic security updates",
      "Quarterly performance reports"
    ]
  },
  {
    name: "Professional Support",
    price: "$2,500",
    description: "Comprehensive support for growing practices",
    features: [
      "Priority email and phone support",
      "24-hour response time",
      "Weekly system health checks",
      "Advanced security monitoring",
      "Monthly performance optimization",
      "Dedicated support manager",
      "Staff training sessions"
    ],
    popular: true
  },
  {
    name: "Enterprise Support",
    price: "Custom",
    description: "Full-service support for large healthcare organizations",
    features: [
      "24/7 premium support",
      "1-hour response time",
      "Daily system monitoring",
      "Custom security protocols",
      "Weekly optimization",
      "Dedicated team",
      "Unlimited training",
      "Custom feature development"
    ]
  }
];

const features = [
  {
    icon: Shield,
    title: "Security Updates",
    description: "Regular security patches and updates to protect patient data"
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Continuous system monitoring and instant issue detection"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Regular system tuning for optimal performance"
  },
  {
    icon: HeartPulse,
    title: "Health Checks",
    description: "Proactive system health monitoring and maintenance"
  }
];

export default function SupportPlans() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Choose Your <GradientText>Support Plan</GradientText>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive support packages designed to keep your automation running smoothly
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <ScrollReveal key={index} className={`delay-${(index + 1) * 100}`}>
                <div className={`bg-secondary-800 rounded-xl p-8 border ${plan.popular ? 'border-blue-400' : 'border-secondary-700'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-4">{plan.price}</div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button to="/contact" variant="primary" className="w-full">
                    Get Started
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Included in All <GradientText>Support Plans</GradientText>
              </h2>
              <p className="text-xl text-gray-400">
                Core features that keep your system running at its best
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} className={`delay-${(index + 1) * 100}`}>
                <div className="bg-secondary-800 p-6 rounded-xl border border-secondary-700">
                  <div className="p-3 rounded-lg bg-blue-500/10 inline-block mb-4">
                    <feature.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}