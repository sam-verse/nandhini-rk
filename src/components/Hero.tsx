import { ArrowRight, Download, Mail, Linkedin } from 'lucide-react';
import profileImg from '../public/profile.png';
import resumeFile from '../public/resumegeneral.pdf';

// Hero component for portfolio
export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Nandhini_RK_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
 
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="backdrop-blur-sm bg-white/30 rounded-3xl p-12 shadow-2xl border border-white/50">

          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium">
            Yi Yuva Champion | Project Management | Data Visualization
          </div>
          <img 
            src={profileImg}
            alt="Nandhini RK" 
            className="w-50 h-60 md:w-60 md:h-60 rounded-xl mx-auto mb-8 object-cover border-4 border-white shadow-lg"
          />

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
            Nandhini R K
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light">
            Computer Science and Business Systems Undergraduate
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Passionate about leadership, innovation, and creating impactful solutions through technology and collaboration
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Let's Connect
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={downloadResume}
              className="flex items-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-blue-400"
            >
              <Download className="w-5 h-5" />
              View Resume
            </button>

            <a
              href="https://www.linkedin.com/in/nandhini-r-k-28172827a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-blue-400"
            >
              <Linkedin className="w-5 h-5 text-blue-600" />
              LinkedIn
            </a>

            <a
              href="mailto:nandhiniramachandrank@gmail.com"
              className="flex items-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-blue-400"
            >
              <Mail className="w-5 h-5 text-purple-600" />
              Email
            </a>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
