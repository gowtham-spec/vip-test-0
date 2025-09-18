
import DatabaseCoursesDisplay from "./DatabaseCoursesDisplay";

const AllCoursesDisplay = () => {
  return (
    <div className="space-y-16" data-component="all-courses">
      {/* Database Courses with Authentication */}
      <DatabaseCoursesDisplay />
    </div>
  );
};

export default AllCoursesDisplay;
