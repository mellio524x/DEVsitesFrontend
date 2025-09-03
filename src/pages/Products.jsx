import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { useToast } from "../hooks/use-toast";
import { 
  CheckCircle, 
  X, 
  Code, 
  Database, 
  Globe, 
  Clock,
  Zap,
  Star,
  ArrowRight,
  Plus,
  User,
  Mail
} from "lucide-react";

const Products = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    project_type: "standard",
    include_domain: false,
    include_database: false,
    additional_details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/project-inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inquiryData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Inquiry Sent!",
          description: `Estimated cost: $${data.estimated_cost}. ${data.message}`,
        });
        setInquiryData({
          name: "",
          email: "",
          project_type: "standard",
          include_domain: false,
          include_database: false,
          additional_details: ""
        });
        setIsInquiryOpen(false);
      } else {
        throw new Error(data.message || 'Failed to send inquiry');
      }
    } catch (error) {
      console.error('Project inquiry error:', error);
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInquiryChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInquiryData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const plans = [
    {
      id: "basic",
      name: "Basic Website",
      price: "$49.99",
      description: "Perfect for small businesses and personal websites",
      features: [
        "Up to 3 pages",
        "Responsive design",
        "Basic contact form",
        "SEO optimization",
        "Mobile-friendly",
        "2-week delivery",
        "Basic support"
      ],
      notIncluded: [
        "Database setup",
        "Advanced features",
        "E-commerce functionality"
      ],
      popular: false,
      color: "from-gray-600 to-gray-700"
    },
    {
      id: "standard",
      name: "Standard Website",
      price: "$69.99",
      description: "Ideal for growing businesses with expanded needs",
      features: [
        "3+ pages (unlimited)",
        "Advanced responsive design",
        "Multiple contact forms",
        "Advanced SEO optimization",
        "Performance optimization",
        "Social media integration",
        "2-week delivery",
        "Priority support"
      ],
      notIncluded: [
        "Database setup",
        "Advanced backend features"
      ],
      popular: true,
      color: "from-blue-600 to-blue-700"
    }
  ];

  const addOns = [
    {
      id: "domain",
      name: "Domain Setup",
      price: "+$19.99",
      description: "We'll register and connect your domain for the first year",
      icon: <Globe className="h-5 w-5" />,
      features: [
        "Domain registration",
        "DNS configuration",
        "SSL certificate setup",
        "Email forwarding setup"
      ]
    },
    {
      id: "database",
      name: "Database Setup",
      price: "+$29.99",
      description: "Small database for user management and data storage",
      icon: <Database className="h-5 w-5" />,
      features: [
        "User registration system",
        "Email & name storage",
        "Basic user profiles",
        "Data backup included"
      ]
    }
  ];

  const technologies = [
    { name: "React", description: "Modern frontend framework" },
    { name: "Express.js", description: "Fast backend server" },
    { name: "MongoDB", description: "Flexible database" },
    { name: "Render", description: "Reliable deployment" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-400/30">
              <Zap className="h-4 w-4 mr-2" />
              Simple Pricing, Powerful Results
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Choose Your Perfect Package
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional websites built with React and Express. No hidden fees, no surprises. 
              Just quality development at transparent prices.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>2-Week Delivery</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Certified Developer</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Modern Tech Stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {plans.map((plan) => (
                <Card 
                  key={plan.id}
                  className={`relative transition-all duration-300 hover:shadow-2xl border-2 ${
                    plan.popular 
                      ? "border-blue-500 shadow-xl scale-105" 
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-2">one-time</span>
                    </div>
                    <CardDescription className="text-gray-600 text-lg">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        What's Included
                      </h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.notIncluded.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <X className="h-5 w-5 text-red-500 mr-2" />
                          Not Included
                        </h4>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-500">
                              <X className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Dialog open={isInquiryOpen} onOpenChange={setIsInquiryOpen}>
                      <DialogTrigger asChild>
                        <Button 
                          className={`w-full py-3 font-semibold transition-all duration-300 transform hover:scale-105 ${
                            plan.popular
                              ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                              : "bg-gray-900 hover:bg-black text-white"
                          }`}
                          onClick={() => {
                            setSelectedPlan(plan.id);
                            setInquiryData(prev => ({
                              ...prev,
                              project_type: plan.id
                            }));
                          }}
                        >
                          Choose {plan.name}
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Get Your Project Quote</DialogTitle>
                          <DialogDescription>
                            Tell us about your project and get an instant estimate
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleInquirySubmit} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium flex items-center">
                                <User className="h-4 w-4 mr-2" />
                                Name *
                              </label>
                              <Input
                                name="name"
                                value={inquiryData.name}
                                onChange={handleInquiryChange}
                                placeholder="Your name"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium flex items-center">
                                <Mail className="h-4 w-4 mr-2" />
                                Email *
                              </label>
                              <Input
                                name="email"
                                type="email"
                                value={inquiryData.email}
                                onChange={handleInquiryChange}
                                placeholder="your@email.com"
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Project Type</label>
                            <select
                              name="project_type"
                              value={inquiryData.project_type}
                              onChange={handleInquiryChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="basic">Basic Website ($49.99)</option>
                              <option value="standard">Standard Website ($69.99)</option>
                            </select>
                          </div>

                          <div className="space-y-3">
                            <label className="text-sm font-medium">Add-ons</label>
                            <div className="space-y-2">
                              <label className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  name="include_domain"
                                  checked={inquiryData.include_domain}
                                  onChange={handleInquiryChange}
                                  className="rounded"
                                />
                                <span className="text-sm">Domain Setup (+$19.99)</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  name="include_database"
                                  checked={inquiryData.include_database}
                                  onChange={handleInquiryChange}
                                  className="rounded"
                                />
                                <span className="text-sm">Database Setup (+$29.99)</span>
                              </label>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium">Additional Details</label>
                            <textarea
                              name="additional_details"
                              value={inquiryData.additional_details}
                              onChange={handleInquiryChange}
                              placeholder="Tell us more about your project..."
                              rows={3}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center">
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Getting Quote...
                              </div>
                            ) : (
                              "Get Instant Quote"
                            )}
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add-ons */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Enhance Your Website
              </h2>
              <p className="text-xl text-gray-600">
                Optional add-ons to make your website even more powerful
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {addOns.map((addon) => (
                <Card key={addon.id} className="hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                        {addon.icon}
                      </div>
                      <span className="text-2xl font-bold text-blue-600">{addon.price}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {addon.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {addon.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {addon.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <Plus className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Technology Stack */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Built with Modern Technology
                </h2>
                <p className="text-gray-600">
                  We use industry-leading tools and frameworks for optimal performance
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                      <Code className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have questions about our packages? Let's discuss your project and find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isInquiryOpen} onOpenChange={setIsInquiryOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <Clock className="h-5 w-5 mr-2" />
                    Start Your Project
                  </Button>
                </DialogTrigger>
              </Dialog>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  Ask Questions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;