import { getAllPosts } from "@/lib/api";
import CoverImage from "../cover-image";
import Link from "next/link";
import DateComponent from "../date";

function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <div className="flex flex-col   border-b-2 border-gray-300  p-4 m-4 overflow-auto">
      <div className="mb-2">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className="text-3xl font-bold mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg ">
        <DateComponent dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 ">{excerpt}</p>
    </div>
  );
}

export default async function PostPage() {
  const allPosts = await getAllPosts(true);
  console.log(allPosts)
  return (
    <div>
      <p className="text-3xl text-center font-oswald pt-28">ALL POST</p>
      <div className="pt-4 container flex flex-wrap justify-center items-center mx-auto px-5">
        {allPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
}