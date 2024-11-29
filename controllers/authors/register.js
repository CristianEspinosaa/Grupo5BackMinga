import Author from '../../models/Author.js';

let register = async (req, res, next) => {
    try {
        let author = req.body;
        let newAuthor = await Author.create(author);
        return res.status(201).json({
            success: true,
            message: "Author created successfully.",
            response: newAuthor
        });
    } catch (error) {
        next(error);
    }
};

let registerMany = async (req, res, next) => {
    try {
        let authors = req.body;
        let allAuthors = await Author.insertMany(authors);

        return res.status(201).json({
            success: true,
            message: "Authors created successfully.",
            response: allAuthors,
        });
    } catch (error) {
        next(error);
    }
};

export { register, registerMany };