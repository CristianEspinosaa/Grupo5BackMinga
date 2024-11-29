import Author from "../../models/Author.js";

let allAuthors = async (req, res, next) => {
    try {
        let all = await Author.find();

        return res.status(200).json({
            success: true,
            message: "Authors retrieved successfully",
            response: all
        });
    } catch (error) {
        next(error);
    }
};

let authorById = async (req, res, next) => {
    try {
        let authorId = req.params.id;
        let author = await Author.findById(authorId);

        if (author) {
            return res.status(200).json({
                success: true,
                message: "Author found successfully",
                response: author,
            });
        } else {
            return res.status(404).json({
                response: "Author not found with the specified ID"
            });
        }
    } catch (error) {
        next(error);
    }
};

export { allAuthors, authorById };