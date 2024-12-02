import Reaction from "../../models/Reaction.js";

let deleteReaction = async (req, res, next) => {
    try {
        const { id } = req.params;
        let deletedReaction = await Reaction.findByIdAndDelete(id);

        if (!deletedReaction) {
            return res.status(404).json({
                success: false,
                message: "Reaction not found.",
                response: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Reaction deleted successfully.",
            response: deletedReaction,
        });
    } catch (error) {
        next(error);
    }
};

export { deleteReaction };