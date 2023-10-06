import { groq } from "next-sanity";
import client from "./client";

export async function getProjects() {
  return client.fetch(groq`*[_type == "projects"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    
}`);
}
