import React from 'react';
import Navbar from '../components/Navbar';
import Promo from '../components/Promo';
import Presentation from '../components/Presentation';
import Courses from '../components/Courses';
import Contato from '../components/Contato';
import ReturnToTopButton from '../components/ReturnToTopButton';
import ChatBot from '../components/Chatbot';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Promo />
      <Presentation />
      <Courses />
      <Contato />
      <ReturnToTopButton />
      <ChatBot />
      <Footer />
    </>
  );
}
