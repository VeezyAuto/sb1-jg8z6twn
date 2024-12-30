import React from 'react';
import { MessageSquare, Calendar, Users, Shield, Headphones } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ScrollReveal from '../components/ScrollReveal';
import GradientText from '../components/ui/GradientText';

const services = [
  {
    icon: MessageSquare,
    title: "24/7 Patient Support",
    description: "Give your patients the attention they deserve, any time of day or night.",
    benefits: [
      "Save 15+ hours per week on patient inquiries",
      "Instant responses to common questions",
      "Multilingual support for diverse communities",
      "Smart escalation to human staff when needed"
    ]
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "End scheduling chaos with our intelligent booking system.",
    benefits: [
      "Cut no-shows by up to 40%",
      "Automated appointment reminders",
      "Self-service rescheduling",
      "Optimized calendar management"
    ]
  },
  {
    icon: Users,
    title: "Complete Practice Support",
    description: "Your all-in-one solution for practice management.",
    benefits: [
      "Streamline insurance verification",
      "Automated billing follow-ups",
      "Quick document processing",
      "Efficient patient follow-ups"
    ]
  },
  {
    icon: Shield,
    title: "Guaranteed Security",
    description: "Bank-level security that exceeds HIPAA requirements.",
    benefits: [
      "Military-grade encryption",
      "Secure document sharing",
      "Complete audit trails",
      "24/7 security monitoring"
    ]
  },
  {
    icon: Headphones,
    title: "Expert Support Team",
    description: "We're here when you need us.",
    benefits: [
      "Dedicated success manager",
      "Priority support access",
      "Regular check-ins",
      "Custom optimization advice"
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0 bg-[radial-gradient-circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Solutions That Drive <GradientText>Real Results</GradientText>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Proven tools that save time, reduce costs, and improve patient satisfaction
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} className={`delay-${(index + 1) * 100}`}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}