import Company from "../../models/Company.js";

const toggleCompany = async (req, res, next) => {
    try {
        const { id, active } = req.body;        

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Missing 'id' in request body.",
            });
        }

        if (typeof active !== "boolean") {
            return res.status(400).json({
                success: false,
                message: "Invalid 'active' value. Must be true or false.",
            });
        }

        let company = await Company.findByIdAndUpdate(
            id,
            { active },
            { new: true }
        );

        if (!company) {
            return res.status(404).json({
                success: false,
                message: "Company not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: `Company ${active ? "activated" : "deactivated"} successfully`,
            response: company,
        });
    } catch (error) {
        next(error);
    }
};

export default toggleCompany;