
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
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Personal Information</h3>
        <p className="text-gray-600">Let's start with your basic contact information.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={data.personalInfo.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={data.personalInfo.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="john.doe@email.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            value={data.personalInfo.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={data.personalInfo.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            placeholder="New York, NY"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedIn">LinkedIn Profile</Label>
          <Input
            id="linkedIn"
            value={data.personalInfo.linkedIn}
            onChange={(e) => handleInputChange("linkedIn", e.target.value)}
            placeholder="linkedin.com/in/johndoe"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Website/Portfolio</Label>
          <Input
            id="website"
            value={data.personalInfo.website}
            onChange={(e) => handleInputChange("website", e.target.value)}
            placeholder="johndoe.com"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="professionalSummary">Professional Summary</Label>
          <Button
            variant="outline"
            size="sm"
            onClick={generateSummary}
            disabled={isGenerating}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            {isGenerating ? "Generating..." : "AI Generate"}
          </Button>
        </div>
        
        <Textarea
          id="professionalSummary"
          value={data.personalInfo.professionalSummary}
          onChange={(e) => handleInputChange("professionalSummary", e.target.value)}
          placeholder="A brief professional summary highlighting your key strengths and career objectives..."
          rows={4}
        />
        
        {isGenerating && (
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
              <span className="text-sm text-blue-700">AI is crafting your professional summary...</span>
            </div>
          </Card>
        )}
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={onNext} disabled={!canProceed}>
          Continue to Experience
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
