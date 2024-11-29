import { Schema, model } from "mongoose";

let collection = 'reactions';

let schema = new Schema({
    manga_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'Chapter', 
        required: true 
    },
    author_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'Author', 
        required: false 
    },
    company_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'Company', 
        required: false 
    },
    reaction: { 
        type: String, 
        required: true 
    },
}, {
    timestamps: true
});

let Reaction = model(collection, schema);
export default Reaction;