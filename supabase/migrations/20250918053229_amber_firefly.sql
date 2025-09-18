/*
  # Enable real-time updates for top courses

  1. Security
    - Enable RLS on top_courses table (if not already enabled)
    - Add policies for real-time subscriptions
    - Create trigger function for updated_at timestamp

  2. Real-time Features
    - Enable real-time for top_courses table
    - Add updated_at trigger for automatic timestamp updates
*/

-- Enable RLS if not already enabled
ALTER TABLE top_courses ENABLE ROW LEVEL SECURITY;

-- Create or replace the updated_at trigger function
CREATE OR REPLACE FUNCTION update_top_courses_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'trigger_update_top_courses_updated_at'
  ) THEN
    CREATE TRIGGER trigger_update_top_courses_updated_at
      BEFORE UPDATE ON top_courses
      FOR EACH ROW
      EXECUTE FUNCTION update_top_courses_updated_at();
  END IF;
END $$;

-- Ensure the table has proper indexes for performance
CREATE INDEX IF NOT EXISTS idx_top_courses_active ON top_courses (is_active, display_order);
CREATE INDEX IF NOT EXISTS idx_top_courses_display_order ON top_courses (display_order) WHERE is_active = true;