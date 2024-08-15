import { type JSXOutput, component$ } from "@builder.io/qwik";

interface CardProps {
  icon: JSXOutput;
  headline: string;
  text: string;
}

export const BorderlessCard = component$<CardProps>(
  ({ icon, headline, text }) => {
    return (
      <div class="flex h-auto w-5/6 flex-col items-start justify-start md:w-[277px] md:gap-0">
        <div>{icon}</div>
        <div class="bg-gradient-to-r from-white to-[#707098] bg-clip-text py-4 pr-6 text-[25px] text-transparent md:h-[120px] md:px-0 md:py-6">
          {headline}
        </div>
        <span class="w-full text-[#8280A6] md:w-[273px]">{text}</span>
      </div>
    );
  },
);
