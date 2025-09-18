import { motion } from "framer-motion";
import { Clock, Users, BookOpen, Target, Award, CheckCircle, Lightbulb, Rocket, Users2, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AIProductManagement = () => {
  const modules = [
    {
      title: "Module 1: Foundations of Product & AI",
      topics: [
        "Role of a Product Manager in AI-driven companies",
        "Introduction to AI, ML & Generative AI",
        "AI vs Traditional Software Product Management",
        "Case Studies: Successful AI Product Companies (Google, OpenAI, Meta, Zoho AI)"
      ]
    },
    {
      title: "Module 2: Product Strategy & AI Market Fit",
      topics: [
        "Identifying Business Problems Solvable by AI",
        "Market Research & Competitive Landscape for AI Products",
        "Defining Value Proposition & Customer Personas",
        "AI Product Lifecycle & Roadmapping"
      ]
    },
    {
      title: "Module 3: AI Technologies for Product Managers",
      topics: [
        "Basics of ML/DL (Regression, Classification, NLP, Computer Vision) — No hardcore coding",
        "Generative AI (LLMs, Chatbots, AI Assistants, Image/Video AI)",
        "APIs & AI Platforms (OpenAI, Google Vertex AI, Azure AI, Hugging Face)",
        "Low-code & No-code AI Tools"
      ]
    },
    {
      title: "Module 4: Building & Managing AI Products",
      topics: [
        "Writing PRDs (Product Requirement Documents) for AI features",
        "Working with Data Science & Engineering Teams",
        "AI Model Lifecycle (Data → Training → Deployment → Monitoring)",
        "Evaluation Metrics for AI Products (Accuracy, Precision, Recall, Fairness, Bias)"
      ]
    },
    {
      title: "Module 5: Ethics, Compliance & Responsible AI",
      topics: [
        "AI Bias & Fairness in Product Development",
        "Privacy, Security & Data Governance",
        "Global Regulations (GDPR, India's DPDP Act, AI Act in EU)",
        "Building Trustworthy AI Products"
      ]
    },
    {
      title: "Module 6: Monetization & Growth of AI Products",
      topics: [
        "Business Models for AI Products (SaaS, API-as-a-Service, AI-driven platforms)",
        "Pricing Strategies for AI Products",
        "AI Product Marketing & GTM (Go-to-Market) Strategies",
        "Scaling AI Products Globally"
      ]
    },
    {
      title: "Module 7: Capstone Projects",
      topics: [
        "Design a PRD for an AI-powered EdTech App",
        "Build an AI-based Customer Support Chatbot (using OpenAI API)",
        "Develop a Business Strategy for an AI SaaS Startup",
        "AI Product Pitch Deck for Investors"
      ]
    }
  ];

  const features = [
    "100% Placement Support with career guidance and internship",
    "Real-world AI product case studies from leading companies",
    "Hands-on experience with AI platforms and tools",
    "Expert mentorship from product management professionals",
    "No-code/Low-code AI implementation training",
    "Globally recognized micro degree certificate"
  ];

  const learningOutcomes = [
    {
      title: "AI Product Strategy",
      description: "Master the art of defining and executing AI product strategies that deliver business value",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Technical Leadership",
      description: "Learn to bridge the gap between technical teams and business stakeholders in AI projects",
      icon: <Users2 className="w-6 h-6" />
    },
    {
      title: "Product Innovation",
      description: "Develop skills to identify opportunities and build innovative AI-powered products",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Ananya Singh",
      feedback: "This course gave me the perfect foundation to transition into AI product management. The practical projects and industry insights were invaluable.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      rating: 5
    },
    {
      name: "Vikram Mehta",
      feedback: "Outstanding program that covers both the technical and business aspects of AI products. I'm now leading AI initiatives at a Fortune 500 company.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      rating: 5
    },
    {
      name: "Deepika Rao",
      feedback: "The course structure is excellent with perfect balance of theory and hands-on practice. Highly recommend for anyone interested in AI product management.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="relative py-32 px-4 bg-gradient-to-r from-purple-900 via-purple-800 to-black text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="AI Product Management Background" 
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
                AI Product Management
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Globally recognized Micro Degree Certificate
              </p>
              <p className="text-lg mb-8 opacity-80">
                Lead the future of AI product development. Master the skills to build, launch, and scale AI-powered products that transform industries.
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
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="AI Product Management" 
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
                Shape the Future of AI Products
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                This specialized program prepares you to lead AI product development in the modern tech landscape. 
                Learn to navigate the unique challenges of AI products, from ethical considerations to technical 
                implementation, while building products that users love and businesses value.
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
              <h3 className="text-2xl font-bold text-foreground mb-6">Core Competencies</h3>
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
              Graduate Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from our AI Product Management program graduates
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
            Ready to Lead AI Product Innovation?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join the next generation of product managers who are shaping the AI-powered future.
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

export default AIProductManagement;