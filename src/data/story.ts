export interface WordDefinition {
    word: string;
    pronunciation: string;
    definition: string;
    imageUrl: string;
}

export interface StoryData {
    title: string;
    author: string;
    coverImageUrl: string;
    pages: string[];
    dictionary: Record<string, WordDefinition>;
}

export const story: StoryData = {
    title: "Humming Birds",
    author: "A Fable for Grade 5 Explorers",
    coverImageUrl: "https://images.pexels.com/photos/27985407/pexels-photo-27985407.jpeg",
    pages: [
        "The most beautiful [[humming birds]] are found in the West Indies and South America. The crest of the [[tiny]] head of one of these birds shines like a sparkling [[crown]] of colored light. The shades of color that adorn its breast are equally brilliant. As the bird flits from one [[flower]] to another, it looks more like a bright flash of [[sunlight]] than it does a living being.",
        "You ask, why are they called humming birds? It is because they make a soft, [[humming]] noise by the [[rapid]] motion of their wings—a motion so rapid, that as they fly, you can hardly see that they have wings.",
        "One day when walking in the [[woods]], I found the [[nest]] of one of the smallest humming birds. It was about half the size of a very small hen’s egg, and it was attached to a [[twig]] no thicker than a steel knitting [[needle]].",
        "It seemed to have been made of [[cotton]] fibers and was covered with the softest bits of leaf and [[bark]]. It had two eggs in it, and each was about as large as a small [[sugarplum]].",
        "When you approach the spot where one of these birds has built its nest, you need to be careful. The mother bird will dart at you and try to [[peck]] you. Its sharp beak may hurt you. The poor little thing knows no other way of defending its young, and instinct teaches it that you might carry off its nest if you find it."
    ],
    dictionary: {
        "humming birds": {
            word: "Humming bird",
            pronunciation: "/ˈhʌm.ɪŋ ˌbɜːd/",
            definition: "A small nectar-feeding tropical bird that is able to hover and fly backward, typically having colorful iridescent feathers.",
            imageUrl: "https://images.pexels.com/photos/27985407/pexels-photo-27985407.jpeg"
        },
        tiny: {
            word: "Tiny",
            pronunciation: "/ˈtaɪ.ni/",
            definition: "Very small.",
            imageUrl: "https://images.pexels.com/photos/12833790/pexels-photo-12833790.jpeg"
        },
        crown: {
            word: "Crown",
            pronunciation: "/kraʊn/",
            definition: "The top part of a bird's head, often brightly colored; also a circular ornamental headdress worn by a king or queen.",
            imageUrl: "https://images.pexels.com/photos/32937227/pexels-photo-32937227.jpeg"
        },
        flower: {
            word: "Flower",
            pronunciation: "/ˈflaʊ.ər/",
            definition: "The brightly colored part of a plant from which the seed or fruit develops.",
            imageUrl: "https://images.pexels.com/photos/18656789/pexels-photo-18656789.jpeg"
        },
        sunlight: {
            word: "Sunlight",
            pronunciation: "/ˈsʌn.laɪt/",
            definition: "Light from the sun.",
            imageUrl: "https://images.pexels.com/photos/27679978/pexels-photo-27679978.jpeg"
        },
        humming: {
            word: "Humming",
            pronunciation: "/ˈhʌm.ɪŋ/",
            definition: "Making a low, steady continuous sound like that of a bee.",
            imageUrl: "https://www.wikihow.com/images/e/ec/Hum-Step-12.jpg"
        },
        rapid: {
            word: "Rapid",
            pronunciation: "/ˈræp.ɪd/",
            definition: "Happening in a short time or at a fast pace.",
            imageUrl: "https://images.pexels.com/photos/32423631/pexels-photo-32423631.jpeg"
        },
        woods: {
            word: "Woods",
            pronunciation: "/wʊdz/",
            definition: "An area of land, smaller than a forest, that is covered with growing trees.",
            imageUrl: "https://images.pexels.com/photos/32167957/pexels-photo-32167957.jpeg"
        },
        twig: {
            word: "Twig",
            pronunciation: "/twɪɡ/",
            definition: "A slender woody shoot growing from a branch or stem of a tree or shrub.",
            imageUrl: "https://www.collinsdictionary.com/images/full/twig_100220495.jpg"
        },
        needle: {
            word: "Needle",
            pronunciation: "/ˈniː.dəl/",
            definition: "A very fine slender piece of metal with a point at one end, used in sewing or knitting.",
            imageUrl: "https://images.pexels.com/photos/15106340/pexels-photo-15106340.jpeg"
        },
        cotton: {
            word: "Cotton",
            pronunciation: "/ˈkɒt.ən/",
            definition: "A soft white fibrous substance that surrounds the seeds of a plant and is used as textile fiber.",
            imageUrl: "https://images.pexels.com/photos/4264828/pexels-photo-4264828.jpeg"
        },
        bark: {
            word: "Bark",
            pronunciation: "/bɑːk/",
            definition: "The tough protective outer sheath of the trunk, branches, and twigs of a tree.",
            imageUrl: "https://images.pexels.com/photos/34088805/pexels-photo-34088805.jpeg?_gl=1*sk3k8i*_ga*Njk5MzQzODMzLjE3NzUxNjY1Mjk.*_ga_8JE65Q40S6*czE3NzUxNjY1MjkkbzEkZzEkdDE3NzUxNjY3MTQkajE4JGwwJGgw"
        },
        sugarplum: {
            word: "Sugarplum",
            pronunciation: "/ˈʃʊɡ.ə.plʌm/",
            definition: "A small round candy of flavored boiled sugar.",
            imageUrl: "https://images.pexels.com/photos/18419052/pexels-photo-18419052.jpeg?_gl=1*vcskkd*_ga*Njk5MzQzODMzLjE3NzUxNjY1Mjk.*_ga_8JE65Q40S6*czE3NzUxNjY1MjkkbzEkZzEkdDE3NzUxNjY2ODUkajQ3JGwwJGgw"
        },
        nest: {
            word: "Nest",
            pronunciation: "/nest/",
            definition: "A structure or place made or chosen by a bird for laying eggs and sheltering its young.",
            imageUrl: "https://images.pexels.com/photos/88121/pexels-photo-88121.jpeg?_gl=1*frvz1g*_ga*Njk5MzQzODMzLjE3NzUxNjY1Mjk.*_ga_8JE65Q40S6*czE3NzUxNjY1MjkkbzEkZzEkdDE3NzUxNjY2NDAkajE3JGwwJGgw"
        },
        peck: {
            word: "Peck",
            pronunciation: "/pek/",
            definition: "Strike or bite something with its beak.",
            imageUrl: "https://images.pexels.com/photos/32242131/pexels-photo-32242131.jpeg?_gl=1*fnkwh2*_ga*Njk5MzQzODMzLjE3NzUxNjY1Mjk.*_ga_8JE65Q40S6*czE3NzUxNjY1MjkkbzEkZzEkdDE3NzUxNjY2MDEkajU2JGwwJGgw"
        }
    }
};
