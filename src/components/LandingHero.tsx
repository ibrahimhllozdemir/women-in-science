"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function LandingHero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            {/* Logo - Top Right */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute top-3 right-6 md:top-5 md:right-10 z-50"
            >
                <img
                    src="/images/rotary-logo.svg"
                    alt="İzmir Fikir Sanat Rotary Kulübü"
                    className="h-32 md:h-40 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
            </motion.div>

            <div className="z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-white/60 uppercase tracking-[0.15em] mb-2 text-xs md:text-sm font-light"
                >
                    İzmir Fikir Sanat Rotary Kulübü Sunar
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-amber-400 uppercase tracking-[0.2em] mb-4 text-sm md:text-base font-semibold"
                >
                    Dijital Sergi
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-tight"
                >
                    Bilimde İz Bırakan <br />
                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">Kadınlar</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    İzmir Fikir Sanat Rotary Kulübü olarak, tarihin gölgesinden ışığa çıkan, keşifleriyle dünyayı değiştiren öncü zihinlerin hikayesine tanıklık etmenizi sağlıyoruz.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                >
                    <Link
                        href="#exhibition-areas"
                        className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium tracking-tighter text-white bg-transparent border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300"
                    >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                        <span className="relative flex items-center gap-2">
                            Sergiyi Gez
                            <ArrowDown className="w-4 h-4 animate-bounce" />
                        </span>
                    </Link>
                    <Link
                        href="/hakkinda"
                        className="inline-flex items-center justify-center px-8 py-3 font-bold uppercase tracking-widest text-white bg-purple-500/20 border border-purple-400/50 rounded-full hover:bg-purple-500/30 hover:border-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/20"
                    >
                        Hakkında
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase"
            >
                <span>Keşfetmek için Kaydır</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
}
