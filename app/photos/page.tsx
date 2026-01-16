import Link from "next/link";
import cat from "@/public/cat.png";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link href="/">
        <img src={cat.src} alt="cat" className="w-50 h-46 object-cover" />
      </Link>
    </div>
  );
}