import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { story, type WordDefinition } from '../data/story';
import { WordModal } from './WordModal';

export function Book() {
    const [selectedWord, setSelectedWord] = useState<WordDefinition | null>(null);
    const [currentPage, setCurrentPage] = useState(0); // 0 is cover
    const [direction, setDirection] = useState(0);

    const totalPages = story.pages.length;

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentPage((prev) => {
            const next = prev + newDirection;
            if (next < 0) return 0;
            if (next > totalPages) return totalPages;
            return next;
        });
    };

    // Parse the content to find interactive words
    const renderContent = (text: string) => {
        const parts = text.split(/(\[\[.*?\]\])/g);

        return parts.map((part, index) => {
            if (part.startsWith('[[') && part.endsWith(']]')) {
                const wordKey = part.slice(2, -2).toLowerCase();
                const displayWord = part.slice(2, -2);
                const wordData = story.dictionary[wordKey];

                if (wordData) {
                    return (
                        <button
                            key={index}
                            onClick={() => setSelectedWord(wordData)}
                            className="relative inline-block font-semibold text-emerald-700 transition-colors hover:text-emerald-500 focus:outline-none"
                        >
                            {displayWord}
                            <span className="absolute -bottom-0.5 sm:-bottom-1 left-0 h-[2px] sm:h-[3px] w-full rounded-full bg-emerald-300/50 transition-all hover:bg-emerald-400" />
                        </button>
                    );
                }
                return <span key={index}>{displayWord}</span>;
            }
            return <span key={index}>{part}</span>;
        });
    };

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 100 : -100,
                opacity: 0,
                rotateY: direction > 0 ? 15 : -15,
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            rotateY: 0,
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 100 : -100,
                opacity: 0,
                rotateY: direction < 0 ? 15 : -15,
            };
        }
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-stone-300 p-2 sm:p-6 md:p-8">
            {/* Book Container */}
            <div
                className="relative flex w-full max-w-5xl flex-col shadow-2xl h-[85vh] sm:h-[80vh] overflow-hidden"
                style={{
                    borderRadius: 'clamp(1rem, 3vw, 2rem)',
                    backgroundColor: '#fdfbf7', // Warm paper color
                    backgroundImage: 'radial-gradient(#e5e5e5 1px, transparent 1px)',
                    backgroundSize: 'clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px)',
                    perspective: '1200px'
                }}
            >
                {/* Spine */}
                <div className="absolute left-0 top-0 h-full w-6 sm:w-12 md:w-16 rounded-l-[clamp(1rem,3vw,2rem)] bg-gradient-to-r from-stone-400/60 to-transparent z-20 pointer-events-none" />

                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentPage}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                            rotateY: { duration: 0.4 }
                        }}
                        className="absolute inset-0 flex h-full w-full flex-col px-6 py-8 sm:px-16 sm:py-12 md:px-24 md:py-16"
                    >
                        {currentPage === 0 ? (
                            // Cover Page
                            <div className="flex h-full flex-col items-center justify-center text-center">
                                <div className="mb-6 sm:mb-8 overflow-hidden rounded-2xl shadow-lg border-4 border-white/50">
                                    <img src={story.coverImageUrl} alt="Cover" className="h-40 w-56 sm:h-64 sm:w-80 md:h-72 md:w-96 object-cover" referrerPolicy="no-referrer" />
                                </div>
                                <h1 className="font-serif text-3xl font-bold tracking-tight text-stone-800 sm:text-5xl md:text-6xl lg:text-7xl">
                                    {story.title}
                                </h1>
                                <div className="mx-auto mt-4 mb-4 sm:mt-6 sm:mb-6 h-1 w-16 sm:w-24 rounded-full bg-emerald-400" />
                                <p className="font-sans text-base text-stone-500 sm:text-xl">{story.author}</p>
                            </div>
                        ) : (
                            // Story Page
                            <div className="flex h-full flex-col">
                                <div className="flex-1 flex items-center justify-center">
                                    <p className="font-serif text-xl leading-relaxed text-stone-800 sm:text-3xl sm:leading-loose md:text-4xl md:leading-[1.8] text-center">
                                        {renderContent(story.pages[currentPage - 1])}
                                    </p>
                                </div>
                                <div className="mt-4 sm:mt-8 text-center font-sans text-xs sm:text-sm font-medium text-stone-400">
                                    Page {currentPage} of {totalPages}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-between px-4 sm:px-8 z-30 pointer-events-none">
                    <button
                        onClick={() => paginate(-1)}
                        disabled={currentPage === 0}
                        className={`pointer-events-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-stone-50 hover:scale-105 active:scale-95 ${currentPage === 0 ? 'opacity-0' : 'opacity-100'}`}
                        aria-label="Previous Page"
                    >
                        <ChevronLeft className="text-stone-600" size={24} />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        disabled={currentPage === totalPages}
                        className={`pointer-events-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-stone-50 hover:scale-105 active:scale-95 ${currentPage === totalPages ? 'opacity-0' : 'opacity-100'}`}
                        aria-label="Next Page"
                    >
                        <ChevronRight className="text-stone-600" size={24} />
                    </button>
                </div>
            </div>

            <WordModal
                word={selectedWord}
                onClose={() => setSelectedWord(null)}
            />
        </div>
    );
}
