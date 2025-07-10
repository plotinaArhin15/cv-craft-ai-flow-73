
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import CVPreview from "@/components/cv/CVPreview";
import { CVData } from "@/pages/Builder";

interface SampleCVModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SampleCVModal = ({ open, onOpenChange }: SampleCVModalProps) => {
  const sampleData: CVData = {
    personalInfo: {
      fullName: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      linkedIn: "linkedin.com/in/sarahjohnson",
      website: "www.sarahjohnson.dev",
      professionalSummary: "Experienced Full Stack Developer with 5+ years of expertise in React, Node.js, and cloud technologies. Passionate about creating scalable web applications and leading development teams to deliver high-quality solutions."
    },
    experiences: [
      {
        id: "1",
        jobTitle: "Senior Full Stack Developer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        startDate: "2022-01-01",
        endDate: "",
        current: true,
        description: "• Led development of 3 major web applications serving 100K+ users\n• Implemented microservices architecture reducing system downtime by 40%\n• Mentored 5 junior developers and established code review best practices\n• Collaborated with product team to deliver features 25% faster than previous timeline"
      },
      {
        id: "2",
        jobTitle: "Full Stack Developer",
        company: "StartupXYZ",
        location: "Remote",
        startDate: "2020-03-01",
        endDate: "2021-12-01",
        current: false,
        description: "• Built responsive web applications using React, TypeScript, and Node.js\n• Integrated third-party APIs and payment processing systems\n• Optimized database queries resulting in 60% performance improvement\n• Participated in agile development process and daily standups"
      }
    ],
    education: [
      {
        id: "1",
        degree: "Bachelor of Science in Computer Science",
        institution: "University of California, Berkeley",
        location: "Berkeley, CA",
        startDate: "2016-08-01",
        endDate: "2020-05-01",
        gpa: "3.8"
      }
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "AWS",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "Agile/Scrum",
      "REST APIs"
    ]
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Sample CV Preview</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <CVPreview data={sampleData} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SampleCVModal;
