import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";

import { NavLink } from "./nav-link";

import { GitHub, Slack } from "../../media/icons/icons";
import styles from "./header.css?inline";

const Logo =
  "https://static.wixstatic.com/media/e16379_7fa715a71b41439d93a362b05bbb98a3~mv2.png/v1/fill/w_274,h_52,al_c,lg_1,q_85,enc_auto/e16379_7fa715a71b41439d93a362b05bbb98a3~mv2.png";

const mobileLogo =
  "https://static.wixstatic.com/media/e16379_ebaae466807343b0a880cc8811c53070~mv2.png/v1/fill/w_90,h_80,al_c,lg_1,q_85,enc_auto/Logo.png";

const links = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Community", href: "/community" },
  { name: "Company", href: "/company" },
  { name: "Docs", href: "/docs/introduction/setup" },
];

interface URL {
  pathName: string;
}

export const Header = component$((url: URL) => {
  useStylesScoped$(styles);
  const navState = useSignal(false);

  return (
    <header class="fixed transition-all duration-1000 ease-in-out top-0 z-30 flex md:px-8 p-2 w-full bg-black md:bg-black/70 flex-col items-center justify-evenly flex-row md:justify-between">
      <a href="/" class="z-60">
        <img
          src={Logo}
          loading="lazy"
          class="h-[29px] w-[179px] hidden md:flex"
          alt="Nativelink Logo"
        />
        <img
          src={mobileLogo}
          loading="lazy"
          class="w-16 md:hidden"
          alt="Nativelink Logo"
        />
      </a>

      <ul class="hidden md:flex w-2/4 text-white border-white/10 gap-6 rounded-2xl border bg-white/10 lg:backdrop-blur-xl h-12  justify-center items-center">
        {links.map((link) => (
          <NavLink
            key={link.name}
            pathName={url.pathName}
            href={link.href}
            activeClass="font-bold"
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
      <div class="justify-center flex flex-col items-center gap-2 text-[16px]">
        <div class="hidden md:flex flex-row gap-1">
          <span class="">get</span>
          <span class="text-[#9F6BFE]">connected.</span>
          <span class="">stay</span>
          <span class="text-[#9F6BFE]">updated.</span>
        </div>
        <div class="z-60 flex flex-row">
          <a href="https://nativelink.slack.com/join/shared_invite/zt-2i2mipfr5-lZAEeWYEy4Eru94b3IOcdg#/shared-invite/email">
            <Slack />
          </a>
          <a href="https://github.com/tracemachina/nativelink">
            <GitHub />
          </a>
        </div>
      </div>
      <div class="flex z-60  md:hidden w-[50px] flex justify-center items-center">
        <button
          onClick$={() => {
            navState.value = !navState.value;
          }}
          class={`hamburger flex justify-center items-center hamburger--slider ${navState.value ? "is-active" : ""}`}
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner" />
          </span>
        </button>
      </div>
      <nav
        class={`fixed top-0 h-full z-30 right-0 h-[100svh] w-[100svw] bg-black z-50 transition-transform duration-300 ease-in-out ${
          navState.value ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul class="text-white w-full h-full flex flex-col justify-center items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.name}
              pathName={url.pathName}
              href={link.href}
              activeClass="font-bold border rounded-full border-white/20 px-4 py-2"
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
});
