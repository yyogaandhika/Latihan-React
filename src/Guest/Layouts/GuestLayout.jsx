import React from 'react';
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { TopProducts } from "../components/TopProducts";

export function GuestLayout() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Testimonials/>
      <TopProducts/>
      <Footer />
    </div>
  );
}