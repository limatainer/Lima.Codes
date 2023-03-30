import React from 'react';

import {
  Navbar,
  Presentation,
  Promo,
  Courses,
  Contato,
  Footer,
  ReturnToTopButton,
  ChatBot,
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
      <ChatBot />
      <Footer />
    </>
  );
}
