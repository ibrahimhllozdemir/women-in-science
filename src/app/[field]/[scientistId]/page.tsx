"use client";

import { notFound } from 'next/navigation';
import { EXHIBITION_FIELDS } from '@/data/fields';
import { SCIENTISTS } from '@/data/scientists';
import Link from 'next/link';
import { ArrowLeft, Quote, Atom, Share2 } from 'lucide-react';
import Image from 'next/image';
import ScientistChat from '@/components/ScientistChat';
import { use } from 'react';

interface DetailProps {
    params: Promise<{ field: string; scientistId: string }>;
}

export default function ScientistDetailPage({ params }: DetailProps) {
    const { field, scientistId } = use(params);

    const scientist = SCIENTISTS.find((s) => s.id === scientistId);
    const fieldData = EXHIBITION_FIELDS.find((f) => f.id === field);

    if (!scientist || !fieldData) notFound();

    // Image placeholder logic
    const imageUrl = scientist.imageUrl || `https://placehold.co/800x1200/151515/FFFFFF/png?text=${encodeURIComponent(scientist.name)}`;

    const handleShare = async () => {
        const shareData = {
            title: `${scientist.name} - Bilimde İz Bırakan Kadınlar`,
            text: `${scientist.name}: ${scientist.contribution}`,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                // Web Share API supported (mobile browsers)
                await navigator.share(shareData);
            } else {
                // Fallback: Copy to clipboard
                await navigator.clipboard.writeText(window.location.href);
                alert('Link panoya kopyalandı!');
            }
        } catch (err) {
            if ((err as Error).name !== 'AbortError') {
                console.error('Share error:', err);
            }
        }
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-amber-500 selection:text-black">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
                <Link href={`/${field}`} className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="uppercase tracking-widest text-xs font-bold">Geri Dön ({fieldData.title})</span>
                </Link>
                <div className="hidden md:block uppercase tracking-[0.2em] text-xs opacity-50 font-bold">
                    İzmir Fikir Sanat Rotary Kulübü
                </div>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left Column: Visuals & Quick Stats (Fixed on large screens) */}
                <div className="relative h-[50vh] lg:h-screen lg:sticky lg:top-0 w-full overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={scientist.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-black" />

                    <div className="absolute bottom-8 left-8 p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl max-w-sm">
                        <p className="text-amber-500 text-sm font-mono mb-1">{scientist.years}</p>
                        <h1 className="text-4xl font-serif font-bold leading-none mb-2">{scientist.name}</h1>
                        <p className="text-gray-300 text-sm">{scientist.contribution}</p>
                    </div>
                </div>

                {/* Right Column: Content (Scrollable) */}
                <div className="relative p-8 md:p-16 lg:pt-32 space-y-12 max-w-3xl mx-auto">
                    {/* Section 1: Intro */}
                    <section>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${fieldData.color} bg-opacity-10 border border-white/10 text-xs font-bold uppercase tracking-widest mb-6`}>
                            <Atom size={14} />
                            {fieldData.title}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight text-white/90">
                            {scientist.biography.split('.')[0]}.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                            {scientist.biography}
                        </p>
                    </section>

                    {/* Section 2: Quote */}
                    {scientist.quote && (
                        <blockquote className="relative p-8 border-l-4 border-amber-500 bg-white/5 rounded-r-xl my-12">
                            <Quote className="absolute top-4 left-4 text-amber-500 opacity-20 w-12 h-12" />
                            <p className="text-2xl font-serif italic text-white relative z-10 pl-6">
                                "{scientist.quote}"
                            </p>
                        </blockquote>
                    )}

                    {/* Section 3: Impact */}
                    <section className="space-y-6">
                        <h3 className="text-2xl font-serif font-bold text-amber-500 border-b border-white/10 pb-2">
                            Bilime Etkisi
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            {scientist.impact}
                        </p>
                    </section>

                    {/* Footer / CTA */}
                    <div className="pt-20 pb-10 border-t border-white/10 text-center">
                        <p className="text-gray-500 text-sm mb-4">Bu hikaye size ilham verdi mi?</p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handleShare}
                                className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all active:scale-95"
                            >
                                <Share2 size={18} /> Paylaş
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Chat Integration */}
            <ScientistChat scientistName={scientist.name} />
        </main>
    );
}
