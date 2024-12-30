import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import GradientText from '../components/ui/GradientText';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  "24/7 Patient Support",
  "Smart Scheduling",
  "Complete Practice Support",
  "Guaranteed Security",
  "Expert Support Team"
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Transform Your <GradientText>Healthcare Practice</GradientText>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Ready to streamline your operations? Our team is here to help you get started.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="bg-secondary-800 p-8 rounded-xl border border-secondary-700">
              <h2 className="text-2xl font-bold mb-6">
                <GradientText>Get in Touch</GradientText>
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
                  Send Message
                </Button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-secondary-800 p-8 rounded-xl border border-secondary-700">
              <h2 className="text-2xl font-bold mb-6">
                <GradientText>Contact Information</GradientText>
              </h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300">contact@veezy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Address</h3>
                    <p className="text-gray-300">
                      123 Innovation Drive<br />
                      Suite 100<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <Clock className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Business Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}