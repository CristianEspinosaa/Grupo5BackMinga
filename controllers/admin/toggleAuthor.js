import Author from "../../models/Author.js";

const toggleAuthor = async (req, res, next) => {
    try {
        const { id, active } = req.body;
        
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Missing 'id' in request body.",
            });
        }

        if (typeof active !== "boolean") {
            return res.status(400).json({
                success: false,
                message: "Invalid 'active' value. Must be true or false.",
            });
        }

        let author = await Author.findByIdAndUpdate(
            id,
            { active },
            { new: true }
        );

        if (!author) {
            return res.status(404).json({
                success: false,
                message: "Author not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: `Author ${active ? "activated" : "deactivated"} successfully`,
            response: author,
        });
    } catch (error) {
        next(error);
    }
};

export default toggleAuthor;