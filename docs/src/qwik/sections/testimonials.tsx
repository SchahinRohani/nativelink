import { component$ } from "@builder.io/qwik";

import TestimonialLogo from "../../assets/images/rocky_linux.webp";

export const Testimonial = component$(() => {
  return (
    <div class="flex flex-col gap-10">
      <div class="w-full bg-gradient-to-r from-white to-[#707098] bg-clip-text px-14 py-6 text-center text-lg leading-none tracking-normal text-transparent md:w-[891px] md:px-0 md:text-justify md:text-[36px]">
        "I asked about some issues a month ago and got swift feedback. We've
        been running NativeLink in production for about 2 weeks with great
        results. Great work folks!"
      </div>
      <div class="flex flex-row items-center justify-center gap-2">
        <span>Mustafa Gezen</span>
        <span class="text-[#8280A6]">from</span>
        <img src={TestimonialLogo.src} class="w-[120px]" />
      </div>
    </div>
  );
});
