"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scientist } from "../data/scientists";
import { ExhibitionField } from "../data/fields";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ScientistShowcaseProps {
    field: ExhibitionField;
    scientists: Scientist[];
}

export default function ScientistShowcase({ field, scientists }: ScientistShowcaseProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: containerRef });

    return (
        <div className="relative h-screen bg-black overflow-hidden flex flex-col">
            {/* Header / Navigation */}
            <header className="absolute top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                <Link href="/" className="text-white/70 hover:text-white flex items-center gap-1 md:gap-2 transition-colors">
                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="uppercase tracking-wider md:tracking-widest text-[10px] md:text-xs font-bold">Geri Dön</span>
                </Link>
                <h2 className={`text-sm md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${field.color} truncate max-w-[120px] md:max-w-none`}>
                    {field.title}
                </h2>
            </header>

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 h-1 bg-white/10 w-full z-50">
                <motion.div
                    style={{ scaleX: scrollXProgress }}
                    className={`h-full bg-gradient-to-r ${field.color} origin-left`}
                />
            </div>

            {/* Horizontal Scroll Container */}
            <div
                ref={containerRef}
                className="flex overflow-x-auto snap-x snap-mandatory h-full w-full scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
            >
                {/* Intro Slide for the Field */}
                <div className="min-w-full h-full snap-center flex items-center justify-center relative px-4 py-20 md:p-20 border-r border-white/5">
                    <div className="max-w-4xl w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <h1 className="hidden md:block text-6xl md:text-9xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-800 mb-8 opacity-20 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0 pointer-events-none">
                                {field.title}
                            </h1>

                            <div className="relative z-10">
                                <h2 className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white px-4`}>
                                    {field.title}
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
                                    {field.description}
                                </p>

                                <div className="mt-8 md:mt-12 flex justify-center animate-bounce">
                                    <div className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest text-amber-500">
                                        Kaydır <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scientist Slides */}
                {scientists.map((scientist, index) => (
                    <div key={scientist.id} className="min-w-full h-full snap-center flex items-center justify-center relative border-r border-white/5 bg-gradient-to-br from-black via-zinc-950 to-black">

                        {/* Background Number */}
                        <span className="absolute top-20 right-20 text-[20rem] font-black text-white/5 select-none pointer-events-none leading-none">
                            0{index + 1}
                        </span>

                        {/* Background Image for Scientist */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={scientist.imageUrl}
                                alt={scientist.name}
                                className="w-full h-full object-cover opacity-20 filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl h-full px-4 py-20 md:p-8 lg:p-12 gap-6 md:gap-8 lg:gap-12 items-center relative z-10">

                            {/* Left Column: Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-20%" }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4 md:space-y-6 lg:space-y-8 relative z-10"
                            >
                                <div className="inline-block px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-white/20 text-[10px] md:text-xs tracking-wider md:tracking-widest uppercase text-white/60 mb-2">
                                    {scientist.years}
                                </div>

                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight md:leading-none">
                                    {scientist.name}
                                </h2>

                                <div className={`h-0.5 md:h-1 w-16 md:w-24 bg-gradient-to-r ${field.color}`} />

                                <h3 className="text-lg sm:text-xl md:text-2xl text-amber-400 font-medium">
                                    {scientist.contribution}
                                </h3>

                                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-light">
                                    {scientist.biography}
                                </p>

                                <div className="p-4 md:p-6 border-l-2 border-amber-500/50 bg-white/5 rounded-r-lg">
                                    <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider md:tracking-widest mb-2 font-bold">Neden Önemli?</p>
                                    <p className="text-sm md:text-base text-gray-200">{scientist.impact}</p>
                                </div>
                            </motion.div>

                            {/* Right Column: Quote / Visual */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ margin: "-20%" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex flex-col justify-center items-center text-center relative"
                            >
                                {scientist.quote && (
                                    <blockquote className="relative p-6 md:p-8 lg:p-12">
                                        <span className="absolute top-0 left-0 text-4xl md:text-6xl text-amber-500 opacity-30 font-serif">"</span>
                                        <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-serif italic text-white/90 leading-relaxed md:leading-normal">
                                            {scientist.quote}
                                        </p>
                                        <span className="absolute bottom-0 right-0 text-4xl md:text-6xl text-amber-500 opacity-30 font-serif">"</span>
                                    </blockquote>
                                )}

                                {/* Decorative Elements */}
                                <div className={`absolute -z-10 w-96 h-96 rounded-full blur-[100px] opacity-20 bg-gradient-to-r ${field.color}`} />
                            </motion.div>
                        </div>
                    </div>
                ))}

                {/* End of Section Slide */}
                <div className="min-w-full h-full snap-center flex items-center justify-center bg-black">
                    <div className="text-center space-y-6">
                        <h3 className="text-3xl font-serif text-white">Bu bölümü tamamladınız</h3>
                        <Link href="/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
                            Diğer Bölümleri Keşfet
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
