
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2, Sparkles } from "lucide-react";
import { CVData, Experience } from "@/pages/Builder";

interface ExperienceFormProps {
  data: CVData;
  updateData: (data: CVData) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const ExperienceForm = ({ data, updateData, onNext }: ExperienceFormProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    };

    updateData({
      ...data,
      experiences: [...data.experiences, newExperience],
    });
    setEditingId(newExperience.id);
  };

  const updateExperience = (id: string, field: string, value: string | boolean) => {
    updateData({
      ...data,
      experiences: data.experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    updateData({
      ...data,
      experiences: data.experiences.filter((exp) => exp.id !== id),
    });
  };

  const generateDescription = async (experience: Experience) => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const generatedDescription = `• Contributed to key initiatives at ${experience.company}, demonstrating strong analytical and problem-solving skills
• Collaborated effectively with cross-functional teams to deliver projects on time and within budget
• Implemented process improvements that enhanced operational efficiency and team productivity
• Maintained high standards of quality while adapting to changing business requirements`;

      updateExperience(experience.id, "description", generatedDescription);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Work Experience</h3>
        <p className="text-gray-600">Add your professional work experience, starting with the most recent.</p>
      </div>

      <div className="space-y-4">
        {data.experiences.map((experience) => (
          <Card key={experience.id} className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Job Title</Label>
                  <Input
                    value={experience.jobTitle}
                    onChange={(e) => updateExperience(experience.id, "jobTitle", e.target.value)}
                    placeholder="Software Engineer"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Company</Label>
                  <Input
                    value={experience.company}
                    onChange={(e) => updateExperience(experience.id, "company", e.target.value)}
                    placeholder="Tech Company Inc."
                  />
                </div>

                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input
                    value={experience.location}
                    onChange={(e) => updateExperience(experience.id, "location", e.target.value)}
                    placeholder="San Francisco, CA"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input
                    type="month"
                    value={experience.startDate}
                    onChange={(e) => updateExperience(experience.id, "startDate", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input
                    type="month"
                    value={experience.endDate}
                    onChange={(e) => updateExperience(experience.id, "endDate", e.target.value)}
                    disabled={experience.current}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`current-${experience.id}`}
                    checked={experience.current}
                    onCheckedChange={(checked) => updateExperience(experience.id, "current", checked)}
                  />
                  <Label htmlFor={`current-${experience.id}`}>Currently working here</Label>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Job Description & Achievements</Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => generateDescription(experience)}
                    disabled={isGenerating || !experience.jobTitle || !experience.company}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    {isGenerating ? "Generating..." : "AI Generate"}
                  </Button>
                </div>
                <Textarea
                  value={experience.description}
                  onChange={(e) => updateExperience(experience.id, "description", e.target.value)}
                  placeholder="• Describe your key responsibilities and achievements
• Use bullet points for better readability
• Focus on quantifiable results when possible"
                  rows={6}
                />
              </div>

              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeExperience(experience.id)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Remove
                </Button>
              </div>
            </div>
          </Card>
        ))}

        <Button variant="outline" onClick={addExperience} className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Add Work Experience
        </Button>
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={onNext}>
          Continue to Education
        </Button>
      </div>
    </div>
  );
};

export default ExperienceForm;
