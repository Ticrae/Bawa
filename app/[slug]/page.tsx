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
            className="flex items-center bg-gray-900 text-white py-3 px-4 rounded-2xl cursor-pointer justify-center w-32 mb-7"
            href="/"
          >
            <ArrowLeft className="ml-2 h-5 w-5" />
            Go Back
          </a>
        </div>
        <section>
          <div className="mb-8">
            <Image
              src={builder.image(post.mainImage).width(300).height(300).url()}
              alt={post?.mainImage?.alt}
              width={300}
              height={300}
              className={`rounded-2xl transition-transform duration-300 w-125`}
            />
          </div>
          <div>
            <h1>{post.title}</h1>
            <p>{post?.body ? <PortableText value={post.body} /> : null}</p>
          </div>
        </section>
      </article>
    </>
  );
}
