import React from 'react';
import { Play, CheckCircle } from 'lucide-react';
import GradientText from '../components/ui/GradientText';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  "Full Package - Complete Healthcare Automation Suite",
  "Patient Communication System",
  "Appointment Scheduling",
  "Medical Records Management",
  "Billing & Insurance Processing",
  "Prescription Management",
  "Lab Results & Reports",
  "Telehealth Integration"
];

export default function Demo() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const benefits = [
    "Reduce administrative workload by 60%",
    "Improve patient satisfaction scores",
    "24/7 automated support",
    "HIPAA-compliant security",
    "Easy integration with existing systems",
    "Customizable automation workflows",
    "Dedicated support team"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Experience the Future of <GradientText>Healthcare Management</GradientText>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                See how our AI-powered platform can save your practice 20+ hours per week
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="bg-secondary-800 p-8 rounded-xl border border-secondary-700">
              <div className="aspect-video bg-secondary-700 rounded-xl mb-8 flex items-center justify-center">
                <Play className="h-16 w-16 text-blue-600" />
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Why Choose Veezy?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-secondary-800 p-8 rounded-xl border border-secondary-700">
              <h2 className="text-2xl font-bold mb-6">
                <GradientText>Schedule Your Free Demo</GradientText>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-secondary-900 text-white border border-secondary-700 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-secondary-900 text-white border border-secondary-700 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="practice" className="block text-sm font-medium text-gray-300 mb-2">Practice Name</label>
                  <input
                    type="text"
                    id="practice"
                    className="w-full px-4 py-2 rounded-md bg-secondary-900 text-white border border-secondary-700 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                    placeholder="Your practice name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Interested Service</label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 rounded-md bg-secondary-900 text-white border border-secondary-700 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-secondary-900 text-white border border-secondary-700 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <Button variant="primary" className="w-full">
                  Schedule Your Free Demo
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}