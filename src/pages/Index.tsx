
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Sparkles, 
  Download, 
  Eye, 
  CheckCircle, 
  ArrowRight,
  User,
  Briefcase,
  GraduationCap,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Writing",
      description: "Our AI crafts professional summaries and bullet points tailored to your experience"
    },
    {
      icon: Eye,
      title: "Real-time Preview",
      description: "See your CV come to life as you fill out the form with instant preview"
    },
    {
      icon: Download,
      title: "PDF Export",
      description: "Download your professional CV as a perfectly formatted PDF document"
    },
    {
      icon: Settings,
      title: "Easy Customization",
      description: "Edit AI suggestions and customize your CV to match your personal style"
    }
  ];

  const steps = [
    {
      icon: User,
      title: "Personal Info",
      description: "Add your contact details and professional summary"
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "List your work history with AI-generated descriptions"
    },
    {
      icon: GraduationCap,
      title: "Education & Skills",
      description: "Include your educational background and key skills"
    },
    {
      icon: Download,
      title: "Download",
      description: "Export your professional CV as a PDF"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            <span className="text-lg sm:text-xl font-bold text-gray-900">CVCraft</span>
          </div>
          <Badge variant="secondary" className="text-xs sm:text-sm">
            2025 Edition
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Create Your Perfect CV with
            <span className="block text-blue-600 mt-1 sm:mt-2">AI Assistance</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Transform your career story into a professional CV in minutes. Our AI-powered builder creates 
            compelling content while you focus on landing your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link to="/builder">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                Start Building Your CV
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
              View Sample CV
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose CVCraft?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Our intelligent CV builder combines AI technology with professional design 
            to help you stand out in today's competitive job market.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.title} className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              How It Works
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Our streamlined process makes creating a professional CV simple and efficient.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.title} className="text-center">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs sm:text-sm font-bold text-blue-600">{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 sm:p-8 lg:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Build Your Professional CV?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-2">
            Join thousands of job seekers who have successfully created their perfect CV 
            with our AI-powered builder. Start your career transformation today.
          </p>
          <Link to="/builder">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <FileText className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="text-lg sm:text-xl font-bold">CVCraft</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 max-w-md mx-auto px-2">
              Empowering careers with AI-powered CV creation since 2025
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <span>© 2025 CVCraft. All rights reserved.</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
