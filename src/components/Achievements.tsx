import { Trophy, Award, GraduationCap, Star } from 'lucide-react';

const achievements = [
  {
    title: 'Yi Yuva Champion',
    description: 'Recognition for outstanding leadership and contributions',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Technical Quiz Winner',
    description: 'Techastra\'24 - First Place',
    icon: Award,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'LinkedIn Learning',
    description: 'Certified in Mastering Leadership Effectiveness skills and Developing a Competitive strategy',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Event Management',
    description: 'Coordinated Resonance’25, an inter college tech festival \nCore team of Walkalong 2025, an inclusivity walk organised by Yi Chennai',
    icon: Star,
    color: 'from-green-500 to-teal-500'
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max md:grid md:grid-cols-4 md:min-w-0">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 min-w-[280px] md:min-w-0"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">{achievement.description}</p>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Project Management Fundamentals',
              'Data Visualization Techniques',
              'Leadership & Communication Skills'
            ].map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
