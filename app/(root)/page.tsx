import SearchForm from "@/components/SearchForm";

export default async function Home({ searchParams }: { 
  searchParams: Promise<{ query?: string }>
 }) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch, Vote, and <br /> launch your startup idea
        </h1>
        <p className="sub-heading !max-w-3xl">
          {" "}
          Submit your Ideas, Vote on Pitches, Get Noticed by the Community
        </p>
        <SearchForm query = {query} />
      </section>
    </>
  );
}
