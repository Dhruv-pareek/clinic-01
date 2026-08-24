import { useState } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Treatments from '@/components/Treatments';
import Doctor from '@/components/Doctor';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import LoginPage from '@/pages/LoginPage';
import Dashboard from '@/pages/Dashboard';
import { Loader2 } from 'lucide-react';

type View = 'home' | 'login' | 'dashboard';

function AppContent() {
  const { session, loading } = useAuth();
  const [view, setView] = useState<View>('home');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedTreatment, setPreselectedTreatment] = useState<string | undefined>(undefined);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 text-teal-500 animate-spin" />
      </div>
    );
  }

  // If logged in and trying to access login, go to dashboard
  if (view === 'login' && session) {
    setView('dashboard');
  }

  if (view === 'login' && !session) {
    return <LoginPage onBack={() => setView('home')} />;
  }

  if (view === 'dashboard' && session) {
    return <Dashboard onBack={() => setView('home')} />;
  }

  const openBooking = (treatment?: string) => {
    setPreselectedTreatment(treatment);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onBookClick={() => openBooking()}
        onLoginClick={() => setView('login')}
      />
      <Hero onBookClick={() => openBooking()} />
      <About />
      <Treatments onBookClick={openBooking} />
      <Doctor />
      <Contact />
      <Footer onBookClick={() => openBooking()} />

      <BookingModal
        open={bookingOpen}
        onClose={() => {
          setBookingOpen(false);
          setPreselectedTreatment(undefined);
        }}
        preselectedTreatment={preselectedTreatment}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
