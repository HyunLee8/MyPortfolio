import Link from "next/link";
import plants from "../public/plants.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative grid grid-cols-5 w-screen items-center px-8">
        <Link href="about" className="text-center">About Me</Link>
        <Link href="experience" className="text-center">Experience</Link>
        <Link href="https://github.com/HyunLee8" className="font-bold text-center">이현호</Link>
        <Link href="projects" className="text-center">Projects</Link>
        <Link href="socials" className="text-center">Socials</Link>
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="relative w-45 h-45">
            <img 
              src={plants.src} 
              alt="plants" 
              className="w-full h-full object-cover"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 30% 30%, 30% 70%, 70% 70%, 70% 30%, 30% 30%)"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}