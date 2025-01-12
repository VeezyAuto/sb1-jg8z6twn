import React from 'react';
import { Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <Bot className="h-8 w-8 text-blue-400" />
      <span className="ml-2 text-xl font-semibold text-white">Veezy Automation</span>
    </Link>
  );
}