import {
  Stethoscope, Shield, Activity, Scissors, Sparkles, Anchor,
  Smile, Crown, Baby, HardHat, type LucideIcon,
} from 'lucide-react';
import { TREATMENTS } from '@/data/clinic';

const ICONS: Record<string, LucideIcon> = {
  Stethoscope, Shield, Activity, Scissors, Sparkles, Anchor, Smile, Crown, Baby, HardHat,
};

interface TreatmentsProps {
  onBookClick: (treatment?: string) => void;
}

export default function Treatments({ onBookClick }: TreatmentsProps) {
  return (
    <section id="treatments" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
            Treatments
          </h2>
          <p className="text-slate-600">
            Transparent pricing for every treatment. No hidden charges, just honest care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((t) => {
            const Icon = ICONS[t.icon] ?? Stethoscope;
            return (
              <div
                key={t.name}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center mb-4 group-hover:from-teal-500 group-hover:to-cyan-600 transition-all">
                  <Icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{t.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{t.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-teal-600">{t.price}</span>
                  <button
                    onClick={() => onBookClick(t.name)}
                    className="text-sm font-semibold text-teal-600 hover:text-teal-700 group-hover:underline"
                  >
                    Book this →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
