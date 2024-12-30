import React, { useEffect } from 'react';

interface VoiceflowChatProps {
  projectID: string;
  versionID?: string;
}

export default function VoiceflowChat({ projectID, versionID }: VoiceflowChatProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.voiceflow.com/widget/bundle.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore: Voiceflow widget global object
      window.voiceflow.chat.load({
        verify: { projectID, versionID },
        url: 'https://general-runtime.voiceflow.com',
        versionID: versionID || 'production',
        styles: {
          dimensions: {
            width: 400,
            height: 600,
          },
          colors: {
            primary: '#0ea5e9', // blue-500
            secondary: '#0f172a', // secondary-800
            background: '#020617', // secondary-900
            text: '#ffffff',
            textLight: '#94a3b8', // secondary-400
          },
          borderRadius: '0.75rem',
          button: {
            backgroundColor: '#0ea5e9', // blue-500
            hoverBackgroundColor: '#0284c7', // blue-600
          },
          message: {
            avatar: {
              backgroundColor: '#0ea5e9', // blue-500
            },
            user: {
              backgroundColor: '#1e293b', // secondary-700
              textColor: '#ffffff',
            },
            assistant: {
              backgroundColor: '#0f172a', // secondary-800
              textColor: '#ffffff',
            },
          },
          launcher: {
            backgroundColor: '#0ea5e9', // blue-500
            size: '3.5rem',
          },
          header: {
            title: 'Veezy Assistant',
            subtitle: 'AI-powered support',
            backgroundColor: '#0f172a', // secondary-800
            textColor: '#ffffff',
          },
          input: {
            backgroundColor: '#1e293b', // secondary-700
            textColor: '#ffffff',
            placeholderColor: '#94a3b8', // secondary-400
          },
        },
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [projectID, versionID]);

  return null;
}