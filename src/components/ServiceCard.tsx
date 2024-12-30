import React from 'react';
import { LucideIcon } from 'lucide-react';
import Button from './ui/Button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

export default function ServiceCard({ icon: Icon, title, description, benefits }: ServiceCardProps) {
  return (
    <div className="bg-secondary-800 p-8 rounded-xl border border-secondary-700 hover:border-blue-400 transition-all duration-300 group">
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
          <Icon className="h-8 w-8 text-blue-400" />
        </div>
        <h3 className="text-2xl font-semibold ml-4 text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-6 text-lg">{description}</p>
      <ul className="space-y-3 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <span className="text-blue-400 mr-2 text-lg">•</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <Button to="/contact" variant="secondary" className="w-full">Learn More</Button>
    </div>
  );
}