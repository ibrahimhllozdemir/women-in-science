import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Bilimde İz Bırakan Kadınlar | Dijital Sergi',
  description: 'Bilim tarihini şekillendiren öncü kadınların interaktif dijital sergisi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-black text-white font-sans antialiased overflow-x-hidden selection:bg-amber-500 selection:text-black" suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <footer className="w-full py-8 bg-black border-t border-white/10 flex flex-col items-center justify-center gap-4 text-center z-10 relative">
            <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
              <img
                src="https://fikirsanatrotary.com/wp-content/uploads/2025/11/logow-300x300.png"
                alt="İzmir Fikir Sanat Rotary Kulübü Logo"
                className="w-24 h-24 object-contain bg-white/5 rounded-xl p-2"
              />
              <div className="text-left">
                <p className="text-base font-bold text-white">İzmir Fikir Sanat Rotary Kulübü</p>
                <p className="text-sm text-gray-400">Katkılarıyla sunulmuştur</p>
              </div>
            </div>
            <p className="text-[10px] text-gray-600 mt-2">© 2026 Bilimde İz Bırakan Kadınlar Dijital Sergisi</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
