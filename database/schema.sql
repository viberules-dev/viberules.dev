-- Create llm_txt_projects table
CREATE TABLE llm_txt_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  website VARCHAR(500) NOT NULL,
  llms_txt VARCHAR(500) NOT NULL,
  llms_full_txt VARCHAR(500),
  tokens INTEGER NOT NULL DEFAULT 0,
  full_tokens INTEGER,
  category VARCHAR(100),
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX idx_llm_txt_projects_name ON llm_txt_projects(name);
CREATE INDEX idx_llm_txt_projects_category ON llm_txt_projects(category);
CREATE INDEX idx_llm_txt_projects_is_verified ON llm_txt_projects(is_verified);
CREATE INDEX idx_llm_txt_projects_created_at ON llm_txt_projects(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE llm_txt_projects ENABLE ROW LEVEL SECURITY;

-- Create policies for RLS
-- Allow public read access
CREATE POLICY "Public can view verified projects" ON llm_txt_projects
  FOR SELECT USING (is_verified = true);

-- Allow authenticated users to insert new projects (for submissions)
CREATE POLICY "Authenticated users can insert projects" ON llm_txt_projects
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users to update their own submissions
CREATE POLICY "Users can update their own projects" ON llm_txt_projects
  FOR UPDATE USING (auth.uid() IS NOT NULL);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_llm_txt_projects_updated_at
  BEFORE UPDATE ON llm_txt_projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create a view for public projects
CREATE VIEW public_llm_txt_projects AS
SELECT
  id,
  name,
  description,
  website,
  llms_txt,
  llms_full_txt,
  tokens,
  full_tokens,
  category,
  created_at,
  updated_at
FROM llm_txt_projects
WHERE is_verified = true
ORDER BY created_at DESC;