import { Shield, TrendingUp, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: typeof Shield;
  gradient: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Digital Safety Audit',
    subtitle: 'Web Application Security Assessment',
    description: 'Comprehensive security audit of web applications to identify vulnerabilities and improve digital safety.',
    details: [
      'Conducted thorough security assessments of web applications',
      'Identified and documented critical vulnerabilities and security gaps',
      'Provided actionable recommendations for security improvements',
      'Implemented best practices for data protection and user privacy'
    ],
    icon: Shield,
    gradient: 'from-blue-600 to-cyan-600',
    tags: ['Security', 'Web Development', 'Risk Assessment']
  },
  {
    title: 'Sales Dashboard Analysis',
    subtitle: 'Interactive Power BI Dashboard',
    description: 'Dynamic sales analytics dashboard providing real-time insights and data-driven decision making tools.',
    details: [
      'Designed and developed interactive Power BI dashboards',
      'Analyzed sales trends and performance metrics across multiple dimensions',
      'Created visualizations for revenue tracking and forecasting',
      'Enabled data-driven insights for strategic business decisions'
    ],
    icon: TrendingUp,
    gradient: 'from-purple-600 to-pink-600',
    tags: ['Power BI', 'Data Visualization', 'Analytics']
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 cursor-pointer overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-purple-600 font-semibold mb-4">{project.subtitle}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-sm font-medium rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                View Details
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-6" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl transform transition-all" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${selectedProject.gradient} rounded-2xl flex items-center justify-center`}>
                <selectedProject.icon className="w-8 h-8 text-white" />
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <h3 className="text-3xl font-bold text-gray-800 mb-2">{selectedProject.title}</h3>
            <p className="text-purple-600 font-semibold mb-4">{selectedProject.subtitle}</p>
            <p className="text-gray-700 mb-6 leading-relaxed">{selectedProject.description}</p>

            <h4 className="text-xl font-bold text-gray-800 mb-4">Key Highlights</h4>
            <ul className="space-y-3 mb-6">
              {selectedProject.details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <div className={`w-2 h-2 bg-gradient-to-r ${selectedProject.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 bg-gradient-to-r ${selectedProject.gradient} text-white text-sm font-medium rounded-full`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
