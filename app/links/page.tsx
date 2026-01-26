import Link from "next/link";

export default function Links() {
  return (
    <div className="flex items-center justify-center h-screen justify-evenly text-xl">
      <Link href="/" className="fixed top-10 left-1/2 -translate-x-1/2 font-medium text-sm hover:underline underline-offset-4 transition-all z-50">
        ← back
      </Link>
      <Link href="https://github.com/HyunLee8" className="hover:underline">Github</Link>
      <Link href="https://www.linkedin.com/in/isaac-lee537" className="hover:underline">LinkedIn</Link>
      <Link href="https://open.spotify.com/user/249lw9zwlh70b2wak8phnb9k9" className="hover:underline">Spotify</Link>
    </div>
  );
}