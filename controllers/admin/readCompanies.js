import Company from "../../models/Company";

let allCompanies = async (req, res, next) => {
    try {
        let companies = await Company.find();

        if (companies.length > 0) {
            let activeCompanies = companies.filter(company => company.active);
            let inactiveCompanies = companies.filter(company => !company.active);

            return res.status(200).json({
                success: true,
                message: "Companies found successfully",
                response: {
                    activeCompanies,
                    inactiveCompanies
                }
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "No companies found"
            });
        }
    } catch (error) {
        next(error);
    }
};

export { allCompanies };
