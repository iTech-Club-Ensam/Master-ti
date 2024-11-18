import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { CheckCircle2, Cpu, Database, Factory, Glasses, Brain, Cog } from 'lucide-react';
import { CategoryCard } from './components/CategoryCard';
import { categories } from './data/categories';

const semesters = [
  {
    name: "First Semester",
    mobile: "1st Sem",
    courses: [
      "Embedded Systems Software",
      "Embedded Systems Hardware",
      "Smart Sensors",
      "Information System and DB Management",
      "Python Programming",
      "Signal Modulation",
      "Language and Soft Skills",
      "Introduction to AR",
      "Introduction to VR",
      "Computer Assisted Conception and Design",
      "3D Printing"
    ]
  },
  {
    name: "Second Semester",
    mobile: "2nd Sem",
    courses: [
      "Machine Learning and Deep Learning",
      "Automation",
      "IoT and Industry 4.0",
      "Big Data",
      "Cloud Computing",
      "Product Life Management",
      "System Engineering and Agile Management",
      "Digital Transition and Smart City"
    ]
  },
  {
    name: "Third Semester",
    mobile: "3rd Sem",
    courses: [
      "Advanced VR",
      "Industrial IoT",
      "Connected Systems Control",
      "XR Project",
      "Project Management",
      "Quality Management",
      "Design Thinking",
      "Robotics",
      "Cobotics"
    ]
  }
];

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-poppins">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="line-through opacity-50 block mb-4">Immersive Technologies</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r text-[0.5em] pb-2 from-blue-400 to-cyan-300 block">more like</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Smart Systems Engineering<br />and digital transition
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive master's program bridging embedded systems, IoT, data engineering, 
            and extended reality technologies for the industry 4.0 era.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              semester={category.semester}
              courses={category.courses}
            />
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Detailed Curriculum</h2>
          <Tabs defaultValue="First Semester" className="w-full">
            <TabsList className="w-[100%] overflow-hidden flex justify-between px-[5%] mb-8">
              {semesters.map((semester) => (
                <TabsTrigger key={semester.name} value={semester.name}>
                  {windowWidth > 570 ? semester.name : semester.mobile}
                </TabsTrigger>
              ))}
            </TabsList>
            {semesters.map((semester) => (
              <TabsContent key={semester.name} value={semester.name}>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-6">{semester.name} Courses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {semester.courses.map((course) => (
                      <div key={course} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-200">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Program Value</h2>
          <p className="text-gray-300 leading-relaxed">
            This program offers a unique blend of theoretical knowledge and practical skills across various domains of
            digital technology. Graduates are well-equipped to tackle complex challenges in the ever-evolving tech
            landscape, making them valuable assets in fields such as IoT, smart systems, automation, and advanced
            software development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;