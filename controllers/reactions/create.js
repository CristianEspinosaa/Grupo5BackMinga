import Reaction from '../../models/Reaction.js';

let create = async (req, res, next) => {
    try {
        let reaction = req.body;
        let newReaction = await Reaction.create(reaction);
        return res.status(201).json({
            success: true,
            message: "Reaction created successfully.",
            response: newReaction,
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let reactions = req.body;
        let allReactions = await Reaction.insertMany(reactions);

        return res.status(201).json({
            success: true,
            message: "Reactions created successfully.",
            response: allReactions,
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };