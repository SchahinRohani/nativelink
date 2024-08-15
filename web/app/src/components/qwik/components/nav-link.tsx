import { Slot, component$ } from "@builder.io/qwik";

type NavLinkProps = {
  pathName: string;
  activeClass?: string;
  href: string;
  class?: string;
};

export const NavLink = component$(
  ({ pathName, activeClass, ...props }: NavLinkProps) => {
    const toPathname = props.href ?? "";
    const locationPathname = pathName;

    const startSlashPosition =
      toPathname !== "/" && toPathname.startsWith("/")
        ? toPathname.length - 1
        : toPathname.length;
    const endSlashPosition =
      toPathname !== "/" && toPathname.endsWith("/")
        ? toPathname.length - 1
        : toPathname.length;
    const isActive =
      locationPathname === toPathname ||
      (locationPathname.endsWith(toPathname) &&
        (locationPathname.charAt(endSlashPosition) === "/" ||
          locationPathname.charAt(startSlashPosition) === "/"));

    return (
      <li class="flex flex-col justify-center items-center gap-10">
        <a
          {...props}
          class={`${props.class || ""} ${isActive ? activeClass : ""} group transition duration-300`}
        >
          <Slot />
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600" />
        </a>
      </li>
    );
  },
);
