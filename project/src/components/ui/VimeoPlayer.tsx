import React from 'react';

interface VimeoPlayerProps {
  videoId: string;
  title: string;
}

export default function VimeoPlayer({ videoId, title }: VimeoPlayerProps) {
  return (
    <div className="relative w-full aspect-video bg-secondary-800 rounded-xl overflow-hidden shadow-2xl border border-secondary-700">
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );
}