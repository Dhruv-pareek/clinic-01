import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { CLINIC } from '@/data/clinic';

interface NavbarProps {
  onBookClick: () => void;
  onLoginClick: () => void;
}

export default function Navbar({ onBookClick, onLoginClick }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'About', target: 'about' },
    { label: 'Treatments', target: 'treatments' },
    { label: 'Doctor', target: 'doctor' },
    { label: 'Timings', target: 'timings' },
    { label: 'Contact', target: 'contact' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
            <div className="w-11 h-11 rounded-full bg-white p-0.5 shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform overflow-hidden">
              <img src="/new.jpeg" alt="THE DENTAL HUT logo" className="w-full h-full rounded-full object-cover" />
            </div>
            <span className={`font-bold text-lg transition-colors ${scrolled ? 'text-slate-800' : 'text-slate-800'}`}>
              {CLINIC.name}
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onLoginClick}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all"
            >
              Staff Login
            </button>
            <button
              onClick={onBookClick}
              className="ml-2 flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105 transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-700">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="block w-full text-left px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { onLoginClick(); setOpen(false); }}
              className="block w-full text-left px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all"
            >
              Staff Login
            </button>
            <button
              onClick={() => { onBookClick(); setOpen(false); }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg mt-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
