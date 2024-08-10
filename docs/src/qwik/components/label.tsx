import { component$ } from "@builder.io/qwik";

interface LabelProps {
  text: string;
}

export const Label = component$<LabelProps>(({ text }) => {
  return (
    <div class="flex h-[43px] items-center justify-center rounded-3xl bg-[#171721] px-8">
      <div class="bg-gradient-to-r from-white to-[#707098] bg-clip-text text-transparent">
        {text}
      </div>
    </div>
  );
});
