import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 justify-evenly">
      <h1 className="fixed top-10 font-bold">Experience</h1>
      <Link href="/" className="fixed bottom-10 font-bold">back</Link>
      <div className="flex flex-col justify-center">
        <p className="text-sm font-bold">ML@UVA</p>
        <h1 className="text-xl font-bold">Client Project Developer</h1>
        <p className="text-sm font-bold mb-3">Nov 2025 - Current</p>
        <div className="flex flex-col gap-4 max-w-50">
          <div>
            <p className="">Deploy real time gym occupancy tracking system</p>
          </div>
          <div>
            <p className="">Configure Raspberry Pi edge computing infrastructure</p>
          </div>
          <div>
            <p className="">Maintain model accuracy through iterative optimization</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-sm font-bold">Prime Academy Nova</p>
        <h1 className="text-xl font-bold">UX/UI Internship</h1>
        <p className="text-sm font-bold mb-3">Nov 2023 - Feb 2024</p>
        <div className="flex flex-col gap-4 max-w-50">
          <div>
            <p className="">Ensured technical feasibility of design solutions</p>
          </div>
          <div>
            <p className="">Created interactive wireframes and prototypes</p>
          </div>
          <div>
            <p className="">Conducted usability testing and iterated designs</p>
          </div>
        </div>
      </div>
    </div>
  );
}