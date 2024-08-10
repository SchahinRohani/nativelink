import { component$ } from "@builder.io/qwik";

import Overlay from "../../assets/images/overlay_footer.webp";

export const Footer = component$(() => {
  return (
    <footer class="relative h-[418px] w-full">
      <div class="absolute inset-0 overflow-hidden">
        {/* Background Video */}
        <video
          autoplay
          loop
          muted
          playsInline
          class="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Image */}
        <img
          src={Overlay.src}
          class="absolute inset-0 h-full w-full object-cover"
          alt="Overlay"
        />
      </div>

      <div class="relative z-10 flex h-full w-full flex-col items-center justify-center gap-12 md:flex-row md:gap-0">
        <div class="flex w-full items-center justify-center text-[2.5rem] leading-none tracking-normal md:text-[52px] ">
          <div class="flex flex-col items-start ">
            <div>
              Lets <span class="text-[#AD96FF]">build</span> together.
            </div>
            <div> We launch soon!</div>
          </div>
        </div>

        <div class="flex w-full items-center justify-center">
          <div class="flex w-3/4 flex-col items-start gap-5">
            <form class="flex w-full max-w-md flex-col items-center justify-center gap-5 md:flex-row md:items-end md:justify-start">
              <div class="">
                <label class="mb-2 block text-sm font-bold" for="email">
                  Email *
                </label>
                <input
                  class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="email"
                  type="email"
                  placeholder="Sign up here"
                />
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="focus:shadow-outline rounded bg-purple-600 px-4 py-2 font-bold text-white hover:bg-purple-700 focus:outline-none"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div class="text-[22px]">
              <span class="text-[#AD96FF]">Get in touch:</span>{" "}
              <a href="mailto:hello@nativelink.com">
                hello@nativelink.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
