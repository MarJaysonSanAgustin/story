export interface QuizQuestion {
    id: string;
    word: string;
    question: string;
    options: {
        a: string;
        b: string;
        c: string;
        d: string;
    };
    correctAnswer: 'a' | 'b' | 'c' | 'd';
}

export interface QuizData {
    title: string;
    description: string;
    numberOfQuestions: number; // Configurable number of questions
    questions: QuizQuestion[];
}

export const quizData: QuizData = {
    title: "Vocabulary Quiz",
    description: "Test your knowledge of the words from the story.",
    numberOfQuestions: 10,
    questions: [
        {
            id: "q1",
            word: "Humming bird",
            question: "What is a Humming bird?",
            options: {
                a: "A large predatory bird found in the desert.",
                b: "A flightless bird that lives in the arctic.",
                c: "A small nectar-feeding tropical bird that is able to hover and fly backward.",
                d: "A bird known for its beautiful singing voice at night."
            },
            correctAnswer: 'c'
        },
        {
            id: "q2",
            word: "Tiny",
            question: "What does the word 'Tiny' mean?",
            options: {
                a: "Extremely large or massive.",
                b: "Very small.",
                c: "Heavy and dense.",
                d: "Loud and boisterous."
            },
            correctAnswer: 'b'
        },
        {
            id: "q3",
            word: "Crown",
            question: "In the context of the bird, what does 'Crown' refer to?",
            options: {
                a: "A golden hat worn by a king.",
                b: "The tail feathers of a bird.",
                c: "The top part of a bird's head.",
                d: "The bird's nest."
            },
            correctAnswer: 'c'
        },
        {
            id: "q4",
            word: "Flower",
            question: "What is a 'Flower'?",
            options: {
                a: "The roots of a tree.",
                b: "The brightly colored part of a plant from which the seed or fruit develops.",
                c: "The bark of a mature tree.",
                d: "The leaves that fall in autumn."
            },
            correctAnswer: 'b'
        },
        {
            id: "q5",
            word: "Sunlight",
            question: "What does 'Sunlight' mean?",
            options: {
                a: "Light from the moon.",
                b: "Light from a lamp.",
                c: "Light from the sun.",
                d: "Light from a fire."
            },
            correctAnswer: 'c'
        },
        {
            id: "q6",
            word: "Humming",
            question: "What kind of sound is 'Humming'?",
            options: {
                a: "A loud crash.",
                b: "A sharp whistle.",
                c: "A making a low, steady continuous sound like that of a bee.",
                d: "A sudden explosion."
            },
            correctAnswer: 'c'
        },
        {
            id: "q7",
            word: "Rapid",
            question: "If something is 'Rapid', it is:",
            options: {
                a: "Happening in a short time or at a fast pace.",
                b: "Moving very slowly.",
                c: "Standing completely still.",
                d: "Changing color unexpectedly."
            },
            correctAnswer: 'a'
        },
        {
            id: "q8",
            word: "Woods",
            question: "What are 'Woods'?",
            options: {
                a: "A large ocean.",
                b: "A vast grassy plain.",
                c: "An area of land, smaller than a forest, that is covered with growing trees.",
                d: "A dry desert."
            },
            correctAnswer: 'c'
        },
        {
            id: "q9",
            word: "Twig",
            question: "What is a 'Twig'?",
            options: {
                a: "A massive tree trunk.",
                b: "A slender woody shoot growing from a branch or stem of a tree or shrub.",
                c: "A deep root underground.",
                d: "A large leaf."
            },
            correctAnswer: 'b'
        },
        {
            id: "q10",
            word: "Needle",
            question: "What does 'Needle' refer to?",
            options: {
                a: "A flat piece of wood.",
                b: "A heavy rock.",
                c: "A very fine slender piece of metal with a point at one end.",
                d: "A soft cushion."
            },
            correctAnswer: 'c'
        },
        {
            id: "q11",
            word: "Cotton",
            question: "What is 'Cotton'?",
            options: {
                a: "A hard, metallic substance.",
                b: "A liquid produced by bees.",
                c: "A soft white fibrous substance that surrounds the seeds of a plant.",
                d: "A type of rough sand."
            },
            correctAnswer: 'c'
        },
        {
            id: "q12",
            word: "Bark",
            question: "What is the 'Bark' of a tree?",
            options: {
                a: "The green leaves on top.",
                b: "The tough protective outer sheath of the trunk, branches, and twigs.",
                c: "The sweet fruit it produces.",
                d: "The roots deeply anchored in soil."
            },
            correctAnswer: 'b'
        },
        {
            id: "q13",
            word: "Sugarplum",
            question: "What is a 'Sugarplum'?",
            options: {
                a: "A small round candy of flavored boiled sugar.",
                b: "A sour vegetable.",
                c: "A large, savory piece of meat.",
                d: "A type of salty cracker."
            },
            correctAnswer: 'a'
        },
        {
            id: "q14",
            word: "Nest",
            question: "What is a 'Nest'?",
            options: {
                a: "A deep cave in a mountain.",
                b: "A structure or place made or chosen by a bird for laying eggs and sheltering its young.",
                c: "A tall skyscraper in a city.",
                d: "A woven basket for carrying water."
            },
            correctAnswer: 'b'
        },
        {
            id: "q15",
            word: "Peck",
            question: "To 'Peck' means to:",
            options: {
                a: "Sing a loud song.",
                b: "Gently stroke with a wing.",
                c: "Strike or bite something with its beak.",
                d: "Fly rapidly in circles."
            },
            correctAnswer: 'c'
        }
    ]
};
