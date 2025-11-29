import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Head of Communications',
    organization: 'Yi Yuva REC',
    period: '2024 - 2025',
    description: 'Leading communication strategies, coordinating team efforts, and managing organizational outreach initiatives.',
    highlights: ['Strategic Leadership', 'Team Coordination', 'Brand Management']
  },
  {
    title: 'PR Lead',
    organization: 'Intellexa REC',
    period: '2024 - 2025',
    description: 'Spearheading public relations efforts, event promotions, and community engagement activities.',
    highlights: ['Public Relations', 'Event Marketing', 'Community Building']
  },
  {
    title: 'Board Member - Communications',
    organization: 'Yi Yuva REC',
    period: '2023 - 2024',
    description: 'Conceptualised and hosted, Kutty story S1 and S2, a podcast that focused on the student emotions, experience and life as a whole.',
    highlights: ['Strategic Planning', 'Organizational Development', 'Decision Making']
  },
  {
    title: 'Event Host & Emcee',
    organization: 'Recharge 2024 & 2025',
    period: '2024 - 2025',
    description: 'Hosted Recharge 24 and 25, the national level inter collegiate cultural fest organised by REC.',
    highlights: ['Public Speaking', 'Audience Engagement', 'Event Management']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-1/2'}`}
            >
              <div className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                    <p className="text-lg text-purple-600 font-semibold mb-2">{exp.organization}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-colors duration-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
