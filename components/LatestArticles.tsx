"use client";

import type { SanityDocument } from "@sanity/client";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { useState } from "react";

export default function LatestArticles({
  posts = [],
}: {
  posts: SanityDocument[];
}) {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 3;
  const [contentCount, setContentCount] = useState(initialCount);

  const increaseContent = () => {
    setContentCount((prev) => {
      const next = Math.min(prev + 3, posts?.length ?? prev + 3);
      return next;
    });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="articles">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-5 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600">
              Fresh insights and stories from our community
            </p>
          </div>
          <div>
            {posts && posts.length > initialCount && (
              <button
                onClick={() => {
                  if (contentCount >= (posts?.length ?? 0)) {
                    setContentCount(initialCount);
                  } else {
                    increaseContent();
                  }
                }}
                className="border py-3 px-4 rounded-2xl hover:cursor-pointer hover:bg-[#75649A] hover:text-white"
              >
                {contentCount >= (posts?.length ?? 0) ? "Less" : "More"}
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(0, contentCount).map((post) => (
            <div key={`${post._id}-${post.slug.current}`}>
              <Link href={post.slug.current}>
                <BlogCard post={post} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
