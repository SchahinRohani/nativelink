import { component$ } from "@builder.io/qwik";

interface CardProps {
  link: string;
  headline: string;
  description: string;
}

export const VideoCard = component$<CardProps>(
  ({ link, headline, description }) => {
    return (
      <div class="max-w-sm overflow-hidden rounded-[30px] border border-solid border-[#12121c] text-white shadow-lg">
        <div class="relative h-48 w-full">
          <video class="h-full w-full object-cover" autoplay loop muted>
            <source src={link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="px-6 py-4">
          <h2 class="mb-2 flex h-24 items-center justify-start bg-gradient-to-r from-white to-[#707098] bg-clip-text pr-16 text-xl font-bold text-transparent">
            {headline}
          </h2>
          <p class="text-base text-gray-400">{description}</p>
        </div>
      </div>
    );
  },
);
