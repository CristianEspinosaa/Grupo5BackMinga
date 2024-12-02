import { Schema, model } from "mongoose";

let collection = 'comments';

let schema = new Schema({
    chapterid_: {
        type: Schema.Types.ObjectId, ref: 'Chapter', required: true
    },
    author_id: {
        type: Schema.Types.ObjectId, ref: 'Author', required: false
    },
    company_id: {
        type: Schema.Types.ObjectId, ref: 'Company', required: false
    },
    message: {
        type: String, required: true
    },
}, {
    timestamps: true
});

let Comment = model(collection, schema);
export default Comment;