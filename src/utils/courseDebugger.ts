import { supabase } from '@/integrations/supabase/client';

export const debugCourseVisibility = async () => {
  console.log('🔍 Starting course visibility debugging...');
  
  try {
    // 1. Check database connection
    const { data: connectionTest, error: connectionError } = await supabase
      .from('courses')
      .select('count')
      .limit(1);
    
    if (connectionError) {
      console.error('❌ Database connection failed:', connectionError);
      return;
    }
    console.log('✓ Database connection successful');

    // 2. Fetch all courses
    const { data: allCourses, error: fetchError } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });

    if (fetchError) {
      console.error('❌ Error fetching courses:', fetchError);
      return;
    }

    console.log(`📊 Total courses in database: ${allCourses?.length || 0}`);
    
    // 3. Check for AI courses specifically
    const aiCourses = allCourses?.filter(course => 
      course.title.toLowerCase().includes('ai') ||
      course.title.toLowerCase().includes('artificial intelligence') ||
      course.title.toLowerCase().includes('data science') ||
      course.title.toLowerCase().includes('prompt engineering') ||
      course.title.toLowerCase().includes('product management')
    );

    console.log(`🤖 AI-related courses found: ${aiCourses?.length || 0}`);
    
    if (aiCourses && aiCourses.length > 0) {
      console.log('🤖 AI Courses details:');
      aiCourses.forEach(course => {
        console.log(`  - ${course.title} (Status: ${course.status}, ID: ${course.id})`);
      });
    }

    // 4. Check course statuses
    const statusBreakdown = allCourses?.reduce((acc: any, course) => {
      acc[course.status] = (acc[course.status] || 0) + 1;
      return acc;
    }, {});

    console.log('📈 Course status breakdown:', statusBreakdown);

    // 5. Check for published courses specifically
    const publishedCourses = allCourses?.filter(course => course.status === 'published');
    console.log(`✅ Published courses: ${publishedCourses?.length || 0}`);

    // 6. Check RLS policies
    const { data: currentUser } = await supabase.auth.getUser();
    console.log('👤 Current user:', currentUser.user?.email || 'Not authenticated');

    return {
      totalCourses: allCourses?.length || 0,
      aiCourses: aiCourses?.length || 0,
      publishedCourses: publishedCourses?.length || 0,
      statusBreakdown,
      courses: allCourses
    };

  } catch (error) {
    console.error('❌ Debug function failed:', error);
  }
};

export const checkCourseDisplayComponent = () => {
  console.log('🔍 Checking course display components...');
  
  // Check if DatabaseCoursesDisplay is rendering
  const dbCoursesElement = document.querySelector('[data-component="database-courses"]');
  console.log('📱 DatabaseCoursesDisplay element found:', !!dbCoursesElement);
  
  // Check if AllCoursesDisplay is rendering
  const allCoursesElement = document.querySelector('[data-component="all-courses"]');
  console.log('📱 AllCoursesDisplay element found:', !!allCoursesElement);
  
  // Check for loading states
  const loadingElements = document.querySelectorAll('.animate-pulse');
  console.log('⏳ Loading elements found:', loadingElements.length);
  
  // Check for error messages
  const errorElements = document.querySelectorAll('[class*="error"], [class*="Error"]');
  console.log('❌ Error elements found:', errorElements.length);
};