import Reaction from '../../models/Reaction.js';

let updateReaction = async (req, res, next) => {
    try {
        let { _id } = req.body;
        let reactionData = req.body;
        
        let updatedReaction = await Reaction.findByIdAndUpdate(_id, reactionData, { 
            new: true, 
            runValidators: true 
        });

        if (!updatedReaction) {
            return res.status(404).json({
                success: false,
                message: 'Reaction not found.',
                response: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Reaction updated successfully.',
            response: updatedReaction,
        });
    } catch (error) {
        next(error);
    }
};

export { updateReaction };