import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  School,
  Users,
  Workflow,
  FileText,
  Layers,
  MessageSquare,
  Code,
  CheckCircle,
  Target,
  Smartphone,
  Lightbulb,
  BarChart,
  X,
} from "lucide-react";

const TutorDCaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mt-8 mb-16">
      {/* Research & Discovery Section */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Search className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Research & Discovery
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-[rgba(200,200,200,0.9)] leading-relaxed">
                The research phase began with identifying the key challenges in
                distance learning for underserved communities. Many students
                lack reliable internet access or smart devices, making
                traditional online learning platforms inaccessible. Teachers
                needed a way to reach these students and track their progress
                without requiring advanced technology.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Key Finding 1
                  </h3>
                  <p className="text-gray-300">
                    Over 30% of students in target districts had limited or no
                    internet access at home, but most had access to basic cell
                    phones.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Key Finding 2
                  </h3>
                  <p className="text-gray-300">
                    Teachers were spending 5+ hours weekly trying to track and
                    manage assignments sent through various channels.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Key Finding 3
                  </h3>
                  <p className="text-gray-300">
                    Existing SMS-based solutions lacked proper integration with
                    teacher workflows and progress tracking capabilities.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* User Persona Section */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">User Personas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Ms. Rodriguez - Middle School Teacher
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-primary font-medium mb-1">
                      Background
                    </h4>
                    <p className="text-gray-300 text-sm">
                      8 years teaching experience in an urban school district
                      with limited resources. Tech-savvy but frustrated with
                      current tools.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium mb-1">Goals</h4>
                    <p className="text-gray-300 text-sm">
                      Wants to ensure all students can access learning materials
                      regardless of their home technology situation. Needs to
                      track student progress efficiently.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium mb-1">
                      Pain Points
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Spends hours manually tracking which students have
                      completed assignments. Struggles to provide timely
                      feedback to students without internet access.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Marcus - 8th Grade Student
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-primary font-medium mb-1">
                      Background
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Lives in a household with limited internet access. Has
                      access to a basic cell phone with SMS capabilities but no
                      smartphone.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium mb-1">Goals</h4>
                    <p className="text-gray-300 text-sm">
                      Wants to keep up with schoolwork despite technology
                      limitations. Needs clear instructions and feedback.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium mb-1">
                      Pain Points
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Often misses assignments shared on online platforms. Feels
                      disconnected from classroom learning when at home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* User Journey Map */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Workflow className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                User Journey Map
              </h2>
            </div>

            <p className="text-[rgba(200,200,200,0.9)] mb-6 leading-relaxed">
              This journey map follows Ms. Rodriguez as she creates and manages
              assignments through TutorD, highlighting key touchpoints and
              opportunities for design intervention.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">Planning</h4>
                <p className="text-gray-300 text-sm">
                  Creating lesson plans with clear, SMS-friendly content
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">
                  Assignment Creation
                </h4>
                <p className="text-gray-300 text-sm">
                  Simplified interface for creating SMS-compatible assignments
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">
                  Distribution
                </h4>
                <p className="text-gray-300 text-sm">
                  Automated sending with scheduling options
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">Tracking</h4>
                <p className="text-gray-300 text-sm">
                  Real-time response monitoring and analytics
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <h4 className="text-primary font-semibold mb-2">Feedback</h4>
                <p className="text-gray-300 text-sm">
                  Templated responses and personalized feedback options
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sitemap & Wireframes */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Sitemap & Wireframes
              </h2>
            </div>

            <div className="mb-8">
              <h3 className="text-xl text-white font-semibold mb-4">Sitemap</h3>
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <div className="bg-primary/20 text-primary px-6 py-3 rounded-lg font-medium mb-4">
                    Dashboard
                  </div>
                  <div className="w-px h-8 bg-gray-600"></div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
                    <div
                      className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center"
                      style={{ border: "1px solid #9B87F5" }}
                    >
                      Lesson Planner
                    </div>
                    <div
                      className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center"
                      style={{ border: "1px solid #9B87F5" }}
                    >
                      Student Progress
                    </div>
                    <div
                      className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center"
                      style={{ border: "1px solid #9B87F5" }}
                    >
                      Messaging
                    </div>
                    <div
                      className="bg-[rgba(25,25,25,0.8)] text-white px-4 py-3 rounded-lg font-medium text-center"
                      style={{ border: "1px solid #9B87F5" }}
                    >
                      Reports
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-white font-semibold mb-4">
                Wireframes
              </h3>
              <p className="text-[rgba(200,200,200,0.9)] mb-6">
                Low-fidelity wireframes were created to establish the basic
                structure of key screens, focusing on intuitive lesson creation
                and student progress tracking.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-primary font-medium mb-3">
                    Landing Page
                  </h4>
                  <div
                    className="aspect-[16/9] overflow-hidden rounded-lg border border-gray-700 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                    onClick={() =>
                      handleImageClick(
                        "/lovable-uploads/TutorD-Landing-Page.jpg"
                      )
                    }
                  >
                    <img
                      src="/lovable-uploads/TutorD-Landing-Page.jpg"
                      alt="Landing Page Wireframe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-primary font-medium mb-3">
                    Lesson Planner Screen
                  </h4>
                  <div
                    className="aspect-[16/9] overflow-hidden rounded-lg border border-gray-700 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                    onClick={() =>
                      handleImageClick(
                        "/lovable-uploads/TutorD-Lesson-Planner.jpg"
                      )
                    }
                  >
                    <img
                      src="/lovable-uploads/TutorD-Lesson-Planner.jpg"
                      alt="Lesson Planner Wireframe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-primary font-medium mb-3">
                    Progress Dashboard
                  </h4>
                  <div
                    className="aspect-[16/9] overflow-hidden rounded-lg border border-gray-700 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                    onClick={() =>
                      handleImageClick("/lovable-uploads/TutorD-Dashboard.jpg")
                    }
                  >
                    <img
                      src="/lovable-uploads/TutorD-Dashboard.jpg"
                      alt="Progress Dashboard Wireframe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Final UI Design */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Final UI Design</h2>
            </div>

            <p className="text-[rgba(200,200,200,0.9)] mb-8 leading-relaxed">
              The final UI design emphasizes clarity, efficiency, and
              accessibility. Using Ant Design components, we created a clean
              interface that helps teachers quickly create and manage SMS-based
              lessons.
            </p>

            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-primary font-medium mb-3">Landing Page</h4>
                <div
                  className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-700 mb-3 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  onClick={() =>
                    handleImageClick(
                      "/lovable-uploads/TutorD-Landing-Page-Final.jpg"
                    )
                  }
                >
                  <img
                    src="/lovable-uploads/TutorD-Landing-Page-Final.jpg"
                    alt="TutorD Dashboard UI"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-primary font-medium mb-3">Dashboard</h4>
                <div
                  className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-700 mb-3 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  onClick={() =>
                    handleImageClick(
                      "/lovable-uploads/TutorD-Dashboard-Final.jpg"
                    )
                  }
                >
                  <img
                    src="/lovable-uploads/TutorD-Dashboard-Final.jpg"
                    alt="TutorD Dashboard UI"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-primary font-medium mb-3">
                  Lesson Planner
                </h4>
                <div
                  className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-700 mb-3 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  onClick={() =>
                    handleImageClick(
                      "/lovable-uploads/TutorD-Lesson-Planner-Final.jpg"
                    )
                  }
                >
                  <img
                    src="/lovable-uploads/TutorD-Lesson-Planner-Final.jpg"
                    alt="TutorD Dashboard UI"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Key UI Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <School className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">Lesson Planner</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Intuitive interface for creating SMS-friendly lessons with
                    character count indicators and formatting guides.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MessageSquare className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">Messaging Tools</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Templates and scheduling options for sending reminders,
                    feedback, and personalized messages to students.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">
                      Progress Tracking
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Visual dashboards showing student engagement, response
                    rates, and completion metrics with filtering options.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Technical Implementation */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Technical Implementation
              </h2>
            </div>

            <p className="text-[rgba(200,200,200,0.9)] mb-6 leading-relaxed">
              The technical architecture was designed to ensure reliability,
              real-time updates, and a smooth user experience for teachers
              managing remote learning.
            </p>

            <div className="space-y-6">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">
                  Frontend Architecture
                </h3>
                <p className="text-gray-300">
                  Built with React.js and Redux for state management, the
                  frontend uses Ant Design components for a consistent and
                  accessible UI. The application is fully responsive to support
                  teachers using various devices.
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">
                  Real-Time Updates
                </h3>
                <p className="text-gray-300">
                  Redis integration enables real-time updates when students
                  respond to SMS assignments. Teachers receive immediate
                  notifications and can see progress updates without refreshing
                  the dashboard.
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">
                  SMS Integration
                </h3>
                <p className="text-gray-300">
                  The platform integrates with SMS gateway services to send and
                  receive messages. Messages are formatted to work on basic
                  feature phones, with careful attention to character limits and
                  readability.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Challenges & Learnings */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Challenges & Learnings
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Key Challenges
                </h3>

                <div className="space-y-4">
                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <h4 className="text-primary font-semibold mb-2">
                      SMS Limitations
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Working within the constraints of SMS (character limits,
                      no rich media) while still delivering effective
                      educational content.
                    </p>
                  </div>

                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <h4 className="text-primary font-semibold mb-2">
                      Teacher Workflow Integration
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Designing an interface that fit seamlessly into existing
                      teacher workflows without adding complexity.
                    </p>
                  </div>

                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <h4 className="text-primary font-semibold mb-2">
                      Real-Time Performance
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Ensuring the dashboard updated in real-time without
                      performance issues, even with many concurrent users.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Key Learnings
                </h3>

                <div className="space-y-4">
                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <h4 className="text-primary font-semibold">
                        Accessibility First Design
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Designing for the most constrained environment (SMS)
                      forced clarity and simplicity that benefited all users.
                    </p>
                  </div>

                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <h4 className="text-primary font-semibold">
                        Teacher-Centered UX
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Focusing on reducing teacher workload rather than adding
                      features led to higher adoption and satisfaction.
                    </p>
                  </div>

                  <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <h4 className="text-primary font-semibold">
                        Redux Architecture
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Implementing Redux with middleware for API calls and
                      real-time updates significantly improved code organization
                      and maintainability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Next Steps */}
      <section className="mb-16">
        <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Next Steps & Improvements
              </h2>
            </div>

            <p className="text-[rgba(200,200,200,0.9)] mb-6 leading-relaxed">
              Based on user feedback and ongoing development, several
              enhancements are planned for future iterations of TutorD.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Smartphone className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">Offline Usage</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Implement offline usage logging to allow teachers to work
                  without constant internet connection and sync when back
                  online.
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BarChart className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">Enhanced Analytics</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Develop more detailed analytics to help teachers identify
                  patterns in student engagement and performance.
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">MMS Support</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Add support for multimedia messaging to enable sharing of
                  simple images and diagrams with students who have compatible
                  phones.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Modal for full-size image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full size image"
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center"
              onClick={closeModal}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorDCaseStudy;
