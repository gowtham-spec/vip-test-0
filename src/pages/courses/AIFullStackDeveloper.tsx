import { motion } from "framer-motion";
import { Clock, Users, BookOpen, Target, Award, CheckCircle, Code, Database, Cloud, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AIFullStackDeveloper = () => {
  const modules = [
    {
      title: "Module 1: Foundations of Full Stack Development",
      topics: [
        "Introduction to Full Stack Development & Modern Web Architecture",
        "Frontend Technologies: HTML5, CSS3, JavaScript ES6+",
        "Backend Technologies: Node.js, Express.js, Python/Django",
        "Database Fundamentals: SQL & NoSQL (MongoDB, PostgreSQL)"
      ]
    },
    {
      title: "Module 2: Frontend Development with AI Integration",
      topics: [
        "React.js & Next.js for Modern Web Applications",
        "State Management with Redux & Context API",
        "AI-powered UI/UX with Intelligent Components",
        "Responsive Design & Progressive Web Apps (PWA)"
      ]
    },
    {
      title: "Module 3: Backend Development & API Design",
      topics: [
        "RESTful API Development & GraphQL",
        "Authentication & Authorization (JWT, OAuth)",
        "Microservices Architecture & Design Patterns",
        "API Security & Rate Limiting"
      ]
    },
    {
      title: "Module 4: AI & Machine Learning Integration",
      topics: [
        "Introduction to AI/ML for Developers",
        "Integrating AI APIs (OpenAI, Google AI, Azure AI)",
        "Building AI-powered Features (Chatbots, Recommendations)",
        "Natural Language Processing in Web Applications"
      ]
    },
    {
      title: "Module 5: Database Design & Management",
      topics: [
        "Advanced Database Design & Optimization",
        "ORM/ODM Implementation (Prisma, Mongoose)",
        "Database Security & Performance Tuning",
        "Data Analytics & Business Intelligence Integration"
      ]
    },
    {
      title: "Module 6: Cloud Computing & DevOps",
      topics: [
        "Cloud Platforms: AWS, Azure, Google Cloud",
        "Containerization with Docker & Kubernetes",
        "CI/CD Pipelines & Automated Testing",
        "Monitoring, Logging & Performance Optimization"
      ]
    },
    {
      title: "Module 7: AI-Enhanced Development Tools",
      topics: [
        "AI Code Assistants (GitHub Copilot, Tabnine)",
        "Automated Testing with AI",
        "AI-powered Code Review & Quality Assurance",
        "Intelligent Debugging & Performance Analysis"
      ]
    },
    {
      title: "Module 8: Capstone Projects",
      topics: [
        "AI-powered E-commerce Platform with Recommendations",
        "Intelligent Social Media Application",
        "AI-driven Business Analytics Dashboard",
        "Real-time Chat Application with AI Moderation"
      ]
    }
  ];

  const features = [
    "100% Placement Support with dedicated career guidance and internship opportunities",
    "Hands-on experience with latest AI tools and full-stack technologies",
    "Real-world project portfolio development with industry-standard practices",
    "Expert mentorship from senior full-stack developers and AI specialists",
    "Live coding sessions and collaborative development environment",
    "Globally recognized micro degree certificate with industry validation"
  ];

  const learningOutcomes = [
    {
      title: "Full-Stack Mastery",
      description: "Master both frontend and backend development with modern frameworks and technologies",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "AI Integration Skills",
      description: "Learn to seamlessly integrate AI capabilities into web applications and services",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Cloud & DevOps",
      description: "Deploy and scale applications using cloud platforms and modern DevOps practices",
      icon: <Cloud className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Arjun Sharma",
      feedback: "This course completely transformed my development skills. The AI integration modules opened up new career opportunities I never imagined possible.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      rating: 5,
      role: "Senior Full Stack Developer at TechCorp"
    },
    {
      name: "Priya Patel",
      feedback: "Excellent hands-on approach with real-world projects. The AI components made me stand out in interviews and land my dream job.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      rating: 5,
      role: "AI Full Stack Developer at StartupX"
    },
    {
      name: "Vikram Singh",
      feedback: "The course structure is perfect with comprehensive coverage of both traditional and AI-powered development. Highly recommend!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      rating: 5,
      role: "Lead Developer at InnovateTech"
    }
  ];

  const instructor = {
    name: "Dr. Rajesh Kumar",
    title: "Senior AI Full Stack Architect",
    experience: "12+ years in Full Stack Development & AI",
    bio: "Dr. Rajesh Kumar is a seasoned full-stack developer and AI specialist with over 12 years of experience building scalable web applications and AI-powered solutions. He has led development teams at major tech companies and has expertise in modern JavaScript frameworks, cloud architecture, and machine learning integration.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  };

  const courseStats = {
    duration: "6 Months",
    sessions: "72 Sessions",
    totalLessons: 180,
    level: "Intermediate to Advanced",
    format: "Online & Offline Classes"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-muted/30 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Home</a>
            <span>/</span>
            <a href="/courses" className="hover:text-primary">Courses</a>
            <span>/</span>
            <span className="text-foreground">AI Full Stack Developer Specialist</span>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <motion.section 
        className="relative py-32 px-4 bg-gradient-to-r from-blue-900 via-purple-800 to-black text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="AI Full Stack Development Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-primary text-primary-foreground mb-4">
                {courseStats.duration} Duration • 100% Placement Support
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                AI Full Stack Developer Specialist
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Globally recognized Micro Degree Certificate
              </p>
              <p className="text-lg mb-8 opacity-80">
                Master the complete web development stack enhanced with AI capabilities. Build intelligent, scalable applications that leverage the power of artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-white">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Download Curriculum
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="AI Full Stack Development" 
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Course Info and Inquiry Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Course Description */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Build the Future with AI-Enhanced Full Stack Development
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                This comprehensive program combines traditional full-stack development skills with cutting-edge AI technologies. 
                Learn to build intelligent web applications that can understand, learn, and adapt to user needs. Master both 
                frontend and backend development while integrating powerful AI capabilities that set you apart in the competitive tech landscape.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                From creating responsive user interfaces to building scalable backend systems and deploying AI-powered features, 
                this course covers the complete development lifecycle. You'll work with modern frameworks, cloud platforms, 
                and AI APIs to create applications that are not just functional, but truly intelligent.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Learning Outcomes */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-muted/30 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Core Competencies You'll Master</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {outcome.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{outcome.title}</h4>
                    <p className="text-muted-foreground text-sm">{outcome.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Course Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-2">{courseStats.duration}</div>
                <div className="text-sm text-muted-foreground">Duration</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-2">{courseStats.sessions}</div>
                <div className="text-sm text-muted-foreground">Live Sessions</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-2">{courseStats.totalLessons}</div>
                <div className="text-sm text-muted-foreground">Total Lessons</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Job Support</div>
              </div>
            </motion.div>
          </div>

          {/* Course Inquiry Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="bg-card border-border sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Course Inquiry</CardTitle>
                <CardDescription>Get detailed information about this program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name *" 
                    className="px-4 py-3 border border-border rounded-lg bg-background text-foreground"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name *" 
                    className="px-4 py-3 border border-border rounded-lg bg-background text-foreground"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email *" 
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground"
                />
                <div className="flex items-center space-x-2">
                  <span className="text-primary">🇮🇳 +91</span>
                  <input 
                    type="tel" 
                    placeholder="Enter Phone Number*" 
                    className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground"
                  />
                </div>
                <textarea 
                  placeholder="Please let us know how we can help! *" 
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground"
                />
                <Button className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                  Submit Inquiry
                </Button>
                
                {/* Course Highlights */}
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Course Highlights</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{courseStats.duration} Duration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Expert Instructors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span>Industry Certificate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span>100% Job Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span>{courseStats.format}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Prerequisites & Requirements</h2>
            <p className="text-xl text-muted-foreground">What you need to know before starting</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground">Required Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Basic programming concepts (any language)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Understanding of web technologies (HTML, CSS)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Basic computer science fundamentals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Eagerness to learn and adapt to new technologies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground">Recommended Background</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-primary mt-0.5"></div>
                    <span className="text-muted-foreground">Bachelor's degree in Computer Science or related field</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-primary mt-0.5"></div>
                    <span className="text-muted-foreground">Some experience with JavaScript or Python</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-primary mt-0.5"></div>
                    <span className="text-muted-foreground">Familiarity with databases and APIs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-primary mt-0.5"></div>
                    <span className="text-muted-foreground">Interest in AI and machine learning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Outline Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Comprehensive Course Curriculum</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {modules.map((module, index) => (
                <AccordionItem key={index} value={`module-${index}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-foreground font-semibold text-lg">{module.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Your Instructor</h2>
            <p className="text-xl text-muted-foreground">Learn from industry experts with real-world experience</p>
          </motion.div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <img 
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-foreground mb-2">{instructor.name}</h3>
                  <p className="text-primary font-semibold mb-2">{instructor.title}</p>
                  <p className="text-sm text-muted-foreground">{instructor.experience}</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold text-foreground mb-4">About the Instructor</h4>
                  <p className="text-muted-foreground leading-relaxed">{instructor.bio}</p>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <div className="text-lg font-bold text-primary">12+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <div className="text-lg font-bold text-primary">500+</div>
                      <div className="text-xs text-muted-foreground">Students Trained</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from our AI Full Stack Developer program graduates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      "{testimonial.feedback}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Related Courses</h2>
            <p className="text-xl text-muted-foreground">Explore other AI-powered programs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">AI-Powered Creative Design & Media</CardTitle>
                <CardDescription>3 Months • Design & Media</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Master AI tools for creative design, video editing, and media production.
                </p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Data Science & AI for Business</CardTitle>
                <CardDescription>6 Months • Data Science</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Transform business operations with data-driven insights and AI solutions.
                </p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Cybersecurity & AI-Driven Ethical Hacking</CardTitle>
                <CardDescription>12 Months • Cybersecurity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Advanced cybersecurity with AI-enhanced threat detection and response.
                </p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Become an AI Full Stack Developer?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join the next generation of developers who are building intelligent applications that shape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-white">
              Start Your Journey Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Schedule a Consultation
            </Button>
          </div>
          
          {/* Social Sharing */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm opacity-75 mb-4">Share this course:</p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIFullStackDeveloper;