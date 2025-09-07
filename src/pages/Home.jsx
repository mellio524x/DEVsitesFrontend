import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Zap, 
  Code, 
  Database, 
  Globe, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Rocket,
  Shield
} from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [companyStats, setCompanyStats] = useState({
    projects_completed: "50+",
    client_satisfaction: "100%",
    average_turnaround: "2 weeks",
    support_availability: "24/7"
  });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 3000);

    // Fetch real stats from API
    const fetchStats = async () => {
      try {
        const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
        const response = await fetch(`${BACKEND_URL}/api/stats`);
        if (response.ok) {
          const data = await response.json();
          setCompanyStats({
            projects_completed: `${data.projects_completed}+`,
            client_satisfaction: `${data.client_satisfaction}%`,
            average_turnaround: `${Math.round(data.average_turnaround / 7)} weeks`,
            support_availability: "24/7"
          });
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
        // Keep default stats if API fails
      }
    };

    fetchStats();
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "React & Python Fast API",
      description: "Modern tech stack for lightning-fast, scalable applications"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "2-Week Turnaround",
      description: "From concept to launch in just 14 days - guaranteed"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Ready",
      description: "Custom database setup for user management and data storage"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Full Deployment",
      description: "Complete setup including domain registration and hosting"
    }
  ];

  const processSteps = [
    { title: "Concept Discussion", description: "Share your vision with us" },
    { title: "Design & Planning", description: "We create the blueprint" },
    { title: "Development", description: "Building your dream site" },
    { title: "Launch & Support", description: "Go live with confidence" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-blue-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-400/30 hover:bg-blue-600/30 transition-all duration-300">
              <Sparkles className="h-4 w-4 mr-2" />
              Certified Full-Stack Developer
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight">
              Build Your Dream
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Website Today
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional React websites with Express backends, delivered in just 
              <span className="text-blue-400 font-bold"> 2 weeks</span>. 
              From concept to launch, we make it simple.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/products">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
              >
                <Rocket className="h-5 w-5 mr-2" />
                Start Your Project
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              </Link>
              <Link to="/products">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  View Pricing
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {companyStats.projects_completed}
                </div>
                <div className="text-gray-300 text-sm">Websites Built</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {companyStats.average_turnaround}
                </div>
                <div className="text-gray-300 text-sm">Week Average</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {companyStats.client_satisfaction}
                </div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {companyStats.support_availability}
                </div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              <Zap className="h-4 w-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technology and proven processes to deliver websites that perform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600 text-white">
              <Shield className="h-4 w-4 mr-2" />
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Idea to Launch in 4 Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures your project stays on track and delivers results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`text-center transition-all duration-500 ${
                    currentStep === index ? "transform scale-105" : ""
                  }`}>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-500 ${
                      currentStep === index 
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/50" 
                        : "bg-gray-400"
                    }`}>
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <div className="w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join DEVSITES404 for your web development needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Get Started Today
                </Button>
              </Link>
              <Link to="/products">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  View Our Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;