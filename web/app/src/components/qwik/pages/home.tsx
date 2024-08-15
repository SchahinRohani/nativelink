import { component$, useVisibleTask$ } from "@builder.io/qwik";

import { Benefits } from "../sections/benefits";
import { Engineers } from "../sections/engineers";
import { Hero } from "../sections/hero";
import { Impact } from "../sections/impact";
import { Products } from "../sections/products";
import { Testimonial } from "../sections/testimonials";

// import { qwikify$ } from "@builder.io/qwik-react";
// import { FAQ } from "@components/react/faq";
// import { Greetings } from "@components/react/components/hello";
// const QGreetings = qwikify$(Greetings);
// export const QFAQ = qwikify$(FAQ);

export const LandingPage = component$(() => {
  useVisibleTask$(() => {
    console.info("Welome to NativeLink");
  });

  return (
    <main class="flex w-full flex-col items-center justify-center gap-10 bg-black font-nunito text-white">
      <Hero />
      <Testimonial />
      <Products />
      <Impact />
      <Engineers />
      <Benefits />
      {/* <QFAQ client:visible /> */}
    </main>
  );
});
