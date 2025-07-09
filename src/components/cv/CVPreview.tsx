
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react";
import { CVData } from "@/pages/Builder";

interface CVPreviewProps {
  data: CVData;
}

const CVPreview = ({ data }: CVPreviewProps) => {
  const downloadPDF = () => {
    // TODO: Implement PDF generation
    alert("PDF download functionality will be implemented next!");
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">CV Preview</h3>
        <Button onClick={downloadPDF} className="bg-blue-600 hover:bg-blue-700">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <Card className="p-8 bg-white shadow-lg">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {data.personalInfo.fullName || "Your Name"}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {data.personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                {data.personalInfo.email}
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                {data.personalInfo.phone}
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {data.personalInfo.location}
              </div>
            )}
            {data.personalInfo.website && (
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                {data.personalInfo.website}
              </div>
            )}
            {data.personalInfo.linkedIn && (
              <div className="flex items-center gap-1">
                <Linkedin className="h-4 w-4" />
                {data.personalInfo.linkedIn}
              </div>
            )}
          </div>
        </div>

        {/* Professional Summary */}
        {data.personalInfo.professionalSummary && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              {data.personalInfo.professionalSummary}
            </p>
          </div>
        )}

        {/* Experience */}
        {data.experiences.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Professional Experience</h2>
            <div className="space-y-4">
              {data.experiences.map((experience) => (
                <div key={experience.id} className="border-l-2 border-blue-200 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{experience.jobTitle}</h3>
                      <p className="text-blue-600 font-medium">{experience.company}</p>
                      {experience.location && (
                        <p className="text-sm text-gray-600">{experience.location}</p>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      {formatDate(experience.startDate)} - {
                        experience.current ? "Present" : formatDate(experience.endDate)
                      }
                    </div>
                  </div>
                  {experience.description && (
                    <div className="text-gray-700 whitespace-pre-line text-sm">
                      {experience.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Education</h2>
            <div className="space-y-3">
              {data.education.map((education) => (
                <div key={education.id} className="border-l-2 border-green-200 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{education.degree}</h3>
                      <p className="text-green-600 font-medium">{education.institution}</p>
                      {education.location && (
                        <p className="text-sm text-gray-600">{education.location}</p>
                      )}
                      {education.gpa && (
                        <p className="text-sm text-gray-600">GPA: {education.gpa}</p>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      {formatDate(education.startDate)} - {formatDate(education.endDate)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-800">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CVPreview;
