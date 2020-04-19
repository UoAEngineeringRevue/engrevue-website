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


const data = {
    /* Structure of this data:
    '2019': { // replace with year
        // Pictures
        'cover-image':
        'poster':
        'cast-picture':
        // Text
        'title':
        'subtitle':
        'catch-phrase':
        'location':
        'director':
        'producer':
        'blurb':
        'quote':
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
        'quote': 'Unbeatable - David Seymour (Dancing with the Stars 2018 Semi-Finalist)'
    },

    'null': { // If no year defined.
        // Pictures
        'cover-image': curtains,
        'poster': curtains,
        'cast-picture': curtains,
        // Text
        'title': 'PREVIOUS REVUES',
        'subtitle': `Did you know we've been going for over 10 years! See what we've been up to "recently"...`,
        'catch-phrase': 'No year defined',
        'location': 'No year defined',
        'director': 'No year defined',
        'producer': 'No year defined',
        'blurb': 'No year defined',
        'quote': 'No year defined',
    }
}

export default data