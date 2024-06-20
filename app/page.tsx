import About from "@/components/about";
import Classes from "@/components/classes";
import Hero from "@/components/hero";
import Membership from "@/components/membership";
import Team from "@/components/team";
import Testimonial from "@/components/testimonial";
import Brands from "@/components/brands";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <Testimonial />
      <Brands />
    </main>
  );
}