import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
       {/* <Navbar /> */}
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
