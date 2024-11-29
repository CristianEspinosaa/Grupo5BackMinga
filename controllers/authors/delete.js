import Author from "../../models/Author.js";

let deleteAuthor = async (req, res, next) => {
    try {
        const { id } = req.params;
        let deletedAuthor = await Author.findByIdAndDelete(id);

        if (!deletedAuthor) {
            return res.status(404).json({
                success: false,
                message: "Author not found.",
                response: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Author deleted successfully.",
            response: deletedAuthor,
        });
    } catch (error) {
        next(error);
    }
};

export { deleteAuthor };