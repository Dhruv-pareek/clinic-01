import { Code } from 'lucide-react';
import { CLINIC, DEVELOPER } from '@/data/clinic';

interface FooterProps {
  onBookClick: () => void;
}

export default function Footer({ onBookClick }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-11 h-11 rounded-full bg-white p-0.5 shadow-lg shadow-black/20 overflow-hidden">
                <img src="/new.jpeg" alt="THE DENTAL HUT logo" className="w-full h-full rounded-full object-cover" />
              </div>
              <span className="font-bold text-lg text-white">{CLINIC.name}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {CLINIC.tagline}. Providing quality dental care with a gentle touch.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-teal-400 transition-colors">About Us</button>
              <button onClick={() => document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-teal-400 transition-colors">Treatments</button>
              <button onClick={() => document.getElementById('doctor')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-teal-400 transition-colors">Our Doctor</button>
              <button onClick={onBookClick} className="text-left hover:text-teal-400 transition-colors">Book Appointment</button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <p>{CLINIC.address}</p>
              <p>{CLINIC.phone}  |  {CLINIC.phone2}</p>
              <p>{CLINIC.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Code className="w-4 h-4 text-teal-400" />
            <span>{DEVELOPER.detail}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
