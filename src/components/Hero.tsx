import { Calendar, Phone, MapPin, Stethoscope, Shield, Heart } from 'lucide-react';
import { CLINIC } from '@/data/clinic';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-teal-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4" />
              {CLINIC.tagline}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Your smile is our{' '}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
                priority
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              At {CLINIC.name}, we combine modern dental technology with gentle, personalised care
              to give you a healthy, confident smile that lasts a lifetime.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onBookClick}
                className="flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105 transition-all"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
              <a
                href={`tel:${CLINIC.phone}`}
                className="flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-teal-700 bg-white border-2 border-teal-200 rounded-xl hover:border-teal-400 hover:bg-teal-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-slate-600">
                <Shield className="w-5 h-5 text-teal-500" />
                <span className="text-sm font-medium">Painless treatments</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Stethoscope className="w-5 h-5 text-teal-500" />
                <span className="text-sm font-medium">Expert dentists</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-5 h-5 text-teal-500" />
                <span className="text-sm font-medium">Easy to reach</span>
              </div>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/20 aspect-[4/3] bg-gradient-to-br from-teal-400 to-cyan-500">
              <img
                src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern dental clinic"
                className="w-full h-full object-cover mix-blend-overlay opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-medium opacity-90">Trusted by thousands of patients</p>
                <p className="text-2xl font-bold">Expert dental care</p>
              </div>
            </div>
            {/* Floating stat card */}
            <div className="absolute -top-6 -right-2 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-pulse-slow">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                <Heart className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">4.9</p>
                <p className="text-xs text-slate-500">Patient rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
