import React from 'react';
import { Heart, Shield, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ScrollReveal';
import GradientText from '../components/ui/GradientText';

const values = [
  {
    icon: Heart,
    title: "Patient-First",
    description: "Everything we do is focused on improving patient care and satisfaction."
  },
  {
    icon: Shield,
    title: "Security",
    description: "We maintain the highest standards of data security and privacy."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Continuously pushing the boundaries of healthcare technology."
  }
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Meet the Team Behind <GradientText>Healthcare Innovation</GradientText>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Dedicated to transforming healthcare administration through intelligent automation.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Mission Section */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-8">
                At Veezy Automation, we're on a mission to revolutionize healthcare administration through intelligent automation. Our AI-powered solutions are designed to streamline operations, reduce administrative burden, and allow healthcare providers to focus on what matters most: patient care.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                We believe that by leveraging cutting-edge technology, we can help create more efficient, responsive, and patient-centered healthcare practices.
              </p>
              <Button to="/demo">Schedule a Demo</Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2070"
                alt="Healthcare innovation"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Values Section */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-secondary-800 p-8 rounded-xl border border-secondary-700">
                <div className="p-3 rounded-lg bg-blue-500/10 inline-block mb-4">
                  <value.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}