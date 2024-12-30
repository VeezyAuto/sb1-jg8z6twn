import React from 'react';
import { Check } from 'lucide-react';
import Button from '../ui/Button';

interface PackageCardProps {
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
}

export default function PackageCard({ title, description, benefits, ctaText, ctaLink }: PackageCardProps) {
  return (
    <div className="bg-secondary-800 p-8 rounded-xl border border-secondary-700 hover:border-blue-400 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-4 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
            <span className="text-gray-300">{benefit}</span>
          </li>
        ))}
      </ul>
      <Button to={ctaLink} variant="primary" className="w-full">
        {ctaText}
      </Button>
    </div>
  );
}