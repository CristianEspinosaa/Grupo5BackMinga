import Comment from '../../models/Comment.js';

let create = async (req, res, next) => {
    try {
        let comment = req.body;
        let newComment = await Comment.create(comment);
        return res.status(201).json({
            success: true,
            message: "Comment created successfully.",
            response: newComment
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let comments = req.body;
        let allComments = await Comment.insertMany(comments);

        return res.status(201).json({
            success: true,
            message: "Comments created successfully.",
            response: allComments,
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };