import Reaction from "../../models/Reaction.js";

let allReactions = async (req, res, next) => {
    try {
        let all = await Reaction.find();

        return res.status(200).json({
            success: true,
            message: "Reactions retrieved successfully",
            response: all,
        });
    } catch (error) {
        next(error);
    }
};

let reactionById = async (req, res, next) => {
    try {
        let valueID = req.params.valueID;
        let result = await Reaction.findById(valueID);

        if (result) {
            return res.status(200).json({
                success: true,
                message: 'Reaction found successfully',
                response: result,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: `No reaction found with ID: ${valueID}`,
                response: null,
            });
        }
    } catch (error) {
        next(error);
    }
};

let reactionsByMangaId = async (req, res, next) => {
    try {
        let query = { manga_id: req.params.mangaId };
        let reactions = await Reaction.find(query);

        if (reactions.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Reactions retrieved successfully.",
                response: reactions,
            });
        }

        return next(createError(404, 'No reactions found for this manga.'));
    } catch (error) {
        next(error);
    }
};


export { allReactions, reactionById, reactionsByMangaId };