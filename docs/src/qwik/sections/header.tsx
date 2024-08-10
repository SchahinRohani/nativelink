import { component$ } from "@builder.io/qwik";
// import { Link } from "@builder.io/qwik-city";

import Logo from "../../assets//images/nativelink.webp";
import { Slack, GitHub } from "../media/icons/icons";

export const Header = component$(() => {
  return (
    <header class="absolute top-0 z-30 m-[48px] flex h-[77px] w-full flex-col items-center justify-center px-24 md:flex-row md:justify-between">
      <img
        src={Logo.src}
        loading="lazy"
        class="h-[29px] w-[179px]"
        alt="Description of the image"
      />
      <div class="justify-cente flex flex-col items-center gap-2 text-[16px]">
        <div class="flex flex-row gap-1">
          <span class="">get</span>
          <span class="text-[#9F6BFE]">connected.</span>
          <span class="">stay</span>
          <span class="text-[#9F6BFE]">updated.</span>
        </div>
        <div class=" flex flex-row">
          <a href="https://nativelink.slack.com/join/shared_invite/zt-2i2mipfr5-lZAEeWYEy4Eru94b3IOcdg#/shared-invite/email">
            <Slack />
          </a>
          <a href="https://github.com/tracemachina/nativelink">
            <GitHub />
          </a>
        </div>
      </div>
    </header>
  );
});
