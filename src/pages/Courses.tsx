
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AllCoursesDisplay from "@/components/AllCoursesDisplay";
import MyCourses from "../components/MyCourses";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft } from "lucide-react";

const Courses = () => {
  const [showMyCourses, setShowMyCourses] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-foreground text-background">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Students in classroom" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 w-4/5 mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-raleway font-bold mb-6">
            Our <span className="text-primary">Courses</span>
          </h1>
          <p className="text-xl font-cabin max-w-2xl mx-auto">
            Discover Professional Growth Through Our Virtual Internship Programs
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 bg-background">
        <div className="w-4/5 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              {showMyCourses ? "My Courses" : "All Courses"}
            </h2>
            
            {!showMyCourses ? (
              <Button 
                onClick={() => setShowMyCourses(true)}
                variant="outline"
                className="flex items-center gap-2"
              >
                <BookOpen size={20} />
                My Courses
              </Button>
            ) : (
              <Button 
                onClick={() => setShowMyCourses(false)}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Back to All Courses
              </Button>
            )}
          </div>
          
          {showMyCourses ? (
            <MyCourses />
          ) : (
            <div className="space-y-6">
              {/* Debug info for admin */}
              {user?.email === 'gowthamj0055@gmail.com' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Admin Debug Info</h4>
                  <p className="text-blue-700 text-sm">
                    You're viewing as admin. If courses aren't showing, check the admin panel to verify course status.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => navigate('/admin')}
                    className="mt-2"
                  >
                    Go to Admin Panel
                  </Button>
                </div>
              )}
              <p className="text-xl font-cabin text-primary text-center">
                We are pleased to present our current selection of courses offered through VIP Academy.
              </p>
              <AllCoursesDisplay />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
