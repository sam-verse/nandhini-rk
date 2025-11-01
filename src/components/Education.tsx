import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science and Business Systems',
    institution: 'Rajalakshmi Engineering College',
    location: 'Chennai, Tamil Nadu',
    period: '2022 - 2026',
    description: 'Pursuing an interdisciplinary degree that combines computer science with business strategy and systems thinking.',
    highlights: ['Technical Excellence', 'Business Strategy', 'System Design']
  },
  {
    degree: 'Higher Secondary Education',
    field: 'Science Stream',
    institution: 'Previous Institution',
    location: 'Tamil Nadu',
    period: '2020 - 2022',
    description: 'Completed higher secondary education with focus on mathematics and computer science.',
    highlights: ['Mathematics', 'Computer Science', 'Academic Excellence']
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"></div>

              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                      <p className="text-lg text-purple-600 font-semibold mb-2">{edu.field}</p>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm bg-gray-100 px-4 py-2 rounded-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-700">{edu.institution}</p>
                      <p className="text-gray-600 text-sm">{edu.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
