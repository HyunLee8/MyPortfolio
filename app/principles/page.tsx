import Link from "next/link";

const songs = [
  {
    title: "I Always Wanna Die (Sometimes)",
    artist: "The 1975",
    album: "A Brief Inquiry into Online Relationships",
    year: "2018",
    image: "/ESSENTIALS4.jpeg",
    note: "true.",
    url: "https://open.spotify.com/playlist/0RzkIyS7OHaEBcpDYZ8Wak"
  },
  {
    title: "Everlasting Love",
    artist: "LEEHEESANG",
    album: "HOWEVER",
    year: "2023",
    image: "/ESSENTIALS7.jpeg",
    note: "Tie w/ No.1 Party Anthem",
    url: "https://open.spotify.com/playlist/0RzkIyS7OHaEBcpDYZ8Wak"
  },
  {
    title: "Stars burn out",
    artist: "Cykim",
    album: "Stars Burn out",
    year: "2023",
    image: "/ESSENTIALS6.jpeg",
    note: "Current no. 1",
    url: "https://open.spotify.com/playlist/0RzkIyS7OHaEBcpDYZ8Wak6"
  },
  {
    title: "About You",
    artist: "The 1975",
    album: "Being Funny in a Foreign Language",
    year: "2017",
    image: "/ESSENTIALS2.png",
    note: "The best bridge in a song",
    url: "https://open.spotify.com/playlist/0RzkIyS7OHaEBcpDYZ8Wak"
  },
  {
    title: "여전히 아름다운지",
    artist: <><span className="text-red-500">TOY</span> | Yoo Hee Yeol</>,
    album: "Fermata",
    year: "1999",
    image: "/ESSENTIALS1.jpg",
    note: <><span className="text-gray-900 font-medium">crème de la crème</span> | All time no. 1</>,
    url: "https://open.spotify.com/playlist/0RzkIyS7OHaEBcpDYZ8Wak"
  },
  {
    title: "Lily of the Valley",
    artist: "DANIEL",
    album: "Melancholia",
    year: "2021",
    image: "/ESSENTIALS5.jpeg",
    note: "Mid summers",
    url: "https://open.spotify.com/playlist/0RzkIyS7OHaEBcpDYZ8Wak"
  }
];

const cinematography = [
  {
    title: "Neon Genesis Evangelion",
    director: "Hideaki Anno",
    year: "1997",
    image: "/THEMES5.jpg",
    note: "I hate shinji",
    url: "https://en.wikipedia.org/wiki/Neon_Genesis_Evangelion"
  },
  {
    title: "Vinland Saga",
    director: "Makoto Yukimura",
    year: "2005",
    image: "/THEMES7.jpg",
    note: "Realism and Dynamism",
    url: "https://en.wikipedia.org/wiki/Vinland_Saga_(manga)"
  },
  {
    title: "The Climber",
    director: "Shin-ichi Sakamoto,",
    year: "2007",
    image: "/THEMES6.jpg",
    note: "Current read -- Pacing is mediocre but insane world building",
    url: "https://en.wikipedia.org/wiki/The_Climber_(manga)"
  },
];

export default function Principles() {
  return (
    <div className="min-h-screen p-4 sm:p-8 bg-white">
      <Link href="/" className="fixed top-4 sm:top-10 left-1/2 -translate-x-1/2 font-medium text-sm hover:underline underline-offset-4 transition-all z-50">
        ← back
      </Link>
      
      <div className="max-w-6xl mx-auto py-16 sm:py-20">
        <div className="mb-20 sm:mb-32">
          <div className="mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 tracking-wide">Auditory Damage</h2>
            <div className="w-24 h-0.5 bg-gray-900"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-x-16 sm:gap-y-20">
            {songs.map((song, index) => (
              <div key={index} className="group">
                <a 
                  href={song.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block overflow-hidden border border-gray-200 shadow-lg mb-6"
                >
                  <img 
                    src={song.image} 
                    alt={`Album cover for ${song.title}`}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </a>
                
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">{song.title}</h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 font-medium">{song.artist}</p>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">{song.album} • {song.year}</p>
                    <div className="border-l-2 border-gray-200 pl-4 group-hover:border-gray-900 transition-colors duration-300">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {song.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 tracking-wide">Thematics</h2>
            <div className="w-24 h-0.5 bg-gray-900"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-x-16 sm:gap-y-20">
            {cinematography.map((film, index) => (
              <div key={index} className="group">
              <a 
                href={film.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block overflow-hidden border border-gray-200 shadow-lg mb-6"
              >
                <img 
                  src={film.image} 
                  alt={`Film still from ${film.title}`}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </a>
              
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">{film.title}</h2>
                </div>
                <p className="text-base sm:text-lg text-gray-700 font-medium">{film.director}</p>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">{film.year}</p>
                  <div className="border-l-2 border-gray-200 pl-4 group-hover:border-gray-900 transition-colors duration-300">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {film.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}