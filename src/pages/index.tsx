import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

function NeonButton({ label, link }: { label: string, link: string }) {
  return(
    <div className="container">
      <a href={link}>
      <span></span>
      <span></span>
      {label}
      </a>
    </div>
  );
}
const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="h-screen w-screen flex flex-col items-center my-8">
      <img 
        src="/pro.jpeg"
        className="w-64 h-64 rounded-full"
      />
      <h1 className="pt-2 text-4xl font-bold">Afeef</h1>
      <h2 className="text-xl">Fullstack developer</h2>
      <h4 className="text-xl">I like software engineering, philosophy, science, and MMA </h4>
      <div className="flex">
        <NeonButton label="Resume" link="resume"/>
        <NeonButton label="Projects" link="projects"/>
        <NeonButton label="Blog" link="#"/>
      </div>
    </div>
  );
};

export default Home;
