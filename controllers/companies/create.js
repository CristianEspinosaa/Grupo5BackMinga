import Company from '../../models/Company.js';

let create = async (req, res, next) => {
    try {
        let company = req.body;
        let newCompany = await Company.create(company);
        return res.status(201).json({
            success: true,
            message: "Company created successfully.",
            response: newCompany
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let companies = req.body;
        let allCompanies = await Company.insertMany(companies);

        return res.status(201).json({
            success: true,
            message: "Companies created successfully.",
            response: allCompanies,
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };