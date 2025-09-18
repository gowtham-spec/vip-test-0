// Debug script to check course data
// Run this in browser console on the courses page

console.log('=== COURSE DEBUGGING SCRIPT ===');

// Check if Supabase client is available
if (typeof supabase !== 'undefined') {
  console.log('✓ Supabase client found');
  
  // Fetch all courses from database
  supabase
    .from('courses')
    .select('*')
    .then(({ data, error }) => {
      if (error) {
        console.error('❌ Database error:', error);
      } else {
        console.log('📊 Total courses in database:', data?.length || 0);
        console.log('📋 Course data:', data);
        
        // Check for your specific AI courses
        const aiCourses = data?.filter(course => 
          course.title.toLowerCase().includes('ai') || 
          course.title.toLowerCase().includes('artificial intelligence')
        );
        
        console.log('🤖 AI-related courses found:', aiCourses?.length || 0);
        console.log('🤖 AI courses:', aiCourses);
        
        // Check course statuses
        const statusCounts = data?.reduce((acc, course) => {
          acc[course.status] = (acc[course.status] || 0) + 1;
          return acc;
        }, {});
        
        console.log('📈 Course status breakdown:', statusCounts);
      }
    });
} else {
  console.error('❌ Supabase client not found');
}

// Check if courses are being fetched in the component
console.log('🔍 Checking course fetch in component...');