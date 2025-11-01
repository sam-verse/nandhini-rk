import { Code, Users, TrendingUp, Award, Lightbulb, Target } from 'lucide-react';

const skills = [
  { name: 'Leadership', icon: Users, color: 'from-blue-500 to-blue-600' },
  { name: 'Project Management', icon: Target, color: 'from-purple-500 to-purple-600' },
  { name: 'Data Visualization', icon: TrendingUp, color: 'from-pink-500 to-pink-600' },
  { name: 'Power BI', icon: Code, color: 'from-indigo-500 to-indigo-600' },
  { name: 'Public Speaking', icon: Award, color: 'from-blue-500 to-purple-500' },
  { name: 'Problem Solving', icon: Lightbulb, color: 'from-purple-500 to-pink-500' },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-3 opacity-10"></div>
            <div className="relative backdrop-blur-sm bg-white/80 p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="text-9xl font-bold text-transparent bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text opacity-20 absolute top-4 right-8">
                NR
              </div>
              <div className="relative z-10">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Hi! I'm <span className="font-semibold text-blue-600">Nandhini R K</span>, a Computer Science and Business Systems student passionate about bridging technology with strategic leadership.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  As the <span className="font-semibold text-purple-600">Head of Communications at Yi Yuva REC</span> and <span className="font-semibold text-purple-600">PR Lead at Intellexa REC</span>, I've honed my skills in team coordination, event management, and creative problem-solving.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I thrive on challenges, whether it's analyzing data, hosting events, or leading teams toward impactful outcomes. Let's create something amazing together!
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Core Competencies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-gray-800">{skill.name}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
