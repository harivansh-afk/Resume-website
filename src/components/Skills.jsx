import React from 'react';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "C/C++", level: 80 },
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Vite", level: 80 },
      { name: "Next.js 14", level: 80 },
    ]
  },
  {
    title: "Tools & Databases",
    skills: [
      { name: "Git/Github", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "Supabase", level: 80 },
      { name: "Vercel", level: 80 },
    ]
  }
];

function Skills() {
  return (
    <div className="py-16">
      <h2 className="heading text-center">Skills & Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="card hover:transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
