import { component$, useVisibleTask$ } from '@builder.io/qwik';

import { Header } from "./sections/header";
import { Hero } from "./sections/hero";
import { Testimonial } from "./sections/testimonials";
import { Products } from "./sections/products";
import { Impact } from "./sections/impact";
import { Engineers } from "./sections/engineers";
import { Benefits } from "./sections/benefits";
import { Footer } from "./sections/foooter";

 export const LandingPage = component$(() => {
  useVisibleTask$(() => {
    console.log("Welome to NativeLink");
  });

  return (
    <main class="flex flex-col items-center justify-center gap-10 bg-black font-nunito text-white">
      <Header />
      <Hero />
      <Testimonial />
      <Products />
      <Impact />
      <Engineers />
      <Benefits />
      <Footer />
    </main>
  );
});
