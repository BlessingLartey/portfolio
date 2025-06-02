import { Facebook, Twitter, Linkedin, Dribbble } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">BKL</h2>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Dribbble size={24} />
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">Copyright © 2025 Blessing Lartey. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
