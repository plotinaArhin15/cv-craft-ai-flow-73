
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { CVData, Education } from "@/pages/Builder";

interface EducationFormProps {
  data: CVData;
  updateData: (data: CVData) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const EducationForm = ({ data, updateData, onNext }: EducationFormProps) => {
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      degree: "",
      institution: "",
      location: "",
      startDate: "",
      endDate: "",
      gpa: "",
    };

    updateData({
      ...data,
      education: [...data.education, newEducation],
    });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    updateData({
      ...data,
      education: data.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    updateData({
      ...data,
      education: data.education.filter((edu) => edu.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Education</h3>
        <p className="text-gray-600">Add your educational background, starting with the most recent.</p>
      </div>

      <div className="space-y-4">
        {data.education.map((education) => (
          <Card key={education.id} className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Degree</Label>
                  <Input
                    value={education.degree}
                    onChange={(e) => updateEducation(education.id, "degree", e.target.value)}
                    placeholder="Bachelor of Science in Computer Science"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Institution</Label>
                  <Input
                    value={education.institution}
                    onChange={(e) => updateEducation(education.id, "institution", e.target.value)}
                    placeholder="University of Technology"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input
                    value={education.location}
                    onChange={(e) => updateEducation(education.id, "location", e.target.value)}
                    placeholder="Boston, MA"
                  />
                </div>

                <div className="space-y-2">
                  <Label>GPA (Optional)</Label>
                  <Input
                    value={education.gpa}
                    onChange={(e) => updateEducation(education.id, "gpa", e.target.value)}
                    placeholder="3.8/4.0"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input
                    type="month"
                    value={education.startDate}
                    onChange={(e) => updateEducation(education.id, "startDate", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input
                    type="month"
                    value={education.endDate}
                    onChange={(e) => updateEducation(education.id, "endDate", e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeEducation(education.id)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Remove
                </Button>
              </div>
            </div>
          </Card>
        ))}

        <Button variant="outline" onClick={addEducation} className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Add Education
        </Button>
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={onNext}>
          Continue to Skills
        </Button>
      </div>
    </div>
  );
};

export default EducationForm;
