import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/services/Services';
import DoctorSearch from './components/doctors/DoctorSearch';
import AuthModal from './components/auth/AuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAuthClick={() => setIsAuthModalOpen(true)} />
      <Hero />
      <Services />
      <DoctorSearch />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
}

export default App;