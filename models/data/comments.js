import "dotenv/config.js";
import '../../config/database.js';
import Comment from '../Comment.js';

const comments = [
    {
        chapterid_: "67493636eeb55fe6d47863b7",
        author_id: "67493603622fcc71c3ada778", 
        company_id: null,
        message: "This chapter was very interesting, especially the part about historical events.",
    },
    {
        chapterid_: "67493636eeb55fe6d47863b7",
        author_id: null, 
        company_id: "6749361cf762c8d805411c03",
        message: "I really liked the narrative, although I would have preferred more details about the characters.",
    },
    {
        chapterid_: "67493636eeb55fe6d47863b7",
        author_id: "67493603622fcc71c3ada779",
        company_id: null,
        message: "This chapter seemed very technical and difficult to follow, but the information was valuable.",
    },
];


console.log(comments);

Comment.insertMany(comments)
    .then(() => {
        console.log("Comments inserted successfully");
        process.exit();
    })
    .catch(error => {
        console.error("Error inserting comments: ", error);
        process.exit(1);
    });