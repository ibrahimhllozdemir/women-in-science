"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles, Heart, Users, Zap } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
                <Link href="/" className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                    <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    <span className="uppercase tracking-widest text-sm font-bold">Sergiye Dön</span>
                </Link>
                <span className="text-xs text-white/30 uppercase tracking-[0.2em]">İzmir Fikir Sanat Rotary Kulübü</span>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-[150px]" />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center max-w-4xl px-6"
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-serif font-bold mb-6 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 overflow-visible"
                        style={{ lineHeight: '1.3' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Sergi Hakkında
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        11 Şubat Bilimde Kadın ve Kız Çocukları Günü'ne Özel<br />
                        <span className="text-purple-400 font-medium">Sanal Bir İlham Yolculuğu</span>
                    </motion.p>
                </motion.div>

                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div className="text-sm text-white/50 flex flex-col items-center gap-2">
                        <span>Aşağı Kaydır</span>
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                            <div className="w-1 h-2 bg-white/50 rounded-full" />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Content Sections */}
            <div className="relative">
                {/* Vision Section */}
                <section className="py-32 px-6 md:px-12 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />

                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Sparkles className="w-8 h-8 text-purple-400" />
                                <h2 className="text-4xl md:text-5xl font-bold text-white">Bir Hatırlatma ve Davet</h2>
                            </div>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                11 Şubat Bilimde Kadın ve Kız Çocukları Günü, yalnızca bir farkındalık günü değil; bilimin bugününe ve yarınına dair güçlü bir hatırlatmadır.
                            </p>
                            <p className="text-xl text-gray-300 leading-relaxed mt-4">
                                Biz de bu özel günde, bilime ve insanlığa kalıcı izler bırakmış kadın bilim insanlarını görünür kılmak ve ilhamlarını gelecek nesillere taşımak amacıyla bu <span className="text-purple-400 font-semibold">Sanal Sergiyi</span> hayata geçirdik.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="p-8 md:p-12 bg-gradient-to-br from-purple-900/10 to-blue-900/10 border border-white/10 rounded-2xl backdrop-blur-sm"
                        >
                            <p className="text-2xl md:text-3xl font-serif italic text-center text-gray-200 leading-relaxed">
                                "Bilim, eşit fırsatlarla gelişir;<br />
                                <span className="text-purple-400">ilham ise paylaşıldıkça çoğalır.</span>"
                            </p>
                            <p className="text-center text-gray-400 mt-6 text-sm uppercase tracking-widest">
                                İzmir Fikir Sanat Rotary Kulübü
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* What We Offer Section */}
                <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Sergimizde Neler Sunuyoruz?</h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Sergimizde yer alan her bilim insanı için;
                            </p>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                { icon: "📖", title: "Yaşam Öyküleri", desc: "İlham verici kişisel hikâyeler" },
                                { icon: "🔬", title: "Bilimsel Katkıları", desc: "Dünyayı değiştiren keşifler" },
                                { icon: "✨", title: "İnsanlığa Miras", desc: "Kalıcı etkiler ve vizyonlar" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group cursor-default"
                                >
                                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl text-gray-300 leading-relaxed mt-12 text-center"
                        >
                            Bu sergide bilgiyi erişilebilir ve ilgi çekici bir biçimde sunuyoruz.
                        </motion.p>
                    </div>
                </section>

                {/* AI Section */}
                <section className="py-32 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[200px]" />

                    <div className="max-w-5xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-full">
                                <Zap className="w-6 h-6 text-purple-400" />
                                <span className="text-purple-400 font-bold uppercase tracking-widest text-sm">Yapay Zekâ Destekli</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                                Etkileşim Deneyimi
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                                Bu platformda ziyaretçilerimiz, yapay zekâ destekli bir chatbot aracılığıyla sergide yer alan bilim insanlarının dijital simülasyonlarıyla sohbet edebilmektedir.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="p-10 md:p-16 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-3xl backdrop-blur-xl"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Amacımız</h3>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                Bilgiyi tek yönlü aktarmak değil, <span className="text-purple-400 font-semibold">merakı tetiklemek</span>, soru sordurmak ve öğrenmeyi yaşayan bir deneyime dönüştürmektir.
                            </p>

                            <div className="p-6 bg-black/30 rounded-xl border border-white/5">
                                <p className="text-xl text-center text-gray-200 leading-relaxed">
                                    Özellikle kız çocuklarının ve gençlerin,<br />
                                    <span className="text-3xl font-serif italic text-purple-400 block mt-4">"Ben de yapabilirim."</span>
                                    <span className="block mt-4">duygusunu içselleştirmelerini sağlayacak bir temas alanı oluşturmayı hedefledik.</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Why Section */}
                <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Heart className="w-8 h-8 text-pink-400" />
                                <h2 className="text-4xl md:text-5xl font-bold text-white">Neden Bu Sergi?</h2>
                            </div>
                            <p className="text-xl text-gray-300 leading-relaxed mb-12">
                                Çünkü inanıyoruz ki;
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                "Rol modeller görünür olduğunda cesaret artar,",
                                "Bilim hikâyeleri insani yönleriyle anlatıldığında ilham kalıcı olur,",
                                "Teknoloji, doğru amaçla kullanıldığında eğitimin ve eşitliğin güçlü bir aracına dönüşür."
                            ].map((text, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-6 bg-white/5 border-l-4 border-pink-400 rounded-r-xl hover:bg-white/10 transition-all"
                                >
                                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 flex-shrink-0" />
                                    <p className="text-xl text-gray-200 leading-relaxed">{text}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-16 p-8 md:p-12 bg-gradient-to-r from-pink-900/10 to-purple-900/10 border border-white/10 rounded-2xl"
                        >
                            <p className="text-xl text-gray-200 leading-relaxed text-center">
                                Bu sergi, kadınların bilimsel üretimdeki yerini onurlandırırken, aynı zamanda geleceğin bilim insanlarına <span className="text-pink-400 font-semibold">açık bir davettir</span>.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Closing Message & Signature */}
                <section className="py-32 px-6 md:px-12 relative">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <Users className="w-8 h-8 text-blue-400" />
                                <h2 className="text-3xl md:text-4xl font-bold text-white">Taahhüdümüz</h2>
                            </div>
                            <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                İzmir Fikir Sanat Rotary Kulübü olarak; bilimi, sanatı, eğitimi ve teknolojiyi toplumsal fayda odağında bir araya getirmeye devam edeceğiz.
                            </p>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Bu serginin her ziyaretçi için <span className="text-blue-400 font-semibold">küçük bir merak kıvılcımı</span>, bazıları içinse <span className="text-purple-400 font-semibold">büyük bir yolculuğun ilk adımı</span> olmasını diliyorum.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col md:flex-row items-center gap-8 p-10 bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-white/10 rounded-2xl"
                        >
                            <img
                                src="/images/president.jpg"
                                alt="İbrahim Halil Özdemir"
                                className="w-32 h-32 rounded-full border-4 border-purple-500/30 object-cover shadow-2xl"
                            />
                            <div className="flex-1 text-center md:text-left">
                                <p className="text-gray-400 mb-2 uppercase tracking-widest text-sm">Saygılarımla,</p>
                                <p className="text-2xl font-bold text-white mb-1">Rtn. İbrahim Halil ÖZDEMİR</p>
                                <p className="text-purple-400 font-medium">İzmir Fikir Sanat Rotary Kulübü Başkanı</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="py-20 px-6 md:px-12 text-center border-t border-white/10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xl text-gray-400 mb-8">Sergiye göz atın ve bilim kadınlarıyla tanışın</p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105"
                        >
                            <Sparkles className="w-5 h-5" />
                            Sergiyi Keşfet
                        </Link>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}
