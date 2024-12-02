import { Router } from "express";
import { allCompanies, companyById } from "../controllers/companies/read.js";
import { create, createMany } from "../controllers/companies/create.js";
import { updateCompany } from "../controllers/companies/update.js";
import { deleteCompany } from "../controllers/companies/delete.js";
import validator from "../middlewares/validator.js";
import schema from "../schemas/company.js";

const router = Router()

router.get('/all', allCompanies)
router.get('/id/:id', companyById)

router.post('/create', validator(schema), create)
router.post('/createMany/', createMany)

router.put('/update/:id', validator(schema), updateCompany)

router.delete('/delete/:id', deleteCompany)

export default router