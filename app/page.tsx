import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestArticles from "@/components/LatestArticles";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/NewsLetter";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  return (
    <>
      <Navbar />
      <Hero />
      <LatestArticles posts={posts} />
      <Newsletter />
      <Footer />
    </>
  );
}
