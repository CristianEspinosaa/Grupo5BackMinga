import Comment from "../../models/Comment.js";

let allComments = async (req, res, next) => {
    try {
        let all = await Comment.find();

        return res.status(200).json({
            success: true,
            message: "Comments retrieved successfully",
            response: all,
        });
    } catch (error) {
        next(error);
    }
};

let commentById = async (req, res, next) => {
    try {
        let valueID = req.params.valueID;
        let result = await Comment.findById(valueID);

        if (result) {
            return res.status(200).json({
                success: true,
                message: 'Comment found successfully',
                response: result,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: `No comment found with ID: ${valueID}`,
                response: null,
            });
        }
    } catch (error) {
        next(error);
    }
};

let commentByChapterId = async (req, res, next) => {
    try {
        let query = { chapter_id: req.params.chapterId };
        let comments = await Comment.find(query);

        if (comments.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Comments retrieved successfully.",
                response: comments,
            });
        }

        return next(createError(404, 'No comments found for this chapter.'));
    } catch (error) {
        next(error);
    }
};

export { allComments, commentById, commentByChapterId };