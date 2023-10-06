import { getProjects } from "@/sanity/utils/getAllProjects";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      My projects:
      {projects.map((project) => (
        <div key={project._id}>
          <h2>{project.title}</h2>
        </div>
      ))}
    </>
  );
}
