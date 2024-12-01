import Manga from "../../models/Manga.js";

let allMangas = async (req, res, next) => {
    try {        
        const search = {};
        const page = parseInt(req.query.page) || 1;
        const limit = req.query.category_id || req.query.title ? 10 : 6;
        const skip = (page - 1) * limit;

        if (req.query.category_id) {
            search.category_id = { $in: req.query.category_id.split(',') };
        }
        if (req.query.title) {
            search.title = new RegExp(req.query.title.trim(), 'i');
        }
        
        const mangas = await Manga.find(search)
            .select('title cover_photo _id')
            .populate('category_id', 'name -_id')
            .sort({ title: 1 })
            .skip(skip)
            .limit(limit);

        if (mangas.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Mangas retrieved successfully.",
                response: mangas,
            });
        }
        return res.status(404).json({
            success: false,
            message: "Mangas not found.",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An error occurred while retrieving mangas.",
            error: error.message,
        });
    }
};

let mangaByAuthorId = async (req, res, next) => {
    try {
        const search = {};
        const page = parseInt(req.query.page) || 1;
        const limit = req.query.category_id ? 10 : 6;
        const skip = (page - 1) * limit;

        if (req.query.category_id) {
            search.category_id = { $in: req.query.category_id.split(',') };
        }
        
        let authorId = req.params.id;
        let mangas = await Manga.find({ author_id: authorId })
            .select('title cover_photo category_id author_id')
            .populate('author_id', 'name last_name -_id')
            .populate('category_id', 'name -_id')
            .sort({ title: 1 })
            .skip(skip)
            .limit(limit);
        
        if (mangas && mangas.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Mangas by author retrieved successfully.",
                response: mangas
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "No mangas found for the given author"
            });
        }
    } catch (error) {
        next(error);
    }
};

export { allMangas, mangaByAuthorId };