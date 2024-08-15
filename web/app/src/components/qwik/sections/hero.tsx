import { component$ } from "@builder.io/qwik";

// import MockUp from "../../assets/images/Mockup.webp";
// import Overlay from "../../assets/images/background_highlighting.webp";

const videoLink =
  "https://video.wixstatic.com/video/e16379_17fe40ef02fe478fb675cced13e69dde/720p/mp4/file.mp4";
const MockUp =
  "https://static.wixstatic.com/media/e16379_a162a7e6486d4192b484d9651704d8fa~mv2.png/v1/fill/w_889,h_520,al_c,q_90,usm_0.33_1.00_0.00,enc_auto/e16379_a162a7e6486d4192b484d9651704d8fa~mv2.png";
// const overlay =

export const Hero = component$(() => {
  return (
    <div class="relative flex w-full flex-col items-center justify-evenly gap-5 pb-10 text-white">
      {/* Background Video */}
      <video
        class="absolute left-0 top-[-10vh] z-0 h-auto w-full object-contain"
        autoplay={true}
        loop={true}
        muted={true}
      >
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay Image */}
      {/* <img
        src={Overlay.src}
        class="absolute left-0 right-0 top-0 z-10 mx-auto h-auto w-full object-cover"
        alt="Overlay"
      /> */}

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
          <a
            href="https://app.nativelink.com"
            class="flex items-center justify-center rounded-[14px] border border-solid bg-white text-black transition-all duration-200 hover:border-white hover:bg-black hover:text-white md:h-[37px] md:w-[193px]"
          >
            Try NativeLink Cloud
          </a>
          <a
            href="/docs/introduction/setup"
            class="flex items-center justify-center rounded-[14px] border border-solid bg-white text-black transition-all duration-200 hover:border-white hover:bg-black hover:text-white md:h-[37px] md:w-[193px]"
          >
            NativeLink Quickstart
          </a>
        </div>
        <img alt="Nativelink UI" src={MockUp} class="w-[80vw] md:w-full" />
      </div>
    </div>
  );
});
