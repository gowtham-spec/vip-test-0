import { motion } from "framer-motion";
import { Clock, Users, BookOpen, Target, Award, CheckCircle, Calculator, TrendingUp, DollarSign, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AIAccountingFinancial = () => {
  const modules = [
    {
      title: "Module 1: Fundamentals of Accounting",
      topics: [
        "Accounting Principles & Standards",
        "Financial Statements (P&L, Balance Sheet, Cash Flow)",
        "Bookkeeping & Ledger Management"
      ]
    },
    {
      title: "Module 2: Taxation & Compliance",
      topics: [
        "GST, Income Tax, Corporate Tax Basics",
        "Payroll & Statutory Compliance",
        "Audit Preparation"
      ]
    },
    {
      title: "Module 3: Digital Accounting Tools",
      topics: [
        "Tally Prime / Zoho Books / QuickBooks",
        "Cloud-based Accounting",
        "ERP for Finance"
      ]
    },
    {
      title: "Module 4: Financial Analytics & AI",
      topics: [
        "Excel for Finance Professionals",
        "Power BI & Tableau for Reporting",
        "AI-driven Financial Forecasting & Fraud Detection"
      ]
    },
    {
      title: "Module 5: Capstone Project",
      topics: [
        "Real-world accounting case study using ERP/AI tools"
      ]
    }
  ];

  const features = [
    "100% Placement Support with career guidance",
    "Hands-on training with industry-standard accounting software",
    "AI-powered financial analysis and forecasting techniques",
    "Real-world case studies and practical projects",
    "Expert mentorship from finance professionals",
    "Globally recognized micro degree certificate"
  ];

  const learningOutcomes = [
    {
      title: "Advanced Accounting Skills",
      description: "Master traditional and digital accounting practices with modern tools and software",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "AI-Powered Analytics",
      description: "Learn to use AI for financial forecasting, fraud detection, and business intelligence",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Strategic Financial Planning",
      description: "Develop skills in financial strategy, budgeting, and performance analysis",
      icon: <DollarSign className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Amit Sharma",
      feedback: "This course revolutionized my approach to financial analysis. The AI tools we learned are now essential in my daily work as a financial analyst.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      rating: 5
    },
    {
      name: "Kavya Reddy",
      feedback: "Perfect blend of traditional accounting and modern AI techniques. The practical projects prepared me well for my current role in corporate finance.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      rating: 5
    },
    {
      name: "Rohit Gupta",
      feedback: "Excellent course structure with real-world applications. I'm now implementing AI-driven financial solutions at my company.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="relative py-32 px-4 bg-gradient-to-r from-green-900 via-green-800 to-black text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Financial Analytics Background" 
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
                4 Months Duration • 100% Placement Support
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                AI-Powered Accounting & Financial Analytics
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Globally recognized Micro Degree Certificate
              </p>
              <p className="text-lg mb-8 opacity-80">
                Master modern accounting practices enhanced with AI-powered analytics, financial forecasting, and automated reporting systems.
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
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Financial Analytics Dashboard" 
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
                Revolutionize Finance with AI-Powered Accounting
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                This cutting-edge program combines traditional accounting expertise with modern AI technologies. 
                Learn to automate financial processes, detect fraud using machine learning, and create intelligent 
                financial forecasting models that drive business success.
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
              <h3 className="text-2xl font-bold text-foreground mb-6">What You'll Master</h3>
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
                      <span>4 Months Duration</span>
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
              Student Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from our AI Accounting & Financial Analytics graduates
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
            Ready to Master AI-Powered Finance?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Transform your finance career with cutting-edge AI tools and advanced accounting techniques.
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

export default AIAccountingFinancial;