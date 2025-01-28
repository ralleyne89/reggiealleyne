import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Briefcase, Code, Layout, Smartphone, Palette, Database, Cloud, Bot } from "lucide-react";

interface ServicesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description: "Create intuitive and engaging mobile experiences with modern UI/UX principles."
  },
  {
    icon: Code,
    title: "No Code Development",
    description: "Build powerful applications without writing code using modern no-code platforms."
  },
  {
    icon: Layout,
    title: "Web Design",
    description: "Design responsive and beautiful websites that convert visitors into customers."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create user-centered designs with a focus on usability and accessibility."
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Design scalable database solutions for your application needs."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Implement and manage cloud infrastructure for optimal performance."
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Integrate AI and machine learning capabilities into your applications."
  }
];

const ServicesDialog = ({ open, onOpenChange }: ServicesDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[rgba(16,16,16,1)] border-[rgba(255,255,255,0.05)]">
        <DialogHeader>
          <DialogTitle className="text-[rgba(230,230,230,1)] text-xl font-semibold flex items-center gap-2">
            <Briefcase className="text-[rgba(145,108,231,1)]" />
            All Services
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[rgba(25,25,25,1)] border border-[rgba(255,255,255,0.05)] p-4 rounded-xl transition-all duration-300 hover:bg-[rgba(35,35,35,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <service.icon className="w-5 h-5 text-[#916CE7]" />
                <h3 className="text-[rgba(230,230,230,1)] font-semibold">
                  {service.title}
                </h3>
              </div>
              <p className="text-[rgba(204,204,204,1)] text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServicesDialog;