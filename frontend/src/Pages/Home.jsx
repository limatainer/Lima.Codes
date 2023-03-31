import React from 'react';

import {
  Navbar,
  Presentation,
  ReturnToTopButton,
  Footer,
  Promo,
  Courses,
  Contato,
  Chatbot,
} from '../components';

export default function Home() {
  return (
    <>
      <Navbar />
      <Promo />
      <Presentation />
      <Courses />
      <Contato />
      <ReturnToTopButton />
      <Chatbot />
      <Footer />
    </>
  );
}
