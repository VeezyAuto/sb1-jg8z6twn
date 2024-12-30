import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stepNumber: number;
}

export default function ProcessStep({ icon: Icon, title, description, stepNumber }: ProcessStepProps) {
  return (
    <div className="relative flex items-start">
      <div className="absolute top-0 left-0 -ml-3 mt-1">
        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
          {stepNumber}
        </div>
      </div>
      <div className="ml-8">
        <Icon className="h-8 w-8 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}