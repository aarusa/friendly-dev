import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Me" },
    { name: "description", content: "Arusha Shahi Portfolio" },
  ];
}

const ContactPage = () => {
    return ( 
        <>
            <h2 className="text-3xl font-bold mb-8 text-white text-center">📬 Contact me</h2>
        </>
     );
}
 
export default ContactPage;