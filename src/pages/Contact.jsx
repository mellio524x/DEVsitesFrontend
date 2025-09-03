import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { useToast } from "../hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  User,
  FileText,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
    budget: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Message Sent!",
          description: data.message,
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          project: "",
          message: "",
          budget: ""
        });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "contact@devsites404.com",
      description: "Get in touch"
    },
    
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Remote Services",
      description: "Serving clients worldwide"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Response Time",
      value: "Within 48 hours",
      
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      url: "#",
      description: "View our code"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      url: "#",
      description: "Professional network"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      url: "#",
      description: "Latest updates"
    }
  ];

  const projectTypes = [
    "Basic Website (3 pages)",
    "Standard Website (3+ pages)",
    "Web Application",
    "Database Integration",
    "Custom Development",
    "Other"
  ];

  const budgetRanges = [
    "Under $100",
    "$100 - $500",
    "$500 - $1,000",
    "$1,000 - $5,000",
    "$5,000+",
    "Let's discuss"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-400/30">
              <MessageSquare className="h-4 w-4 mr-2" />
              Let's Build Together
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get in touch today and let's discuss how we can bring your vision to life. 
              From concept to launch, we're here to help every step of the way.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>48h Response</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-xl border-gray-100">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                      <Send className="h-6 w-6 text-blue-600 mr-3" />
                      Tell Us About Your Project
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      Fill out the form below and we'll get back to you within 48 hours with a detailed proposal.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            Your Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            Email Address *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Company/Organization
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company Name"
                          className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Project Type
                          </label>
                          <select
                            name="project"
                            value={formData.project}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type, index) => (
                              <option key={index} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range, index) => (
                              <option key={index} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Project Details *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                          rows={6}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="shadow-lg border-gray-100">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      Get In Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {info.label}
                          </h3>
                          <p className="text-gray-700 font-medium">{info.value}</p>
                          <p className="text-gray-500 text-sm">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="shadow-lg border-gray-100">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      Follow Us
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Stay connected and see our latest work
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className="flex items-center space-x-4 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                        >
                          <div className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                            {social.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {social.name}
                            </h4>
                            <p className="text-gray-500 text-sm">{social.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <Card className="shadow-lg border-gray-100 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Ready to Start?
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Most projects start within 48 hours of initial contact
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          <span>Free initial consultation</span>
                        </div>
                        <div className="flex items-center justify-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          <span>Detailed project proposal</span>
                        </div>
                        <div className="flex items-center justify-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          <span>Clear timeline & pricing</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to help you get started
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "How long does a typical project take?",
                a: "Our average turnaround is 2 weeks from concept to launch, including revisions and testing."
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes! We offer post-launch support and can help with updates, maintenance, and new features."
              },
              {
                q: "Can you work with existing designs?",
                a: "Absolutely! We can work from your designs, mockups, or help create new ones from scratch."
              },
              {
                q: "What's included in the database setup?",
                a: "User registration, profile management, data storage, and basic CRUD operations for your needs."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;