import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 justify-evenly">
      <h1 className="fixed top-10 font-bold">Socials</h1>
      <Link href="/" className="fixed bottom-10 font-bold">back</Link>
      <div className="flex flex-col justify-center">
        <p className="text-xs font-bold">Hyunlee8</p>
        <Link href="https://github.com/HyunLee8" className="text-3xl mb-3 font-bold">Github</Link>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xs font-bold">Igack</p>
        <Link href="https://open.spotify.com/user/249lw9zwlh70b2wak8phnb9k9?si=0e2aab2143874495" className="text-3xl mb-3 font-bold">Spotify</Link>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xs font-bold">Igack_</p>
        <Link href="" className="text-3xl mb-3 font-bold">Discord</Link>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xs font-bold">Nothing to see here</p>
        <Link href="https://www.linkedin.com/in/hyun-lee-a2934b396/" className="text-3xl mb-3 font-bold">LinkedIn</Link>
      </div>
    </div>
  );
}