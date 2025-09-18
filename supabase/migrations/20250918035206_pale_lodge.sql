/*
  # Create top_courses table for admin-managed featured courses

  1. New Tables
    - `top_courses`
      - `id` (uuid, primary key)
      - `title` (text, course title)
      - `instructor` (text, instructor name)
      - `rating` (numeric, course rating)
      - `review_count` (integer, number of reviews)
      - `student_count` (integer, number of students)
      - `price` (numeric, course price)
      - `original_price` (numeric, original price)
      - `duration` (text, course duration)
      - `lecture_count` (integer, number of lectures)
      - `level` (text, difficulty level)
      - `image_url` (text, course image)
      - `tags` (text array, course tags)
      - `last_updated` (text, last update info)
      - `is_bestseller` (boolean, bestseller badge)
      - `is_hot` (boolean, hot badge)
      - `is_new` (boolean, new badge)
      - `is_active` (boolean, active status)
      - `display_order` (integer, display order)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `top_courses` table
    - Add policy for admins to manage top courses
    - Add policy for public to view active top courses
*/

CREATE TABLE IF NOT EXISTS top_courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  instructor text NOT NULL DEFAULT 'Expert Instructor',
  rating numeric(2,1) DEFAULT 4.8 CHECK (rating >= 1 AND rating <= 5),
  review_count integer DEFAULT 1000 CHECK (review_count >= 0),
  student_count integer DEFAULT 5000 CHECK (student_count >= 0),
  price numeric(10,2) DEFAULT 89.99 CHECK (price >= 0),
  original_price numeric(10,2) DEFAULT 199.99 CHECK (original_price >= 0),
  duration text DEFAULT '40 hours',
  lecture_count integer DEFAULT 100 CHECK (lecture_count >= 0),
  level text DEFAULT 'Intermediate' CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
  image_url text,
  tags text[] DEFAULT '{}',
  last_updated text DEFAULT 'January 2024',
  is_bestseller boolean DEFAULT false,
  is_hot boolean DEFAULT false,
  is_new boolean DEFAULT false,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE top_courses ENABLE ROW LEVEL SECURITY;

-- Policy for admins to manage top courses
CREATE POLICY "Admins can manage top courses"
  ON top_courses
  FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- Policy for public to view active top courses
CREATE POLICY "Anyone can view active top courses"
  ON top_courses
  FOR SELECT
  TO public
  USING (is_active = true);

-- Create index for display order
CREATE INDEX IF NOT EXISTS idx_top_courses_display_order 
  ON top_courses(display_order) 
  WHERE is_active = true;

-- Create index for active courses
CREATE INDEX IF NOT EXISTS idx_top_courses_active 
  ON top_courses(is_active, display_order);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_top_courses_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER trigger_update_top_courses_updated_at
  BEFORE UPDATE ON top_courses
  FOR EACH ROW
  EXECUTE FUNCTION update_top_courses_updated_at();