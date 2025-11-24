import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import Button from '../UI/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: '학원 소개', path: '/about' },
    { label: '커리큘럼', path: '/curriculum' },
    { label: '명예의 전당', path: '/results' },
    { label: '상담 예약', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${isScrolled || isOpen ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
              <GraduationCap size={28} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold leading-none ${isScrolled || isOpen ? 'text-primary' : 'text-white'}`}>
                KAIST
              </span>
              <span className={`text-sm font-medium tracking-wider ${isScrolled || isOpen ? 'text-gray-600' : 'text-gray-200'}`}>
                수학 전문 학원
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-colors hover:text-secondary ${
                  isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button size="sm" variant={isScrolled ? 'primary' : 'white'}>
                레벨 테스트 신청
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} className="text-gray-800" />
            ) : (
              <Menu size={28} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/contact">
                <Button fullWidth>레벨 테스트 신청</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;