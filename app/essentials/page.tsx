import Link from "next/link";

export default function Essentials() {
  return (
    <div className="min-h-screen p-8 bg-white">
      <Link href="/" className="fixed top-10 left-1/2 -translate-x-1/2 font-medium text-sm hover:underline underline-offset-4 transition-all z-50">
        ← back
      </Link>
      
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl text-gray-900 mb-4 tracking-tight">The Big Three</h1>
        <div className="space-y-2">
          <div className="flex gap-8 items-center group hover:bg-gray-50 p-6 -mx-6 rounded-xl transition-colors">
            <div className="w-48 h-48 overflow-hidden border border-gray-200 shadow-lg flex-shrink-0">
              <img 
                src="/ESSENTIALS1.jpg" 
                alt="Album cover 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex flex-col space-y-3">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">여전히 아름다운지</h2>
              <p className="text-xl text-gray-700 font-medium">TOY | Yoo Hee Yeol</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Fermata • 1999</p>
              <p className="text-gray-600 leading-relaxed mt-2 max-w-xl">
                Yes. Best song since I was out of the womb 
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-center group hover:bg-gray-50 p-6 -mx-6 rounded-xl transition-colors">
            <div className="w-48 h-48 overflow-hidden border border-gray-200 shadow-lg flex-shrink-0">
              <img 
                src="/ESSENTIALS2.png" 
                alt="Album cover 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex flex-col space-y-3">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">About You</h2>
              <p className="text-xl text-gray-700 font-medium">The 1975</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Being Funny in a Foreign Language • 2017</p>
              <p className="text-gray-600 leading-relaxed mt-2 max-w-xl">
                I forget about this song every couple years
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-center group hover:bg-gray-50 p-6 -mx-6 rounded-xl transition-colors">
            <div className="w-48 h-48 overflow-hidden border border-gray-200 shadow-lg flex-shrink-0">
              <img 
                src="/ESSENTIALS3.jpg" 
                alt="Album cover 3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex flex-col space-y-3">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">No. 1 Party Anthem</h2>
              <p className="text-xl text-gray-700 font-medium">Artic Monkeys</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">AM • 2013</p>
              <p className="text-gray-600 leading-relaxed mt-2 max-w-xl">
                Genuinely has one of the best tempos and can be listened to in any mood
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}