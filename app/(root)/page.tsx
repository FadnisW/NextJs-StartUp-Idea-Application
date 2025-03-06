import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Startup Idea</h1>
      <p>
        Welcome to the Startup Idea app! Here you can find a list of startup
        ideas that you can use to start your own business.
      </p>
      <Image
        src="/placeholder.png"
        alt="Startup Idea"
        width={500}
        height={300}
      />
    </>
  );
}
