import { motion, AnimatePresence } from 'motion/react';
import { X, Volume2 } from 'lucide-react';
import type { WordDefinition } from '../data/story';

interface WordModalProps {
    word: WordDefinition | null;
    onClose: () => void;
}

export function WordModal({ word, onClose }: WordModalProps) {
    const playAudio = () => {
        if (word && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Stop any current speech
            const utterance = new SpeechSynthesisUtterance(word.word);
            utterance.rate = 0.85; // Slightly slower for kids
            utterance.pitch = 1.1;
            window.speechSynthesis.speak(utterance);
        }
    };

    return (
        <AnimatePresence>
            {word && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-colors hover:bg-black/40"
                            aria-label="Close modal"
                        >
                            <X size={18} />
                        </button>

                        {/* Image */}
                        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-100">
                            <img
                                src={word.imageUrl}
                                alt={`Illustration for ${word.word}`}
                                className="h-full w-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <h2 className="absolute bottom-4 left-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                {word.word}
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-8">
                            <div className="mb-4 flex items-center gap-3 text-emerald-600">
                                <button
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 transition-colors hover:bg-emerald-200"
                                    aria-label="Play pronunciation"
                                    onClick={playAudio}
                                >
                                    <Volume2 size={20} />
                                </button>
                                <span className="font-mono text-lg font-medium text-gray-600">
                                    {word.pronunciation}
                                </span>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                                    Definition
                                </h3>
                                <p className="text-lg leading-relaxed text-gray-800">
                                    {word.definition}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
