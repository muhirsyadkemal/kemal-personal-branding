import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kemal — Business Strategy & Leadership",
    short_name: "Kemal",
    description:
      "The personal portfolio of Muhammad Irsyad Kemal Pasha Ramadhan, focused on business strategy, partnership, and leadership.",

    start_url: "/",
    scope: "/",
    display: "standalone",

    background_color: "#f4f0e8",
    theme_color: "#0b1626",

   icons: [
  {
    src: "/icon.png",
    sizes: "1024x1024",
    type: "image/png",
  },
],
  };
}