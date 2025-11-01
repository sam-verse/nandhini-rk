import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Nandhini R K
          </h3>
          <p className="text-gray-400 mb-6">
            Computer Science and Business Systems Undergraduate
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
            <span>© 2025 All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
