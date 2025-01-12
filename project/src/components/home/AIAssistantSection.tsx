import React from 'react';
import ScrollReveal from '../ScrollReveal';
import GradientText from '../ui/GradientText';
import VideoPlayer from '../ui/VideoPlayer';

export default function AIAssistantSection() {
  return (
    <section className="py-20 bg-secondary-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Meet <GradientText>Sophia</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Your AI-powered healthcare assistant, designed to transform patient care and practice management
            </p>
            <div className="max-w-4xl mx-auto">
              <VideoPlayer
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Meet Sophia - Your AI Healthcare Assistant"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}