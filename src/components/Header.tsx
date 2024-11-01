import React from 'react';
import { Menu, X, User, Calendar } from 'lucide-react';

interface HeaderProps {
  onAuthClick: () => void;
}

export default function Header({ onAuthClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              TeleMed
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#doctors" className="text-gray-600 hover:text-blue-600">
              Find Doctors
            </a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">
              About Us
            </a>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Calendar className="h-4 w-4" />
              Book Appointment
            </button>
            <button
              onClick={onAuthClick}
              className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <User className="h-4 w-4" />
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a
              href="#doctors"
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              Find Doctors
            </a>
            <a
              href="#services"
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              About Us
            </a>
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Calendar className="h-4 w-4" />
              Book Appointment
            </button>
            <button
              onClick={onAuthClick}
              className="w-full flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <User className="h-4 w-4" />
              Sign In
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}