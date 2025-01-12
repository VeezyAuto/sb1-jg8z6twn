import React from 'react';

interface VideoPlayerProps {
  src: string;
  title: string;
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  return (
    <div className="relative w-full aspect-video bg-secondary-800 rounded-xl overflow-hidden shadow-2xl border border-secondary-700">
      <iframe
        src={src}
        className="absolute inset-0 w-full h-full"
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}