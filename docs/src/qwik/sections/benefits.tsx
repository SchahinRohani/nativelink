import { component$ } from "@builder.io/qwik";

import { Label } from "../components/label";
import { VideoCard } from "../components/videoCard";

const benefits = [
  {
    link: "/videos/video_3.mp4",
    headline: "Made With Love In Rust",
    description:
      "Reduce runtime errors, guarantee memory-safety without requiring garbage collection, & eliminate race conditions at any scale.",
  },
  {
    link: "/videos/video_4.mp4",
    headline: "Effortless Implementation",
    description:
      "Kickstart NativeLink in 10 minutes with an open-source build cache and remote executor tailored for large code bases",
  },
  {
    link: "/videos/video_5.mp4",
    headline: "Universal Language & Platform Compatibility",
    description:
      "Extensive compatibility and support with popular languages (C++, Rust, Python & more), build tools (Bazel, Buck2, & Reclient) and cloud providers (AWS/GCP)",
  },
];

export const Benefits = component$(() => {
  return (
    <div class="flex w-full flex-col items-center justify-center gap-10 py-20">
      <Label text="the nativelink difference" />
      <div class="flex flex-col gap-10 md:flex-row">
        {benefits.map((benefit, index) => (
          <VideoCard
            key={index}
            link={benefit.link}
            headline={benefit.headline}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
});
