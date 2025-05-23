import { GuestLayout } from "../Layouts/GuestLayout";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { TopProducts } from "../components/TopProducts";
import { Testimonials } from "../components/Testimonials";

export function Guest() {
  return (
    <GuestLayout>
      <Hero />
      <About />
      <TopProducts />
      <Testimonials />
    </GuestLayout>
  );
}
