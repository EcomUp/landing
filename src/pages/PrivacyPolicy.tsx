import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Users, 
  Mail,
  Calendar,
  ArrowLeft,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const lastUpdated = "September 19, 2025";

  const sections = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        "Account information (name, email, business details)",
        "Social media account connections and permissions",
        "Content you create and posts you schedule",
        "Usage analytics and performance metrics",
        "Customer support communications"
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "How We Use Your Data",
      content: [
        "Provide and improve our AI automation services",
        "Generate personalized content recommendations",
        "Schedule and publish your social media posts",
        "Analyze performance and provide insights",
        "Communicate important service updates"
      ]
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Protection",
      content: [
        "End-to-end encryption for all data transmission",
        "Secure cloud storage with industry-standard protocols",
        "Regular security audits and penetration testing",
        "Limited access controls for our team members",
        "Compliance with GDPR and CCPA regulations"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Third-Party Sharing",
      content: [
        "We never sell your personal data to third parties",
        "Limited sharing with trusted service providers only",
        "Social media platforms (only for posting your content)",
        "Analytics services (anonymized data only)",
        "Legal compliance when required by law"
      ]
    }
  ];

  const rights = [
    "Access your personal data",
    "Correct inaccurate information",
    "Delete your account and data",
    "Export your data in standard formats",
    "Opt-out of marketing communications",
    "Withdraw consent at any time"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-primary-glow rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Privacy & Data Protection</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Privacy Policy</span>
              <br />
              <span className="text-foreground">Your Data,</span>
              <br />
              <span className="text-foreground">Your Control</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We're committed to protecting your privacy and being transparent about how we collect, 
              use, and safeguard your information in our AI-powered social media automation platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button variant="glass" size="xl">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              Last updated: <span className="text-primary font-semibold">{lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Overview Card */}
          <Card className="mb-16 glow-effect">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Our Commitment to Privacy</CardTitle>
              <CardDescription className="text-lg max-w-3xl mx-auto">
                At ecomup.ai, we believe your data belongs to you. We've built our platform with privacy-first principles, 
                ensuring your information is protected while delivering powerful AI automation features.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure by Design</h3>
                  <p className="text-muted-foreground">Built with enterprise-grade security from the ground up</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Lock className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Transparent Practices</h3>
                  <p className="text-muted-foreground">Clear policies and regular updates on our data practices</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-primary-glow/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary-glow" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Your Control</h3>
                  <p className="text-muted-foreground">Full control over your data with easy access and deletion</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {section.icon}
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Your Rights */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Your Privacy Rights</CardTitle>
              <CardDescription className="text-lg">
                You have complete control over your personal data. Here are your rights:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {rights.map((right, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-secondary/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{right}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Questions About Privacy?</CardTitle>
              <CardDescription className="text-lg">
                We're here to help. Contact our privacy team for any questions or concerns.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Privacy Team</p>
                      <p className="text-sm text-muted-foreground">privacy@ecomup.ai</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 48 hours</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-accent" />
                      <span className="text-sm font-semibold">Data Breach Protocol</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      In the unlikely event of a data breach, we will notify affected users within 72 hours 
                      and take immediate action to secure your information.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Policy Updates</CardTitle>
              <CardDescription className="text-lg">
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary/20 rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  When we make significant changes, we'll notify you via email and through our platform. 
                  Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
