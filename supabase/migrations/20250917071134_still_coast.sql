/*
  # Add AI-Powered Courses to Database

  1. New Courses
    - AI Powered Digital Marketing Specialist
    - Generative AI and Prompt Engineering Specialist
    - AI Product Management
    - AI Powered Accounting and Analytics
    - Data Science and AI Business Specialist

  2. Security
    - Enable RLS on courses table (already enabled)
    - Courses are publicly viewable when published

  3. Features
    - Complete course information with descriptions
    - Instructor details
    - Course metadata (duration, sessions, etc.)
    - Published status for immediate visibility
*/

-- Insert AI-Powered Digital Marketing Specialist
INSERT INTO courses (
  title,
  slug,
  subtitle,
  description,
  short_description,
  category,
  image_url,
  background_image_url,
  duration,
  session_duration,
  total_duration_months,
  session_count,
  total_lessons,
  prerequisites,
  instructor_name,
  instructor_title,
  instructor_experience,
  instructor_description,
  instructor_bio,
  instructor_image_url,
  status
) VALUES (
  'AI-Powered Digital Marketing Specialist',
  'ai-digital-marketing-specialist',
  'Master the future of digital marketing with AI-powered tools and automation',
  'Master the future of digital marketing with AI-powered tools, automation, and data-driven strategies that deliver exceptional results. Learn to leverage artificial intelligence for SEO, content creation, social media management, and campaign optimization.',
  'Transform your marketing career with cutting-edge AI tools and strategies that drive measurable business growth.',
  'DIGITAL MARKETING & AI',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  '3 Month Course',
  '2 Hour Sessions',
  3,
  36,
  72,
  'Basic understanding of digital marketing concepts is helpful but not required. Familiarity with social media platforms and basic computer skills.',
  'Priya Sharma',
  'Digital Marketing AI Specialist',
  '8+ years in digital marketing and AI automation',
  'Priya is a certified digital marketing expert with extensive experience in AI-powered marketing automation. She has helped numerous businesses achieve 300%+ growth through strategic AI implementation.',
  'Expert in AI-driven marketing strategies with proven track record of helping businesses scale through intelligent automation and data-driven campaigns.',
  'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  'published'
);

-- Insert Generative AI and Prompt Engineering Specialist
INSERT INTO courses (
  title,
  slug,
  subtitle,
  description,
  short_description,
  category,
  image_url,
  background_image_url,
  duration,
  session_duration,
  total_duration_months,
  session_count,
  total_lessons,
  prerequisites,
  instructor_name,
  instructor_title,
  instructor_experience,
  instructor_description,
  instructor_bio,
  instructor_image_url,
  status
) VALUES (
  'Generative AI & Prompt Engineering Specialist',
  'generative-ai-prompt-engineering-specialist',
  'Master the future of AI content creation and automation',
  'Master the future of AI content creation. Learn to harness generative AI for business automation, creative content, and innovative solutions. Become an expert in prompt engineering and AI-powered workflows.',
  'Learn to communicate effectively with AI systems to generate high-quality content and automate complex workflows.',
  'ARTIFICIAL INTELLIGENCE',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  '6 Month Course',
  '2 Hour Sessions',
  6,
  72,
  144,
  'Basic computer literacy and curiosity about AI technologies. No prior programming experience required.',
  'Dr. Arjun Kumar',
  'AI Research Scientist & Prompt Engineering Expert',
  '10+ years in AI research and prompt engineering',
  'Dr. Kumar is a leading expert in generative AI and prompt engineering with extensive experience in developing AI-powered solutions for businesses across various industries.',
  'Pioneer in prompt engineering methodologies with published research in AI content generation and automation systems.',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  'published'
);

-- Insert AI Product Management
INSERT INTO courses (
  title,
  slug,
  subtitle,
  description,
  short_description,
  category,
  image_url,
  background_image_url,
  duration,
  session_duration,
  total_duration_months,
  session_count,
  total_lessons,
  prerequisites,
  instructor_name,
  instructor_title,
  instructor_experience,
  instructor_description,
  instructor_bio,
  instructor_image_url,
  status
) VALUES (
  'AI Product Management',
  'ai-product-management',
  'Lead the future of AI product development and strategy',
  'Lead the future of AI product development. Master the skills to build, launch, and scale AI-powered products that transform industries. Learn to bridge technical teams and business stakeholders in AI initiatives.',
  'Develop expertise in managing AI products from conception to market success with strategic leadership skills.',
  'PRODUCT MANAGEMENT & AI',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  '6 Month Course',
  '2 Hour Sessions',
  6,
  72,
  144,
  'Bachelor''s degree and 2+ years of work experience in technology, business, or related field. Basic understanding of product development lifecycle.',
  'Ananya Singh',
  'Senior AI Product Manager',
  '12+ years in product management with focus on AI products',
  'Ananya has led AI product development at major tech companies and has successfully launched multiple AI-powered products that have generated millions in revenue.',
  'Seasoned product leader with expertise in AI product strategy, team management, and bringing innovative AI solutions to market.',
  'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  'published'
);

-- Insert AI Powered Accounting and Analytics
INSERT INTO courses (
  title,
  slug,
  subtitle,
  description,
  short_description,
  category,
  image_url,
  background_image_url,
  duration,
  session_duration,
  total_duration_months,
  session_count,
  total_lessons,
  prerequisites,
  instructor_name,
  instructor_title,
  instructor_experience,
  instructor_description,
  instructor_bio,
  instructor_image_url,
  status
) VALUES (
  'AI-Powered Accounting & Financial Analytics',
  'ai-powered-accounting-financial-analytics',
  'Revolutionize finance with AI-powered accounting and analytics',
  'Master modern accounting practices enhanced with AI-powered analytics, financial forecasting, and automated reporting systems. Learn to leverage artificial intelligence for fraud detection, financial planning, and business intelligence.',
  'Combine traditional accounting expertise with cutting-edge AI technologies for enhanced financial analysis and reporting.',
  'FINANCE & AI',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  '4 Month Course',
  '2 Hour Sessions',
  4,
  48,
  96,
  'Basic accounting knowledge and familiarity with Excel. Understanding of financial statements is helpful but not required.',
  'Rajesh Agarwal',
  'AI Finance Specialist & CPA',
  '15+ years in finance and accounting with AI specialization',
  'Rajesh combines deep accounting expertise with advanced AI knowledge to help professionals modernize their financial practices and improve business outcomes.',
  'Certified Public Accountant with expertise in AI-powered financial systems and automated reporting solutions.',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  'published'
);

-- Insert Data Science and AI Business Specialist
INSERT INTO courses (
  title,
  slug,
  subtitle,
  description,
  short_description,
  category,
  image_url,
  background_image_url,
  duration,
  session_duration,
  total_duration_months,
  session_count,
  total_lessons,
  prerequisites,
  instructor_name,
  instructor_title,
  instructor_experience,
  instructor_description,
  instructor_bio,
  instructor_image_url,
  status
) VALUES (
  'Data Science & AI for Business Specialist',
  'data-science-ai-business-specialist',
  'Transform business operations with data-driven insights and AI solutions',
  'Transform business operations with data-driven insights and AI-powered solutions. Master analytics, machine learning, and business intelligence to drive strategic decision-making and organizational growth.',
  'Learn to leverage data science and AI technologies to solve real business challenges and drive measurable results.',
  'DATA SCIENCE & AI',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  '6 Month Course',
  '2 Hour Sessions',
  6,
  72,
  144,
  'Basic mathematics and statistics knowledge. Familiarity with Excel and basic programming concepts is helpful but not required.',
  'Dr. Kavita Sharma',
  'Lead Data Scientist & Business Intelligence Expert',
  '12+ years in data science and business analytics',
  'Dr. Sharma specializes in translating complex data insights into actionable business strategies. She has helped numerous organizations implement successful AI-driven solutions.',
  'PhD in Statistics with extensive experience in applying data science and AI technologies to solve complex business challenges.',
  'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  'published'
);