import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import ImageUrlBuilder from "@sanity/image-url";

const builder = ImageUrlBuilder(client);

export default function BlogCard({ post }: { post: SanityDocument }) {
  return (
    <article>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src={builder.image(post.mainImage).width(800).quality(90).url()}
            alt={post?.mainImage?.alt || post.title}
            width={300}
            height={300}
            className={`w-full object-center hover:scale-105 transition-transform duration-300 h-80`}
          />
          {/* <Badge className="absolute top-4 left-4 bg-white text-gray-900 hover:bg-white">
            {category}
          </Badge> */}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3
            className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors md:text-3xl text-xl
          `}
          >
            {post.title}
          </h3>

          {/* {post?.body ? <PortableText value={post.body} /> : null} */}

          {/* Meta */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.publishedAt).toISOString().split("T")[0]}
                </span>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </article>
  );
}
