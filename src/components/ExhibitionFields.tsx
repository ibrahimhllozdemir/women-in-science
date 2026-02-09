"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EXHIBITION_FIELDS } from "../data/fields";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ExhibitionFields() {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <section
            id="exhibition-areas"
            className="min-h-screen md:h-[85vh] w-full bg-neutral-950 flex flex-col md:flex-row overflow-hidden py-8 md:py-0"
        >
            {EXHIBITION_FIELDS.map((field, index) => (
                <Panel
                    key={field.id}
                    field={field}
                    index={index}
                    activeId={activeId}
                    setActiveId={setActiveId}
                />
            ))}
        </section>
    );
}

function Panel({ field, index, activeId, setActiveId }: { field: any, index: number, activeId: string | null, setActiveId: (id: string | null) => void }) {
    const isActive = activeId === field.id;

    // Desktop: hover expands to 50%, others shrink
    // Mobile: all panels equal height
    const flexValue = isActive ? 4 : 1;

    return (
        <motion.div
            layout
            onMouseEnter={() => setActiveId(field.id)}
            onMouseLeave={() => setActiveId(null)}
            onClick={() => setActiveId(isActive ? null : field.id)}
            className="relative w-full md:w-auto h-64 md:h-full border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 md:last:border-r-0 overflow-hidden bg-neutral-900 cursor-pointer group"
            style={{ flex: flexValue }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
            <Link href={`/${field.id}`} className="block h-full w-full relative">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={field.imageUrl}
                        alt={field.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-110 grayscale-0' : 'scale-100 grayscale'}`}
                    />
                    <div className={`absolute inset-0 bg-neutral-950/40 transition-opacity duration-300 ${isActive ? 'opacity-20' : 'opacity-60'}`} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${field.color} mix-blend-multiply transition-opacity duration-300 ${isActive ? 'opacity-80' : 'opacity-40'}`} />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">

                    {/* Collapsed State: Horizontal on Mobile, Vertical on Desktop */}
                    {!isActive && !activeId && (
                        <>
                            {/* Mobile: Horizontal Layout */}
                            <div className="md:hidden absolute inset-0 flex items-center justify-between px-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-amber-500 font-mono text-lg">0{index + 1}</span>
                                    <div className="h-px w-8 bg-amber-500" />
                                    <h3 className="text-white font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wide">
                                        {field.title}
                                    </h3>
                                </div>
                                <ArrowUpRight className="text-white/60 w-8 h-8 transform group-hover:scale-110 transition-transform" />
                            </div>

                            {/* Desktop: Vertical Layout */}
                            <div className="hidden md:flex absolute top-10 left-1/2 -translate-x-1/2 flex-col items-center gap-4 transition-opacity duration-300 w-full h-full justify-center">
                                <span className="text-white/50 font-mono text-sm mb-4">0{index + 1}</span>
                                <h3 className="text-white font-serif text-2xl md:text-3xl font-bold uppercase tracking-widest whitespace-nowrap [writing-mode:vertical-rl] rotate-180 opacity-80 group-hover:text-amber-500 transition-colors">
                                    {field.title}
                                </h3>
                                <ArrowUpRight className="text-white/30 w-6 h-6 mt-8 rotate-45 transform group-hover:scale-110 transition-transform" />
                            </div>
                        </>
                    )}

                    {/* Active State: Full Content */}
                    <div className={`max-w-3xl transition-all duration-500 transform ${isActive ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-8 absolute bottom-6 md:bottom-8 left-6 md:left-8 pointer-events-none'}`}>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-amber-500 font-mono text-base md:text-lg">0{index + 1}</span>
                            <div className={`h-px w-8 md:w-12 bg-amber-500`} />
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
                            {field.title}
                        </h2>

                        {isActive && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-6 md:mb-8 max-w-2xl drop-shadow-md">
                                    {field.description}
                                </p>

                                <span className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-2.5 md:py-3 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-amber-400 transition-colors shadow-xl">
                                    Keşfet
                                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                                </span>
                            </motion.div>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
