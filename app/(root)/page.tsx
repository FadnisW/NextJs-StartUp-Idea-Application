import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import { title } from "process";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _CreatedAt: new Date(),
      Views: 100,
      author: {_id:1, name: "John Doe"},
      _id: "1",
      description: "This is a description",
      image: "https://via.placeholder.com/150",
      categroy: "Tech",
      title: "Startup Idea",
      votes: 100,
    },
  ];
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
            posts.map((post: StartupCardType, number) => <StartupCard key={post?._id} post={post} />)
          ) : (
            <p className="no-results">No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
// <li key={post._id} className="card">
//   <img
//     src={post.image}
//     alt={post.title}
//     className="card_image"
//   />
//   <div className="card_content">
//     <h2 className="card_title">{post.title}</h2>
//     <p className="card_description">{post.description}</p>
//     <div className="card_meta">
//       <span>{post.author}</span>
//       <span>{post.category}</span>
//       <span>{post._CreatedAt}</span>
//     </div>
//     <div className="card_actions">
//       <button className="card_btn">Vote</button>
//       <span>{post.votes}</span>
//       <button className="card_btn">View</button>
//       <span>{post.Views}</span>
//     </div>
//   </div>
// </li>
