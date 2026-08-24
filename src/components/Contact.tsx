import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import { TIMINGS, CLINIC } from '@/data/clinic';

export default function Contact() {
  return (
    <section id="timings" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-semibold mb-4">
            Visit Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
            Timings & location
          </h2>
          <p className="text-slate-600">
            We're here when you need us. Walk in or book an appointment online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Timings */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Opening Hours</h3>
            </div>
            <div className="space-y-1">
              {/* Table header */}
              <div className="grid grid-cols-3 gap-2 pb-2 border-b-2 border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Day</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide text-center">Morning</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide text-center">Evening</span>
              </div>
              {TIMINGS.map((t) => (
                <div
                  key={t.day}
                  className="grid grid-cols-3 gap-2 py-3 border-b border-slate-50 last:border-0 items-center"
                >
                  <span className="font-medium text-slate-700 text-sm">{t.day}</span>
                  <span className="text-sm font-semibold text-teal-600 text-center">
                    {t.morning}
                  </span>
                  <span className={`text-sm font-semibold text-center ${t.evening ? 'text-teal-600' : 'text-slate-300'}`}>
                    {t.evening ?? '—'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Address */}
          <div id="contact" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Our Address</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{CLINIC.address}</p>
              <a
                href={CLINIC.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-semibold text-teal-600 hover:text-teal-700 hover:underline"
              >
                View on Google Maps →
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Get in Touch</h3>
              </div>
              <div className="space-y-3">
                <a href={`tel:${CLINIC.phone}`} className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors">
                  <Phone className="w-4 h-4 text-teal-500" />
                  {CLINIC.phone}
                </a>
                <a href={`tel:${CLINIC.phone2}`} className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors">
                  <Phone className="w-4 h-4 text-teal-500" />
                  {CLINIC.phone2}
                </a>
                <a href={`mailto:${CLINIC.email}`} className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors">
                  <Mail className="w-4 h-4 text-teal-500" />
                  {CLINIC.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
