import FeaturedProjects from "~/components/FeaturedProjects";
import type { Route } from "./+types/index";
import type { Project } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arusha Portfolio" },
    { name: "description", content: "Arusha Shahi Portfolio" },
  ];
}

export async function loader({ request }:Route.LoaderArgs): Promise<{projects:Project[]}> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();

  return {projects: data};
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {

  const { projects } = loaderData;

  return(
    <>
      <FeaturedProjects projects={projects} count={2} />
    </>
  );
}

export default HomePage;