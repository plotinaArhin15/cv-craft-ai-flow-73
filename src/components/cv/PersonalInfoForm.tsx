
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { CVData } from "@/pages/Builder";

interface PersonalInfoFormProps {
  data: CVData;
  updateData: (data: CVData) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const PersonalInfoForm = ({ data, updateData, onNext }: PersonalInfoFormProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    updateData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [field]: value,
      },
    });
  };

  const generateSummary = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const generatedSummary = `Experienced professional with a strong background in ${data.personalInfo.fullName ? 'delivering exceptional results' : 'various industries'}. Proven track record of success with excellent communication skills and a passion for innovation. Seeking to leverage expertise to drive meaningful impact in a dynamic organization.`;
      
      handleInputChange("professionalSummary", generatedSummary);
      setIsGenerating(false);
    }, 2000);
  };

  const canProceed = data.personalInfo.fullName && data.personalInfo.email;

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Personal Information</h3>
        <p className="text-sm sm:text-base text-gray-600">Let's start with your basic contact information.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-2 sm:col-span-2 md:col-span-1">
          <Label htmlFor="fullName" className="text-sm sm:text-base">Full Name *</Label>
          <Input
            id="fullName"
            value={data.personalInfo.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            placeholder="John Doe"
            required
            className="text-sm sm:text-base"
          />
        </div>

        <div className="space-y-2 sm:col-span-2 md:col-span-1">
          <Label htmlFor="email" className="text-sm sm:text-base">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={data.personalInfo.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="john.doe@email.com"
            required
            className="text-sm sm:text-base"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number</Label>
          <Input
            id="phone"
            value={data.personalInfo.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="+1 (555) 123-4567"
            className="text-sm sm:text-base"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="text-sm sm:text-base">Location</Label>
          <Input
            id="location"
            value={data.personalInfo.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            placeholder="New York, NY"
            className="text-sm sm:text-base"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedIn" className="text-sm sm:text-base">LinkedIn Profile</Label>
          <Input
            id="linkedIn"
            value={data.personalInfo.linkedIn}
            onChange={(e) => handleInputChange("linkedIn", e.target.value)}
            placeholder="linkedin.com/in/johndoe"
            className="text-sm sm:text-base"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="website" className="text-sm sm:text-base">Website/Portfolio</Label>
          <Input
            id="website"
            value={data.personalInfo.website}
            onChange={(e) => handleInputChange("website", e.target.value)}
            placeholder="johndoe.com"
            className="text-sm sm:text-base"
          />
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <Label htmlFor="professionalSummary" className="text-sm sm:text-base">Professional Summary</Label>
          <Button
            variant="outline"
            size="sm"
            onClick={generateSummary}
            disabled={isGenerating}
            className="self-start sm:self-auto"
          >
            <Sparkles className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm">{isGenerating ? "Generating..." : "AI Generate"}</span>
          </Button>
        </div>
        
        <Textarea
          id="professionalSummary"
          value={data.personalInfo.professionalSummary}
          onChange={(e) => handleInputChange("professionalSummary", e.target.value)}
          placeholder="A brief professional summary highlighting your key strengths and career objectives..."
          rows={4}
          className="text-sm sm:text-base"
        />
        
        {isGenerating && (
          <Card className="p-3 sm:p-4 bg-blue-50 border-blue-200">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-blue-600"></div>
              <span className="text-xs sm:text-sm text-blue-700">AI is crafting your professional summary...</span>
            </div>
          </Card>
        )}
      </div>

      <div className="flex justify-end pt-2 sm:pt-4">
        <Button onClick={onNext} disabled={!canProceed} className="w-full sm:w-auto">
          Continue to Experience
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
