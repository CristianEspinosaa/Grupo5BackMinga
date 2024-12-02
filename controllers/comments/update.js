import Comment from '../../models/Comment.js';

let updateComment = async (req, res, next) => {
    try {
        let { _id } = req.body; // Espera el ID en el cuerpo de la solicitud
        let commentData = req.body; // Los datos de la actualización
        
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