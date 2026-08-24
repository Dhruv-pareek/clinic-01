import { Award, CheckCircle } from 'lucide-react';
import { DOCTORS } from '@/data/clinic';

export default function Doctor() {
  return (
    <section id="doctor" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-semibold mb-4">
            Meet Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
            Your dental experts
          </h2>
          <p className="text-slate-600">
            Experienced and compassionate dentists dedicated to your oral health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {DOCTORS.map((doc) => (
            <div
              key={doc.name}
              className="group bg-gradient-to-b from-slate-50 to-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-teal-100 to-cyan-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      doc.name === 'Dr. Ashlesha Pareek' ? 'object-[center_24%]' : 'object-center'
                    }`}
                  />
                </div>
                <div className="absolute -bottom-5 left-6 right-6 bg-white rounded-2xl shadow-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-800">{doc.qualifications}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pt-10 pb-6 space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">{doc.name}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{doc.bio}</p>

                <div>
                  <h4 className="text-sm font-bold text-slate-700 mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {doc.specialties.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium"
                      >
                        <CheckCircle className="w-4 h-4" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
