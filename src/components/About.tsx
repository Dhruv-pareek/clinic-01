import { CLINIC } from '@/data/clinic';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-square">
              <img
                src="https://images.pexels.com/photos/6627562/pexels-photo-6627562.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dental clinic interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-5 order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-semibold">
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
              A clinic built around your comfort
            </h2>
            <p className="text-slate-600 leading-relaxed">
              At Dental Hut, located in the heart of Moti Nagar, Ludhiana, we believe in creating
              a warm, inviting atmosphere that makes dental care a pleasant experience for all our
              patients. Our unique blend of professional expertise and friendly ambiance ensures
              that your visit is comfortable and stress-free.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-teal-50 rounded-2xl">
                <p className="text-3xl font-bold text-teal-600">1000+</p>
                <p className="text-sm text-slate-500 mt-1">Happy patients</p>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-2xl">
                <p className="text-3xl font-bold text-cyan-600">2+</p>
                <p className="text-sm text-slate-500 mt-1">Years experience</p>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-2xl">
                <p className="text-3xl font-bold text-emerald-600">1000+</p>
                <p className="text-sm text-slate-500 mt-1">Treatments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
