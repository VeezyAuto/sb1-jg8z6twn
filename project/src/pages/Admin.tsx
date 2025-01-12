import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Mail, Calendar } from 'lucide-react';

interface Submission {
  id: string;
  type: string;
  name: string;
  email: string;
  practice_name: string;
  message: string;
  service?: string;
  created_at: string;
  status: string;
}

export default function Admin() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSubmissions();
  }, []);

  async function fetchSubmissions() {
    try {
      const { data, error } = await supabase
        .from('form_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to load submissions');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-xl text-gray-400">Loading submissions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-xl text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Form Submissions</h1>
        
        <div className="grid gap-6">
          {submissions.map((submission) => (
            <div 
              key={submission.id} 
              className="bg-secondary-800 rounded-lg p-6 border border-secondary-700"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium
                  ${submission.type === 'demo' ? 'bg-blue-500/10 text-blue-400' : 'bg-green-500/10 text-green-400'}`}
                >
                  {submission.type === 'demo' ? 'Demo Request' : 'Contact Form'}
                </span>
                <span className="text-sm text-gray-400">
                  {new Date(submission.created_at).toLocaleString()}
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">{submission.name}</h3>
                  <div className="flex items-center text-gray-400 mb-2">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${submission.email}`} className="hover:text-blue-400">
                      {submission.email}
                    </a>
                  </div>
                  <div className="text-gray-400">
                    <span className="font-medium">Practice:</span> {submission.practice_name}
                  </div>
                  {submission.service && (
                    <div className="text-gray-400 mt-2">
                      <span className="font-medium">Service:</span> {submission.service}
                    </div>
                  )}
                </div>
                
                <div className="bg-secondary-900 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Message:</h4>
                  <p className="text-gray-400">{submission.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {submissions.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-300">No submissions yet</h3>
            <p className="text-gray-400">Form submissions will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}