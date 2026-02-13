import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import ImageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

const builder = ImageUrlBuilder(client);

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug },
  });

  return (
    <>
      <Navbar />
      <article className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div>
          <a
            className="flex items-center bg-[#5E4C7E] hover:bg-[#75649A] text-white py-3 px-4 rounded-2xl cursor-pointer justify-center w-32 mb-7"
            href="/"
          >
            <ArrowLeft className="ml-2 h-5 w-5" />
            Go Back
          </a>
        </div>
        <section className="container gap-4">
          <div className="mb-5 font-extrabold text-center">
            <h1>{post.title}</h1>
          </div>
          <div className="mb-8 text-center">
            <span>{post.author.name}</span> •
            <span className="ml-2">
              {new Date(post.publishedAt).toISOString().split("T")[0]}
            </span>
          </div>
          <div className="mb-16 transition-transform duration-300 relative w-full md:h-[600] h-[300]">
            <Image
              src={builder.image(post.mainImage).quality(90).width(800).url()}
              alt={post?.mainImage?.alt}
              fill
              className="rounded-2xl"
            />
          </div>
          {post?.body ? <PortableText value={post.body} /> : null}
        </section>
      </article>
    </>
  );
}
