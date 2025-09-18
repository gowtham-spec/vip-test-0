import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, BookOpen, Shield, Target, Award, CheckCircle, Plus, Code, BarChart, Monitor, Cpu, Brain, Database, Star, Calendar, User, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DataScienceAIBusiness = () => {
  const modules = [
    {
      title: "Module 1: Business & Data Foundations",
      topics: [
        "Introduction to Data Science for Business",
        "Business Analytics vs Data Analytics vs AI",
        "Basics of Statistics & Probability for Decision-Making",
        "Data-Driven Problem Solving in Business"
      ]
    },
    {
      title: "Module 2: Tools for Business Data Science",
      topics: [
        "Excel for Business Analytics (Pivot, Power Query)",
        "SQL for Business Data Extraction",
        "Python for Business (Pandas, NumPy, Matplotlib, Seaborn)",
        "Power BI & Tableau for Business Dashboards"
      ]
    },
    {
      title: "Module 3: Machine Learning for Business",
      topics: [
        "Introduction to Machine Learning Concepts",
        "Regression (Sales Forecasting, Revenue Prediction)",
        "Classification (Customer Churn, Credit Scoring)",
        "Clustering (Market Segmentation, Customer Profiling)",
        "Recommendation Systems (Product/Service Recommendations)"
      ]
    },
    {
      title: "Module 4: AI Applications in Business",
      topics: [
        "AI in Marketing (Customer Behavior Prediction, Campaign)",
        "AI in Finance (Fraud Detection, Risk Analytics)",
        "AI in HR (Resume Screening, Attrition Prediction)",
        "AI in Retail (Demand Forecasting, Inventory Optimization)",
        "AI Chatbots for Customer Service"
      ]
    },
    {
      title: "Module 5: Advanced AI for Business",
      topics: [
        "Natural Language Processing (NLP) for Business Insights",
        "Sentiment Analysis, Feedback Analysis, Social Media Mining",
        "Generative AI for Business Automation",
        "Report Writing, Presentations, Market Research",
        "AI in Strategic Decision Making (Case Studies)"
      ]
    },
    {
      title: "Module 6: Cloud & Deployment",
      topics: [
        "Introduction to Cloud Platforms (AWS, Azure, GCP)",
        "Deploying AI/ML Models for Business Applications",
        "Business Intelligence with Cloud Analytics",
        "AI-Powered SaaS Business Models"
      ]
    },
    {
      title: "Module 7: Capstone Projects",
      topics: [
        "Sales Forecasting & Dashboard for Retail Business",
        "AI-powered Customer Support Chatbot for a Company",
        "Credit Risk Scoring Model for Finance",
        "Market Segmentation for Targeted Marketing Campaign",
        "Employee Attrition Prediction & HR Analytics"
      ]
    }
  ];

  const features = [
    "100% Placement Support with dedicated career guidance",
    "Real-world business case studies and projects",
    "Industry-standard tools and technologies",
    "Expert mentorship from data science professionals",
    "Hands-on experience with AI/ML implementation",
    "Globally recognized micro degree certificate"
  ];

  const learningOutcomes = [
    {
      title: "Business Intelligence Mastery",
      description: "Master data analysis, visualization, and business intelligence tools to drive strategic decisions",
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: "AI Implementation Skills",
      description: "Learn to implement AI solutions for real business problems across various industries",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Strategic Decision Making",
      description: "Develop skills to translate data insights into actionable business strategies",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      feedback: "This course transformed my understanding of how AI can drive business decisions. The practical projects were incredibly valuable for my career growth.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      feedback: "The perfect blend of business acumen and technical skills. I'm now leading AI initiatives at my company thanks to this comprehensive program.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      rating: 5
    },
    {
      name: "Sneha Patel",
      feedback: "Excellent course structure with real-world applications. The capstone projects gave me a strong portfolio to showcase to employers.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="relative py-32 px-4 bg-gradient-to-r from-blue-900 via-blue-800 to-black text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Data Science Background" 
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
                6 Months Duration • 100% Placement Support
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Data Science & AI for Business Specialist
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Globally recognized Micro Degree Certificate
              </p>
              <p className="text-lg mb-8 opacity-80">
                Transform business operations with data-driven insights and AI-powered solutions. Master the tools and techniques that drive modern business intelligence.
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Data Science Visualization" 
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
                Master Data Science & AI for Business Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                This comprehensive program bridges the gap between technical data science skills and business applications. 
                Learn to leverage data analytics, machine learning, and AI to solve real business challenges and drive 
                organizational growth through data-driven decision making.
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
              <h3 className="text-2xl font-bold text-foreground mb-6">What You'll Learn</h3>
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
                      <span>6 Months Duration</span>
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
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Course Outline Section */}
      <section className="py-16 px-4 bg-muted/30">
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
                <AccordionItem key={index} value={`module-${index}`} className="border border-border rounded-lg px-6 bg-background">
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
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Success stories from our Data Science & AI program graduates
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Career with Data Science & AI?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of professionals who have advanced their careers with our comprehensive training program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-white">
              Start Your Journey Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataScienceAIBusiness;