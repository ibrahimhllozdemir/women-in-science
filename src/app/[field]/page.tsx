import { notFound } from 'next/navigation';
import { EXHIBITION_FIELDS } from '@/data/fields';
import { SCIENTISTS, Scientist } from '@/data/scientists';
import Link from 'next/link';
import { ArrowLeft, MoveRight } from 'lucide-react';
import Image from 'next/image';

interface GridProps {
    params: Promise<{ field: string }>;
}

export default async function FieldPage({ params }: GridProps) {
    const { field } = await params;

    const fieldData = EXHIBITION_FIELDS.find((f) => f.id === field);
    if (!fieldData) notFound();

    const scientists = SCIENTISTS.filter((s) => s.fieldId === field);

    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12 relative overflow-hidden">
            {/* Background Ambience */}
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl ${fieldData.color} rounded-full blur-[150px] opacity-20 pointer-events-none`} />

            {/* Header */}
            <header className="flex justify-between items-center mb-16 relative z-10">
                <Link href="/" className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                    <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    <span className="uppercase tracking-widest text-sm font-bold">Lobiye Dön</span>
                </Link>
                <span className="text-xs text-white/30 uppercase tracking-[0.2em]">İzmir Fikir Sanat Rotary Kulübü</span>
            </header>

            {/* Field Title */}
            <div className="mb-20 text-center relative z-10">
                <h1 className={`text-5xl md:text-7xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${fieldData.color}`}>
                    {fieldData.title}
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                    {fieldData.description}
                </p>
            </div>

            {/* Scientist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1920px] mx-auto relative z-10">
                {scientists.map((scientist, index) => (
                    <ScientistCard key={scientist.id} scientist={scientist} index={index} fieldColor={fieldData.color} />
                ))}
            </div>
        </main>
    );
}

function ScientistCard({ scientist, index, fieldColor }: { scientist: Scientist, index: number, fieldColor: string }) {
    // Use a reliable placeholder or generated image if available
    const imageUrl = scientist.imageUrl || `https://placehold.co/600x800/151515/FFFFFF/png?text=${encodeURIComponent(scientist.name)}`;

    return (
        <Link href={`/${scientist.fieldId}/${scientist.id}`} className="group relative block h-[500px] w-full bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            {/* Image Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={imageUrl}
                    alt={scientist.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-amber-500 text-xs font-mono tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    KEŞFETMEK İÇİN TIKLA
                </span>
                <h2 className="text-3xl font-serif font-bold text-white mb-2 leading-tight">
                    {scientist.name}
                </h2>
                <p className="text-sm text-gray-300 line-clamp-2 opacity-80 group-hover:text-white transition-colors">
                    {scientist.contribution}
                </p>

                <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${fieldColor} mt-4 transition-all duration-500 ease-out`} />
            </div>

            {/* Top Number */}
            <span className="absolute top-6 right-6 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors z-0 pointer-events-none">
                0{index + 1}
            </span>
        </Link>
    );
}
