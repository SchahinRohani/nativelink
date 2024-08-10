import { component$ } from "@builder.io/qwik";

import MockUp from "../../assets/images/Mockup.webp";
import Overlay from "../../assets/images/background_highlighting.webp";

export const Hero = component$(() => {
  return (
    <div class="relative flex w-full flex-col items-center justify-evenly gap-5 pb-10 text-white">
      {/* Background Video */}
      <video
        class="absolute left-0 top-[-10vh] z-0 h-auto w-full object-contain"
        autoplay
        loop
        muted
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay Image */}
      <img
        src={Overlay.src}
        class="absolute left-0 right-0 top-0 z-10 mx-auto h-auto w-full object-cover"
        alt="Overlay"
      />

      {/* Content */}
      <div class="relative z-20 flex w-full flex-col items-center justify-evenly gap-5 pb-10 pt-56 text-white md:w-[850px]">
        <div class="bg-gradient-to-r from-white to-[#707098] bg-clip-text py-4 text-center font-nunito text-[2.6rem] leading-none tracking-normal text-transparent md:text-[85px]">
          Cut cloud spend. Turbo charge builds.
        </div>
        <div class="w-full py-4 text-center md:w-[550px]">
          The fastest build and simulation tool, tailored to handle large
          objects and intricate systems across native and interpreted
          programming languages.
        </div>
        <div class="flex flex-col gap-5 md:flex-row">
          <a  class="flex items-center justify-center rounded-[14px] border border-solid bg-white text-black transition-all duration-200 hover:border-white hover:bg-black hover:text-white md:h-[37px] md:w-[193px]">
            Try NativeLink Cloud
          </a>
          <a href="/introduction/setup" class="flex items-center justify-center rounded-[14px] border border-solid bg-white text-black transition-all duration-200 hover:border-white hover:bg-black hover:text-white md:h-[37px] md:w-[193px]">
            NativeLink Quickstart
          </a>
        </div>
        <img src={MockUp.src} class="w-[80vw] md:w-full" />
      </div>
    </div>
  );
});
