import React from 'react';
import { Cpu, Database, Factory, Glasses, Brain, Cog } from 'lucide-react';

export const categories = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Embedded Systems Engineering",
    semester: "First Semester",
    courses: [
      "Embedded Systems Software",
      "Embedded Systems Hardware",
      "Smart Sensors",
      "Signal Modulation",
      "Computer Assisted Design",
      "3D Printing"
    ]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data & Cloud",
    semester: "Second Semester",
    courses: [
      "Machine Learning & Deep Learning",
      "Big Data Systems",
      "Cloud Computing",
      "Information Systems & DB Management"
    ]
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Industry 4.0",
    semester: "Second Semester",
    courses: [
      "IoT & Industrial Networks",
      "Automation",
      "Product Lifecycle Management",
      "Digital Transition & Smart City"
    ]
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: "Advanced Technologies",
    semester: "Third Semester",
    courses: [
      "Industrial IoT",
      "Connected Systems Control",
      "Robotics",
      "Collaborative Robotics"
    ]
  },
  {
    icon: <Glasses className="w-8 h-8" />,
    title: "XR Development",
    semester: "Mixed Semesters",
    courses: [
      "Introduction to AR",
      "Introduction to VR",
      "Advanced VR",
      "XR Projects"
    ]
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Professional Skills",
    semester: "Throughout Program",
    courses: [
      "System Engineering",
      "Agile Management",
      "Project Management",
      "Quality Management",
      "Design Thinking"
    ]
  }
];