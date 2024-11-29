import Company from "../../models/Company.js";

let deleteCompany = async (req, res, next) => {
    try {
        const { id } = req.params;
        let deletedCompany = await Company.findByIdAndDelete(id);

        if (!deletedCompany) {
            return res.status(404).json({
                success: false,
                message: "Company not found.",
                response: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Company deleted successfully.",
            response: deletedCompany,
        });
    } catch (error) {
        next(error);
    }
};

export { deleteCompany };
