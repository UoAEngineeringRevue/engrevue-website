import revue2019 from "../../assets/images/previous/2019.jpg"
import revue2018 from "../../assets/images/previous/2018.jpg"
import revue2017 from "../../assets/images/previous/2017.jpg"
import revue2016 from "../../assets/images/previous/2016.jpg"
import revue2015 from "../../assets/images/previous/2015.jpg"
import revue2014 from "../../assets/images/previous/2014.jpg"
import revue2013 from "../../assets/images/previous/2013.jpg"
import revue2012 from "../../assets/images/previous/2012.jpg"
import revue2011 from "../../assets/images/previous/2011.jpg"
import revue2010 from "../../assets/images/previous/2010.jpg"
import revue2009 from "../../assets/images/previous/2009.gif"
import revue2008 from "../../assets/images/previous/2008.gif"

import revue2019Cast from "../../assets/images/previous/2019/cast_2019.jpg"
import revue2018Cast from "../../assets/images/previous/2018/cast_2018.jpg"
import revue2017Cast from "../../assets/images/previous/2017/cast_2017.jpg"
import revue2016Cast from "../../assets/images/previous/2016/cast_2016.jpg"

import curtains from "../../assets/images/watch/curtains.jpg"

import programme2019 from "../../assets/images/previous/2019/programme.pdf"
import programme2018 from "../../assets/images/previous/2018/programme.pdf"
import programme2017 from "../../assets/images/previous/2017/programme.pdf"
import programme2016 from "../../assets/images/previous/2016/programme.pdf"


const data = {
    /* Structure of this data:
    'year': { // replace with year
        // Pictures
        'cover-image': curtains,
        'poster': curtains,
        'cast-picture': curtains,
        // Text
        'title': 'null',
        'subtitle': 'null',
        'catch-phrase': 'null',
        'location': 'null',
        'director': 'null',
        'producer': 'null',
        'blurb': 'null',
        'quote': 'null',
        // Resources
        'programme': 'null'
    }
    */
    
    '2019': {
        // Pictures
        'cover-image': curtains,
        'poster': revue2019,
        'cast-picture': revue2019Cast,
        // Text
        'title': 'GAME OF LOANS',
        'subtitle': 'Auckland Engineering Revue 2019',
        'catch-phrase': 'When you play the Game of Loans, you win, or you default.',
        'location': 'SkyCity Theatre',
        'director': 'Alex Kennedy',
        'producer': 'Aorthi Afroza',
        'blurb': `When a sudden loss sends the student kingdom into disarray, the scramble 
                for power begins, and an undead threat emerges from the shadows. One thing's 
                for certain; the race for the Iron Loan is a matter of life and debt.`,
        'quote': '"Unbeatable!" - David Seymour (Dancing with the Stars 2018 Semi-Finalist)',
        // Resources
        'programme': programme2019
    },

    '2018': {
        // Pictures
        'cover-image': curtains,
        'poster': revue2018,
        'cast-picture': revue2018Cast,
        // Text
        'title': 'PIRATES OF THE CURRICULUM',
        'subtitle': 'Auckland Engineering Revue 2018',
        'catch-phrase': 'The content and delivery of this Revue is protected by copyright.',
        'location': 'SkyCity Theatre',
        'director': 'Henry Merton',
        'producer': 'Olivia Maxwell',
        'blurb': `When a mysterious kidnapping interrupts her very first lecture, budding engineer 
                Billie must team up with the unlikeliest of allies, the suspicious Zach Sparrow, 
                to rescue her friends and the faculty. Can they overcome their differences to fight 
                dark curses, derranged academics, and dizzyingly-handsome pirates before it's too late? 
                Since it's a comedy, yeah, probably - but you'll have to see the show to know for sure!`,
        'quote': '"Outstanding show!" - David Seymour (Dancing with the Stars 2018 Semi-Finalist)',
        // Resources
        'programme': programme2018
    },

    '2017': { 
        // Pictures
        'cover-image': curtains,
        'poster': revue2017,
        'cast-picture': revue2017Cast,
        // Text
        'title': '21 SYMONDS STREET',
        'subtitle': 'Auckland Engineering Revue 2017',
        'catch-phrase': 'Symonds are forever.',
        'location': 'SkyCity Theatre',
        'director': 'Jake Thomas',
        'producer': 'Olivia Maxwell',
        'blurb': `When a mysterious villain threatens the students of the Engineering department, 21 Symonds 
                Street is put on the case. Top agent James Brond must team up with bumbling techie Max Well to 
                save the University from imminent disaster. Can they learn to work together before it's too late? 
                Since it's a comedy, yeah, probably - but you'll have to see the show to know for sure!`,
        'quote': '"David Seymour should come to these!" - Engineering Revue Cast 2017',
        // Resources
        'programme': programme2017
    },

    '2016': { 
        // Pictures
        'cover-image': curtains,
        'poster': revue2016,
        'cast-picture': revue2016Cast,
        // Text
        'title': 'THE AVENGINEERS',
        'subtitle': 'Auckland Engineering Revue 2016',
        'catch-phrase': 'Unlike the actual franchise, you only have to watch one of these!',
        'location': 'SkyCity Theatre',
        'director': 'Duncan Bakke',
        'producer': 'Rachel Love',
        'blurb': `When the forces of evil and tyranny threaten the liveliehood of students in the Faculty of Engineering, 
                a brave few will rise from the shadows to fight them. They're all great when they work on assignments solo, 
                but will they be able to complete this group project, save the Engineering school, and still graduate on time? 
                Since it's a comedy, yeah, probably, but you'll have to come see the show to know for sure!`,
        'quote': '"Part One of a one-part series!" - Duncan Bakke (maybe)',
        // Resources
        'programme': programme2016
    },

    '2015': { 
        // Pictures
        'cover-image': curtains,
        'poster': revue2015,
        'cast-picture': curtains,
        // Text
        'title': 'HACK TO THE FUTURE',
        'subtitle': 'Auckland Engineering Revue 2015',
        'catch-phrase': "If there's one thing for sure, it's that no one calls the Engineering Revue chicken.",
        'location': 'The Maidment Theatre',
        'director': 'Duncan Bakke & Cam Rouse',
        'producer': 'Rachel Love & Matt Lie',
        'blurb': `Matty, a normal Engineering first-year, never has time for anything. Until one day, when he's not in his own time at all!
                Fisher and Paykel Healthcare presents an all-Engineering student cast in a journey through time and class, where relationship 
                drama is a matter of life and death! From the hit sci-fi classic Back to the Future comes this year's Engineering Revue: 
                HACK TO THE FUTURE!`,
        'quote': '"Wait a minute, Cam. Are you telling me you built a theatre show... out of ~100 engineering students?" - Duncan Bakke (maybe)',
        // Resources
        'programme': 'null'
    },

    '2014': { 
        // Pictures
        'cover-image': curtains,
        'poster': revue2014,
        'cast-picture': curtains,
        // Text
        'title': 'THE WIZARD OF COS',
        'subtitle': 'Auckland Engineering Revue 2014',
        'catch-phrase': "Why you ask? Hmm... just 'cos.",
        'location': 'The Maidment Theatre',
        'director': 'Janet Van',
        'producer': 'Sybille Van Howe & Harriet Ingham',
        'blurb': `In the sixth annual Auckland Engineering Revue, the 100% University-of-Auckland based cast attacks a timeless classic
                in the hopes of not ruining that classic, and their reputation, for years to come! In this spin-off parody of "The Wizard
                of Oz", you get the engineering-related twist of comedy you never knew you needed!`,
        'quote': `"Some people without brains do an awful lot of talking, don't you think?"`,
        // Resources
        'programme': 'null'
    },

    '2013': { 
        // Pictures
        'cover-image': curtains,
        'poster': revue2013,
        'cast-picture': curtains,
        // Text
        'title': 'FINDING NANO',
        'subtitle': 'Auckland Engineering Revue 2013',
        'catch-phrase': 'null',
        'location': 'Raye Freedman Arts Centre',
        'director': 'Janet Van',
        'producer': 'Luke Harries',
        'blurb': `In the fifth annual Auckland Engineering Revue, the 100% University-of-Auckland based cast attacks a wonderful animated
                childrens film in the hopes of not ruining it for their mature audience! In this spin-off parody of "Finding Nemo", you 
                get the engineering-related twist of comedy you never knew you needed!`,
        'quote': '"Just keep swimming!"',
        // Resources
        'programme': 'null'
    },

    '2012': { 
        // Pictures
        'cover-image': curtains,
        'poster': revue2012,
        'cast-picture': curtains,
        // Text
        'title': 'THE ION KING',
        'subtitle': 'Auckland Engineering Revue 2012',
        'catch-phrase': 'null',
        'location': 'The Maidment Theatre',
        'director': 'Mahmood Hikmet & Nick Corlett',
        'producer': 'Emma Foulkes',
        'blurb': `In the fourth annual Auckland Engineering Revue, the 100% University-of-Auckland based cast attacks a wonderful animated
                childrens film in the hopes of not ruining it for their mature audience! In this spin-off parody of "The Lion King", you 
                get the engineering-related twist of comedy you never knew you needed!`,
        'quote': 'null',
        // Resources
        'programme': 'null'
    },

    '2011': { 
        // Pictures
        'cover-image': curtains,
        'poster': revue2011,
        'cast-picture': curtains,
        // Text
        'title': 'DEGREES OF UNIFORMITY',
        'subtitle': 'Auckland Engineering Revue 2011',
        'catch-phrase': 'The FOURTH Engineering Revue EVER!',
        'location': 'The Maidment Theatre',
        'director': 'Mahmood Hikmet & Nick Corlett',
        'producer': 'Andrew & Sophia Wang',
        'blurb': `In the third annual Auckland Engineering Revue, the 100% University-of-Auckland based cast attacks a social stigma so
                scary and untamed, you never even CONSIDERED what it would be like if there was an engineering twist put on it! Will the
                cast succeed in not ruining their reputation for a third year running? You'll have to come along and find out!`,
        'quote': '"We just LOVED it!" - Parents of the cast',
        // Resources
        'programme': 'null'
    },

    '2010': { 
        // Pictures
        'cover-image': curtains,
        'poster': revue2010,
        'cast-picture': curtains,
        // Text
        'title': 'THE BLACK BOX',
        'subtitle': 'Auckland Engineering Revue 2010',
        'catch-phrase': 'The THIRD Engineering Revue EVER!',
        'location': 'The Maidment Theatre',
        'director': 'Mahmood Hikmet, Danvar Barganza, & Iain Dunning',
        'producer': 'Sanna',
        'blurb': `It's not Stan Walker's recent banger we're talking about, it's the third anual Auckland Engineering Revue! We are back
                for a third year running, and better than ever! This year we're making you ask questions like "What's in the box?", or
                "Is this one about planes or something?", or "Are they struggling to write a blurb again?". It is a strong MAYBE to all of
                your questions! Come along to see what we have in store for you this year.`,
        'quote': '"Where is that little black box?" - Someone, somewhere in the ocean',
        // Resources
        'programme': 'null'
    },

    '2009': { 
        // Pictures
        'cover-image': curtains,
        'poster': revue2009,
        'cast-picture': curtains,
        // Text
        'title': 'NZs NEXT MOST SMARTEST TOP ENGINEER WITH THE STARS',
        'subtitle': 'Auckland Engineering Revue 2009',
        'catch-phrase': 'The SECOND Engineering Revue EVER!',
        'location': 'The Maidment Theatre',
        'director': 'Danvar Braganza',
        'producer': 'the executive team',
        'blurb': `In the second annual Auckland Engineering Revue, the 100% University-of-Auckland based cast attacks so many different evening
                television shows that you just have to wonder what the initial idea was for this show? Nonetheless, they always manage to pull
                something awesome out of the bag! Well, they did last year at least, and we're still going! Watch our show to find out more!`,
        'quote': `"We just didn't know we needed an engineering spin-off of the shows we love!" - The audience (probably)`,
        // Resources
        'programme': 'null'
    },

    '2008': {
        // Pictures
        'cover-image': curtains,
        'poster': revue2008,
        'cast-picture': curtains,
        // Text
        'title': 'A WORLD WITHOUT ENGINEERS',
        'subtitle': 'Auckland Engineering Revue 2008',
        'catch-phrase': 'The FIRST Engineering Revue EVER!',
        'location': 'The Maidment Theatre',
        'director': 'Athena',
        'producer': 'the executive team',
        'blurb': `Welcome, come one come all, to the first Auckland Engineering Revue! It is only right that for our first show, we show you the
                worst case scenario ever possible! Come and watch our first ever show, in which our 100% University-of-Auckland based cast performs,
                for three-nights-only, a show that you will never forget!`,
        'quote': '"This truly is the best Auckland Engineering Revue to date!" - Everyone, ever!',
        // Resources
        'programme': 'null'
    },

    'null': { 
        // Pictures
        'cover-image': curtains,
        'poster': curtains,
        'cast-picture': curtains,
        // Text
        'title': 'null',
        'subtitle': 'null',
        'catch-phrase': 'null',
        'location': 'null',
        'director': 'null',
        'producer': 'null',
        'blurb': 'null',
        'quote': 'null',
        // Resources
        'programme': 'null'
    }

}

export default data