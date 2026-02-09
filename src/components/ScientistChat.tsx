"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

interface ScientistChatProps {
    scientistName: string;
}

export default function ScientistChat({ scientistName }: ScientistChatProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input
        };

        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Scientist-Name': encodeURIComponent(scientistName)
                },
                body: JSON.stringify({
                    messages: newMessages.map(m => ({ role: m.role, content: m.content }))
                })
            });

            if (!response.ok) throw new Error(response.statusText);

            if (!response.body) return;

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: ""
            };

            setMessages(prev => [...prev, aiMessage]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const text = decoder.decode(value, { stream: true });

                setMessages(prev => {
                    const lastMsg = prev[prev.length - 1];
                    if (lastMsg.role === 'assistant') {
                        return [
                            ...prev.slice(0, -1),
                            { ...lastMsg, content: lastMsg.content + text }
                        ];
                    }
                    return prev;
                });
            }
        } catch (err) {
            console.error("Chat error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full shadow-lg shadow-amber-500/20 transition-all active:scale-95 group text-sm md:text-base"
                    >
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce" />
                        <span className="hidden sm:inline">{scientistName} ile Sohbet Et</span>
                        <span className="sm:hidden">Sohbet</span>
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="fixed inset-0 md:inset-auto md:bottom-8 md:right-8 w-full md:w-full md:max-w-md h-full md:h-[600px] bg-neutral-900 md:border md:border-white/10 md:rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col backdrop-blur-xl bg-opacity-95"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 md:p-4 bg-black/40 border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-amber-500" />
                                <h3 className="font-bold text-white text-sm md:text-base max-w-[200px] md:max-w-[250px] truncate">{scientistName} (AI)</h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors"
                                aria-label="Kapat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                            {messages.length === 0 && (
                                <div className="text-center text-gray-500 text-sm mt-10 px-4">
                                    <p>Merhaba! Benim adım {scientistName}.</p>
                                    <p className="mt-2">Bana hayatım, çalışmalarım veya bilim hakkında soru sorabilirsin.</p>
                                </div>
                            )}

                            {messages.map((m) => (
                                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={`max-w-[85%] md:max-w-[80%] rounded-2xl px-3 py-2 md:px-4 md:py-2.5 text-sm leading-relaxed prose prose-sm prose-invert max-w-none ${m.role === 'user'
                                            ? 'bg-amber-500 text-black rounded-tr-none prose-p:text-black prose-headings:text-black prose-strong:text-black'
                                            : 'bg-white/10 text-gray-200 rounded-tl-none'
                                            }`}
                                    >
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                p: (props) => <p className="mb-2 last:mb-0" {...props} />,
                                                a: (props) => <a className="text-amber-300 underline" target="_blank" {...props} />,
                                                ul: (props) => <ul className="list-disc pl-4 mb-2" {...props} />,
                                                ol: (props) => <ol className="list-decimal pl-4 mb-2" {...props} />,
                                                li: (props) => <li className="mb-1" {...props} />,
                                                blockquote: (props) => <blockquote className="border-l-4 border-amber-500 pl-4 italic my-2 bg-white/5 py-2 pr-2 rounded-r" {...props} />,
                                                strong: (props) => <strong className="font-bold text-amber-200" {...props} />,
                                            }}
                                        >
                                            {m.content}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 px-4 py-2 rounded-2xl rounded-tl-none flex gap-1 items-center">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce delay-0" />
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce delay-150" />
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce delay-300" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-3 md:p-4 border-t border-white/10 bg-black/20">
                            <div className="relative flex items-center">
                                <input
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Bir soru sor..."
                                    className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 md:py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500 placeholder:text-gray-500 pr-12 hover:bg-white/10 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 p-2.5 md:p-2 bg-amber-500 hover:bg-amber-400 text-black rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    aria-label="Gönder"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
