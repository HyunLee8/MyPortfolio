import Link from "next/link";

export default function Principles() {
  return (
    <div className="min-h-screen p-8 bg-white">
      <Link href="/" className="fixed top-10 left-1/2 -translate-x-1/2 font-medium text-sm hover:underline underline-offset-4 transition-all z-50">
        ← back
      </Link>
      
      <div className="max-w-6xl mx-auto py-20">
        <div className="mb-20">
          <h1 className="text-6xl font-light text-gray-900 mb-4 tracking-wide">Principles</h1>
          <div className="w-32 h-0.5 bg-gray-900"></div>
        </div>
        
        <div className="grid grid-cols-3 gap-x-16 gap-y-20">

        <div className="group">
            <a 
              href="https://open.spotify.com/track/your-song-id-4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden border border-gray-200 shadow-lg mb-6"
            >
              <img 
                src="/ESSENTIALS4.jpeg" 
                alt="Album cover 4"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </a>
            
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">I Always Wanna Die (Sometimes)</h2>
              </div>
              <p className="text-lg text-gray-700 font-medium">The 1975</p>
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">A Brief Inquiry into Online Relationships • 2018</p>
                <div className="border-l-2 border-gray-200 pl-4 group-hover:border-gray-900 transition-colors duration-300">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    true.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <a 
              href="https://open.spotify.com/track/your-song-id-7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden border border-gray-200 shadow-lg mb-6"
            >
              <img 
                src="/ESSENTIALS7.jpeg" 
                alt="Album cover 7"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </a>
            
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Everlasting Love</h2>
              </div>
              <p className="text-lg text-gray-700 font-medium">LEEHEESANG</p>
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">HOWEVER • 2023</p>
                <div className="border-l-2 border-gray-200 pl-4 group-hover:border-gray-900 transition-colors duration-300">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {"I can't play this on the elec"}
                  </p>
                </div>
              </div>
            </div>
          </div>

        <div className="group">
            <a 
              href="https://open.spotify.com/track/your-song-id-6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden border border-gray-200 shadow-lg mb-6"
            >
              <img 
                src="/ESSENTIALS6.jpeg" 
                alt="Album cover 6"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </a>
            
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Stars burn out</h2>
              </div>
              <p className="text-lg text-gray-700 font-medium">Cykim</p>
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Stars Burn out • 2023</p>
                <div className="border-l-2 border-gray-200 pl-4 group-hover:border-gray-900 transition-colors duration-300">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    current no. 1
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <a 
              href="https://open.spotify.com/track/your-song-id-2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden border border-gray-200 shadow-lg mb-6"
            >
              <img 
                src="/ESSENTIALS2.png" 
                alt="Album cover 2"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </a>
            
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">About You</h2>
              </div>
              <p className="text-lg text-gray-700 font-medium">The 1975</p>
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Being Funny in a Foreign Language • 2017</p>
                <div className="border-l-2 border-gray-200 pl-4 group-hover:border-gray-900 transition-colors duration-300">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    best bridge in a song
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <a 
              href="https://open.spotify.com/track/your-song-id-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden border border-gray-200 shadow-lg mb-6"
            >
              <img 
                src="/ESSENTIALS1.jpg" 
                alt="Album cover 1"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </a>
            
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">여전히 아름다운지</h2>
              </div>
              <p className="text-lg text-gray-700 font-medium"><span className="text-red-500">TOY</span> | Yoo Hee Yeol</p>
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Fermata • 1999</p>
                <div className="border-l-2 border-gray-200 pl-4 group-hover:border-gray-900 transition-colors duration-300">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    <span className="text-gray-900 font-medium">crème de la crème</span> | All time no. 1
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <a 
              href="https://open.spotify.com/track/your-song-id-5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden border border-gray-200 shadow-lg mb-6"
            >
              <img 
                src="/ESSENTIALS5.jpeg" 
                alt="Album cover 5"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </a>
            
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Lily of the Valley</h2>
              </div>
              <p className="text-lg text-gray-700 font-medium">DANIEL</p>
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Melancholia • 2021</p>
                <div className="border-l-2 border-gray-200 pl-4 group-hover:border-gray-900 transition-colors duration-300">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    bare winter or green summer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <a 
              href="https://open.spotify.com/track/your-song-id-8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden border border-gray-200 shadow-lg mb-6"
            >
              <img 
                src="/ESSENTIALS8.webp" 
                alt="Album cover 8"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </a>
            
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Nothings Gonna Hurt You Baby</h2>
              </div>
              <p className="text-lg text-gray-700 font-medium">Cigarettes After Sex</p>
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">I. • 2012</p>
                <div className="border-l-2 border-gray-200 pl-4 group-hover:border-gray-900 transition-colors duration-300">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    THE BASS
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <a 
              href="https://open.spotify.com/track/your-song-id-9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden border border-gray-200 shadow-lg mb-6"
            >
              <img 
                src="/ESSENTIALS9.jpeg" 
                alt="Album cover 9"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </a>
            
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Love Shine</h2>
              </div>
              <p className="text-lg text-gray-700 font-medium">LEEHEESANG</p>
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">WHOEVER • 2021</p>
                <div className="border-l-2 border-gray-200 pl-4 group-hover:border-gray-900 transition-colors duration-300">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    I can play this on elec
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <a 
              href="https://open.spotify.com/track/your-song-id-3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden border border-gray-200 shadow-lg mb-6"
            >
              <img 
                src="/ESSENTIALS3.jpg" 
                alt="Album cover 3"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </a>
            
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">No. 1 Party Anthem</h2>
              </div>
              <p className="text-lg text-gray-700 font-medium">Arctic Monkeys</p>
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">AM • 2013</p>
                <div className="border-l-2 border-gray-200 pl-4 group-hover:border-gray-900 transition-colors duration-300">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    tempo and instrumental is wow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}