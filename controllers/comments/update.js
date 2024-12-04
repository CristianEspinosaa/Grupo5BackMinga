import Comment from '../../models/Comment.js';

let updateComment = async (req, res, next) => {
    try {
        let { _id } = req.body;
        let commentData = req.body;
        
        let updatedComment = await Comment.findByIdAndUpdate(_id, commentData, { 
            new: true, 
            runValidators: true 
        });

        if (!updatedComment) {
            return res.status(404).json({
                success: false,
                message: 'Comment not found.',
                response: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Comment updated successfully.',
            response: updatedComment,
        });
    } catch (error) {
        next(error);
    }
};

export { updateComment };