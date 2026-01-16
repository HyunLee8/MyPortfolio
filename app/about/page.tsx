import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="fixed top-10 font-bold">My Favorites</h1>
      <Link href="/" className="fixed bottom-10 font-bold">back</Link>
      <div className="grid grid-cols-3 gap-30 max-w-screen">
        <div className="flex flex-col justify-center">
          <h1 className="text-xl mb-3 font-bold">Songs</h1>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs">Yoo Hee Yeol</p>
              <p className="text-xl">여전히 아름다운지</p>
            </div>
            <div>
              <p className="text-xs">800 Cherries</p>
              <p className="text-xl">Through</p>
            </div>
            <div>
              <p className="text-xs">Artic Monkeys</p>
              <p className="text-xl">No.1 Party Anthem</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-xl mb-3 font-bold">Games</h1>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs">Champion III</p>
              <p className="text-xl">Rocket League</p>
            </div>
            <div>
              <p className="text-xs">Diamond I</p>
              <p className="text-xl">Rainbow Six Siege</p>
            </div>
            <div>
              <p className="text-xs">Completed</p>
              <p className="text-xl">Geometry Dash</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-xl mb-3 font-bold">Pieces</h1>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs">Sergei Rachmaninoff</p>
              <p className="text-xl">Piano Concerto No.3</p>
            </div>
            <div>
              <p className="text-xs">Alexander Scriabin</p>
              <p className="text-xl">Fantasie bm op.28</p>
            </div>
            <div>
              <p className="text-xs">Frederic Chopin</p>
              <p className="text-xl">Ballade No.4</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-xl mb-3 font-bold">Movies</h1>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs">Dennis Villnueve</p>
              <p className="text-xl">Blade Runner 2049</p>
            </div>
            <div>
              <p className="text-xs">Damien Chazelle</p>
              <p className="text-xl">Whiplash</p>
            </div>
            <div>
              <p className="text-xs">Andrew Stanton</p>
              <p className="text-xl">WALL-E</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-xl mb-3 font-bold">TV shows</h1>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs">Sam Esmail</p>
              <p className="text-xl">Mr. Robot</p>
            </div>
            <div>
              <p className="text-xs">Hideaki Anno</p>
              <p className="text-xl">Neon Genisis Evangelion</p>
            </div>
            <div>
              <p className="text-xs">Hajime Isayama</p>
              <p className="text-xl">Attack on Titan</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-xl mb-3 font-bold">Dreams</h1>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs">France Alps</p>
              <p className="text-xl">Summit Mont Blanc</p>
            </div>
            <div>
              <p className="text-xs">Cook anything</p>
              <p className="text-xl">Culinarian</p>
            </div>
            <div>
              <p className="text-xs">Just a dream</p>
              <p className="text-xl">Play Concerto No.3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}