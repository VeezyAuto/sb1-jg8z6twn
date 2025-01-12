/*
  # Form submissions schema

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key)
      - `type` (text) - Type of form (contact/demo)
      - `name` (text)
      - `email` (text)
      - `practice_name` (text)
      - `message` (text)
      - `service` (text, nullable) - For demo requests only
      - `created_at` (timestamp)
      - `status` (text) - For tracking follow-up status
  
  2. Security
    - Enable RLS on `form_submissions` table
    - Add policy for authenticated users to read/write submissions
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  practice_name text NOT NULL,
  message text NOT NULL,
  service text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Staff can read all submissions"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow public to create submissions"
  ON form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);