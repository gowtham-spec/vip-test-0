import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, Award, ArrowRight, Brain, Calculator, Lightbulb, TrendingUp, Search, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NewCoursesSection = () => {
  const newCourses = [
    {
      id: "data-science-ai-business",
      title: "Data Science & AI for Business Specialist",
      duration: "6 Months",
      description: "Transform business operations with data-driven insights and AI-powered solutions. Master analytics, machine learning, and business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-600 to-blue-800",
      href: "/courses/data-science-ai-business",
      highlights: ["Business Analytics", "Machine Learning", "AI Implementation", "Data Visualization"]
    },
    {
      id: "ai-accounting-financial",
      title: "AI-Powered Accounting & Financial Analytics",
      duration: "4 Months",
      description: "Master modern accounting practices enhanced with AI-powered analytics, financial forecasting, and automated reporting systems.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-green-600 to-green-800",
      href: "/courses/ai-accounting-financial",
      highlights: ["Digital Accounting", "AI Analytics", "Financial Forecasting", "Fraud Detection"]
    },
    {
      id: "ai-product-management",
      title: "AI Product Management",
      duration: "6 Months",
      description: "Lead the future of AI product development. Master the skills to build, launch, and scale AI-powered products that transform industries.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-purple-600 to-purple-800",
      href: "/courses/ai-product-management",
      highlights: ["Product Strategy", "AI Technologies", "Team Leadership", "Market Analysis"]
    },
    {
      id: "generative-ai-prompt-engineering",
      title: "Generative AI & Prompt Engineering Specialist",
      duration: "6 Months",
      description: "Master the future of AI content creation. Learn to harness generative AI for business automation, creative content, and innovative solutions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-indigo-600 to-indigo-800",
      href: "/courses/generative-ai-prompt-engineering",
      highlights: ["Prompt Engineering", "Content Generation", "AI Automation", "Creative AI"]
    },
    {
      id: "ai-digital-marketing",
      title: "AI-Powered Digital Marketing Specialist",
      duration: "3 Months",
      description: "Master the future of digital marketing with AI-powered tools, automation, and data-driven strategies that deliver exceptional results.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Search className="w-8 h-8" />,
      color: "from-orange-600 to-orange-800",
      href: "/courses/ai-digital-marketing",
      highlights: ["AI SEO", "Automated Campaigns", "Social Media AI", "Marketing Analytics"]
    },
    {
      id: "ai-fullstack-developer",
      title: "AI Full Stack Developer Specialist",
      duration: "6 Months",
      description: "Master full-stack development enhanced with AI capabilities. Build intelligent web applications using modern frameworks and AI integration.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-600 to-purple-800",
      href: "/courses/ai-fullstack-developer",
      highlights: ["React & Node.js", "AI Integration", "Cloud Deployment", "Modern Architecture"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Brain className="w-4 h-4" />
            New AI-Powered Programs
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Master the Future with{" "}
            <span className="text-primary">AI Specializations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest AI-powered courses designed to prepare you for the jobs of tomorrow. 
            Each program combines cutting-edge technology with practical business applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden h-full">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  
                  {/* Course Icon */}
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${course.color} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                    {course.icon}
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/50 text-white border-0">
                      {course.duration}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Course Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Course Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>Expert Led</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>Certified</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to={course.href}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Section CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Future-Proof Your Career?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are already mastering AI technologies and transforming their careers with our specialized programs.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore All AI Courses
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewCoursesSection;