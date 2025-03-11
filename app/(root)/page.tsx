import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import { title } from "process";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
   const posts = await client.fetch(STARTUPS_QUERY);
   console.log(JSON.stringify(posts, null, 2));
  // const posts = [
  //   {
  //     _CreatedAt: new Date(),
  //     Views: 100,
  //     author: {_id:1, name: "John Doe"},
  //     _id: "1",
  //     description: "This is a description",
  //     image: "/godzillaPlaceholder.jpeg",
  //     categroy: "Tech",
  //     title: "Startup Idea",
  //     votes: 100,
  //   },
  // ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch, Vote, and <br /> launch your startup idea
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit your Ideas, Vote on Pitches, Get Noticed by the Community
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => <StartupCard key={post?._id} post={post} />)
          ) : (
            <p className="no-results">No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
