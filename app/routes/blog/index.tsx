import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog" },
    { name: "description", content: "Arusha Shahi Portfolio" },
  ];
}

const BlogPage = () => {
    return ( 
        <>
            <h2 className="text-3xl font-bold text-white mb-8">📝 Blog</h2>
        </>
     );
}
 
export default BlogPage;