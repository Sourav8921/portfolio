import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 px-4 sm:px-6 lg:px-8">
      <nav className="max-w-6xl mx-auto py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Sourav Ramesh
          </h1>

          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-gray-900 transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-gray-900 transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-gray-900 transition-colors text-left"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
