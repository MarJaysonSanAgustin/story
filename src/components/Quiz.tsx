import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { quizData, type QuizQuestion } from '../data/quiz';
import { story } from '../data/story';

export function Quiz() {
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentPage, setCurrentPage] = useState(0); // 0 is cover, 1-10 questions, 11 results
    const [direction, setDirection] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({}); // question id -> selected option key

    useEffect(() => {
        // Shuffle questions and select the configured number
        const shuffled = [...quizData.questions]
            .sort(() => Math.random() - 0.5)
            .slice(0, quizData.numberOfQuestions);
        setQuestions(shuffled);
    }, []);

    const totalPages = questions.length + 1; // +1 for results page

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentPage((prev) => {
            const next = prev + newDirection;
            if (next < 0) return 0;
            if (next > totalPages) return totalPages;
            return next;
        });
    };

    const handleAnswerSelect = (questionId: string, optionKey: string) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: optionKey
        }));
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

    const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.correctAnswer ? 1 : 0), 0);

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
                                    <img src={story.coverImageUrl} alt="Quiz Cover" className="h-40 w-56 sm:h-64 sm:w-80 md:h-72 md:w-96 object-cover" referrerPolicy="no-referrer" />
                                </div>
                                <h1 className="font-serif text-3xl font-bold tracking-tight text-stone-800 sm:text-5xl md:text-6xl lg:text-7xl">
                                    {quizData.title}
                                </h1>
                                <div className="mx-auto mt-4 mb-4 sm:mt-6 sm:mb-6 h-1 w-16 sm:w-24 rounded-full bg-emerald-400" />
                                <p className="font-sans text-base text-stone-500 sm:text-lg mb-8">{quizData.description}</p>
                                
                                <button
                                    onClick={() => paginate(1)}
                                    className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-500 transition-colors"
                                >
                                    Start Quiz
                                </button>
                            </div>
                        ) : currentPage <= questions.length ? (
                            // Question Page
                            <div className="flex h-full flex-col">
                                <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full">
                                    <h2 className="font-serif text-2xl text-stone-800 sm:text-3xl md:text-4xl text-center mb-8">
                                        {questions[currentPage - 1]?.question}
                                    </h2>
                                    
                                    <div className="flex flex-col gap-4 w-full">
                                        {questions[currentPage - 1] && Object.entries(questions[currentPage - 1].options).map(([key, text]) => {
                                            const isSelected = answers[questions[currentPage - 1].id] === key;
                                            return (
                                                <button
                                                    key={key}
                                                    onClick={() => handleAnswerSelect(questions[currentPage - 1].id, key)}
                                                    className={`w-full text-left p-4 sm:p-6 rounded-xl border-2 transition-all font-sans text-sm sm:text-base md:text-lg
                                                        ${isSelected 
                                                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-md transform scale-[1.02]' 
                                                            : 'border-stone-200 bg-white hover:border-emerald-300 hover:shadow-sm text-stone-700'
                                                        }
                                                    `}
                                                >
                                                    <span className="font-bold mr-4 uppercase text-emerald-600">{key})</span>
                                                    {text}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-8 text-center font-sans text-xs sm:text-sm font-medium text-stone-400">
                                    Question {currentPage} of {questions.length}
                                </div>
                            </div>
                        ) : (
                            // Results Page
                            <div className="flex h-full flex-col items-center justify-center text-center">
                                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-800 mb-4">
                                    Quiz Completed!
                                </h2>
                                <div className="mx-auto mt-4 mb-8 h-1 w-24 rounded-full bg-emerald-400" />
                                
                                <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-stone-100 max-w-md w-full">
                                    <p className="text-stone-500 text-lg mb-2">Your Score</p>
                                    <div className="text-6xl font-bold text-emerald-600 mb-6">
                                        {score} <span className="text-3xl text-stone-300">/ {questions.length}</span>
                                    </div>
                                    <p className="text-stone-600 font-medium">
                                        {score === questions.length ? "Perfect score! Outstanding!" : 
                                         score >= questions.length * 0.7 ? "Great job! You know your words well." :
                                         "Good effort! Keep reading to learn more words."}
                                    </p>
                                </div>

                                <button
                                    onClick={() => {
                                        setAnswers({});
                                        setCurrentPage(0);
                                        setDirection(-1);
                                        // Reshuffle questions
                                        const shuffled = [...quizData.questions]
                                            .sort(() => Math.random() - 0.5)
                                            .slice(0, quizData.numberOfQuestions);
                                        setQuestions(shuffled);
                                    }}
                                    className="mt-8 px-8 py-3 bg-stone-800 text-white font-semibold rounded-full shadow-lg hover:bg-stone-700 transition-colors"
                                >
                                    Try Again
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-between px-4 sm:px-8 z-30 pointer-events-none">
                    <button
                        onClick={() => paginate(-1)}
                        disabled={currentPage === 0 || currentPage > questions.length}
                        className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-stone-50 hover:scale-105 active:scale-95 ${currentPage === 0 || currentPage > questions.length ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
                        aria-label="Previous Page"
                    >
                        <ChevronLeft className="text-stone-600" size={24} />
                    </button>
                    {currentPage > 0 && currentPage <= questions.length && (
                        <button
                            onClick={() => paginate(1)}
                            disabled={currentPage > questions.length}
                            className={`pointer-events-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-stone-50 hover:scale-105 active:scale-95`}
                            aria-label="Next Page"
                        >
                            <ChevronRight className="text-stone-600" size={24} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
