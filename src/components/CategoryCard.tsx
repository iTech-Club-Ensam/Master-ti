import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  semester: string;
  courses: string[];
}

export function CategoryCard({ icon, title, semester, courses }: CategoryCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-bold font-poppins">{title}</h2>
          <p className="text-sm text-gray-400">{semester}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {courses.map((course, index) => (
          <li 
            key={index}
            className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
          >
            • {course}
          </li>
        ))}
      </ul>
    </div>
  );
}