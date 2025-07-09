
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, FileText, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import PersonalInfoForm from "@/components/cv/PersonalInfoForm";
import ExperienceForm from "@/components/cv/ExperienceForm";
import EducationForm from "@/components/cv/EducationForm";
import SkillsForm from "@/components/cv/SkillsForm";
import CVPreview from "@/components/cv/CVPreview";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  website: string;
  professionalSummary: string;
}

export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: string[];
}

const Builder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [cvData, setCVData] = useState<CVData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedIn: "",
      website: "",
      professionalSummary: "",
    },
    experiences: [],
    education: [],
    skills: [],
  });

  const steps = [
    { number: 1, title: "Personal Info", component: PersonalInfoForm },
    { number: 2, title: "Experience", component: ExperienceForm },
    { number: 3, title: "Education", component: EducationForm },
    { number: 4, title: "Skills", component: SkillsForm },
  ];

  const progress = (currentStep / steps.length) * 100;

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentFormComponent = steps[currentStep - 1].component;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Back to Home</span>
              </Link>
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900">CV Builder</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-xs sm:text-sm text-gray-600">
                {currentStep}/{steps.length}
              </span>
              {/* Mobile Preview Toggle */}
              <div className="lg:hidden">
                <Sheet open={showPreview} onOpenChange={setShowPreview}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">
                      Preview
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:max-w-md p-0">
                    <div className="h-full overflow-auto p-4">
                      <CVPreview data={cvData} />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                Save Progress
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base sm:text-lg font-medium text-gray-900">
              {steps[currentStep - 1].title}
            </h2>
            <span className="text-xs sm:text-sm text-gray-500">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
          {/* Form Section */}
          <div className="order-2 lg:order-1">
            <Card className="p-4 sm:p-6">
              <CurrentFormComponent
                data={cvData}
                updateData={setCVData}
                onNext={nextStep}
                onPrev={prevStep}
                isFirstStep={currentStep === 1}
                isLastStep={currentStep === steps.length}
              />
            </Card>

            {/* Mobile Navigation */}
            <div className="flex justify-between mt-4 sm:mt-6 lg:hidden">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                size="sm"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button
                onClick={nextStep}
                disabled={currentStep === steps.length}
                size="sm"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Desktop Preview Section */}
          <div className="order-1 lg:order-2 hidden lg:block lg:sticky lg:top-24 lg:h-fit">
            <CVPreview data={cvData} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={nextStep}
            disabled={currentStep === steps.length}
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Builder;
