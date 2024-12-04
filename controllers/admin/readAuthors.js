import Author from "../../models/Author.js";

let allAuthors = async (req, res, next) => {
    try {
        let authors = await Author.find();

        if (authors.length > 0) {
            let activeAuthors = authors.filter(author => author.active);
            let inactiveAuthors = authors.filter(author => !author.active);

            return res.status(200).json({
                success: true,
                message: "Authors found successfully",
                response: {
                    activeAuthors,
                    inactiveAuthors
                }
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "No authors found"
            });
        }
    } catch (error) {
        next(error);
    }
}

export { allAuthors };