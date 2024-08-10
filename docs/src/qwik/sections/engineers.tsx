import { component$ } from "@builder.io/qwik";

import { Label } from "../components/label";

import {
  Toyota,
  Cruise,
  MongoDB,
  Apple,
  Roblox,
  Google,
  Tesla,
} from "../media/icons/engineers";

const companies = [
  {
    img: <Toyota />,
  },
  {
    img: <Cruise />,
  },
  {
    img: <MongoDB />,
  },
  {
    img: <Apple />,
  },
  {
    img: <Roblox />,
  },
  {
    img: <Google />,
  },
  {
    img: <Tesla height={25} />,
  },
];

export const Engineers = component$(() => {
  return (
    <div class="flex h-56 w-full flex-col items-center justify-center gap-10">
      <Label text="built by leading engineers from" />
      <div class="flex h-16 w-10/12 items-center justify-evenly gap-6">
        {companies.map((company) => company.img)}
      </div>
    </div>
  );
});
