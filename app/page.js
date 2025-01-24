import getAllBlogs from "@/lib/getAllBlogs";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const blogs = await getAllBlogs()
  // console.log(blogs)
  return (
    <main className="max-w-6xl mx-auto">
      <div>
        <h2 className="text-3xl">All Blogs</h2>
        <ul className="mt-6">
          {blogs.map(blog => (
            <li key={blog.id}>
              <Link className="hover:text-blue-400" href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
