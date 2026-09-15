import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Me" },
    { name: "description", content: "Arusha Shahi Portfolio" },
  ];
}

const AboutPage = () => {
    return ( 
        <>
            <h2 className="text-3xl font-bold text-white mb-2">
                Hey, I'm Arusha 👋
            </h2>
        </>
     );
}
 
export default AboutPage;