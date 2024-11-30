import Manga from '../../models/Manga.js';

let create = async (req, res, next) => {
    try {
        let manga = req.body;
        let newManga = await Manga.create(manga);
        return res.status(201).json({
            success: true,
            message: "Manga created successfully.",
            response: newManga
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let mangas = req.body;
        let allMangas = await Manga.insertMany(mangas);

        return res.status(201).json({
            success: true,
            message: "Mangas created successfully.",
            response: allMangas,
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };