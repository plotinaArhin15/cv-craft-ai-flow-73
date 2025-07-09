
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Plus, X, Sparkles } from "lucide-react";
import { CVData } from "@/pages/Builder";

interface SkillsFormProps {
  data: CVData;
  updateData: (data: CVData) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const SkillsForm = ({ data, updateData, onNext }: SkillsFormProps) => {
  const [newSkill, setNewSkill] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const addSkill = () => {
    if (newSkill.trim() && !data.skills.includes(newSkill.trim())) {
      updateData({
        ...data,
        skills: [...data.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    updateData({
      ...data,
      skills: data.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const generateSkills = async () => {
    setIsGenerating(true);
    // Simulate AI generation based on experience
    setTimeout(() => {
      const suggestedSkills = [
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "Project Management",
        "Team Leadership",
        "Communication",
        "Problem Solving",
        "Data Analysis",
        "Strategic Planning"
      ];

      const newSkills = suggestedSkills.filter(skill => !data.skills.includes(skill));
      updateData({
        ...data,
        skills: [...data.skills, ...newSkills.slice(0, 6)],
      });
      setIsGenerating(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const skillSuggestions = [
    "JavaScript", "Python", "React", "Node.js", "SQL", "Git", "AWS",
    "Project Management", "Leadership", "Communication", "Problem Solving",
    "Data Analysis", "Marketing", "Sales", "Customer Service", "Design"
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Skills</h3>
        <p className="text-gray-600">Add your technical and soft skills to showcase your expertise.</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>Your Skills</Label>
          <Button
            variant="outline"
            size="sm"
            onClick={generateSkills}
            disabled={isGenerating}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            {isGenerating ? "Generating..." : "AI Suggest"}
          </Button>
        </div>

        <div className="flex gap-2">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a skill and press Enter"
            className="flex-1"
          />
          <Button onClick={addSkill} disabled={!newSkill.trim()}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {data.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg">
            {data.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-2 hover:text-red-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}

        <Card className="p-4">
          <Label className="text-sm font-medium mb-2 block">Skill Suggestions</Label>
          <div className="flex flex-wrap gap-2">
            {skillSuggestions
              .filter(skill => !data.skills.includes(skill))
              .map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="cursor-pointer hover:bg-blue-50 hover:border-blue-300"
                  onClick={() => {
                    updateData({
                      ...data,
                      skills: [...data.skills, skill],
                    });
                  }}
                >
                  {skill}
                  <Plus className="ml-1 h-3 w-3" />
                </Badge>
              ))}
          </div>
        </Card>

        {isGenerating && (
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
              <span className="text-sm text-blue-700">AI is suggesting relevant skills...</span>
            </div>
          </Card>
        )}
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={onNext}>
          Preview & Download CV
        </Button>
      </div>
    </div>
  );
};

export default SkillsForm;
