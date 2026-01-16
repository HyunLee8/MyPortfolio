import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex w-screen justify-evenly">
        <Link href="about">About Me</Link>
        <Link href="experience">Experience</Link>
        <Link href="https://github.com/HyunLee8" className="font-bold">이현호</Link>
        <Link href="projects">Projects</Link>
        <Link href="socials">Socials</Link>
      </div>
    </div>
  );
}
