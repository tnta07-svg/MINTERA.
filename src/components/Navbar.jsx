import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Story', path: '/story' },
    { name: '商品', path: '/product' },
    { name: '科学的根拠', path: '/science' },
    { name: 'お客様の声', path: '/faq' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="z-50 relative">
          <img src="/logo.png" alt="MINTERA" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-widest hover:opacity-70 transition-colors ${isHome && !scrolled ? 'text-white' : 'text-gray-600'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/purchase"
            className={`px-6 py-2 rounded-full text-sm tracking-widest transition-all ${isHome && !scrolled
                ? 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                : 'bg-gray-900 text-white hover:bg-gray-700'
              }`}
          >
            SHOP
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 z-50 mr-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-gray-800" />
          ) : (
            <Menu className={isHome && !scrolled ? 'text-white' : 'text-gray-800'} />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-serif text-gray-800"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/purchase"
                className="px-8 py-3 bg-gray-900 text-white rounded-full text-lg tracking-widest"
              >
                SHOP
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
