import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arusha Portfolio" },
    { name: "description", content: "Arusha Shahi Portfolio" },
  ];
}

export default function Home() {
  return <>Homepage</>;
}
