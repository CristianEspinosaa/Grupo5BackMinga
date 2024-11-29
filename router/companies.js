import { Router } from "express";
import { allCompanies, companyById } from "../controllers/companies/read.js";
import { create, createMany } from "../controllers/companies/create.js";
import { updateCompany } from "../controllers/companies/update.js";
import { deleteCompany } from "../controllers/companies/delete.js";

const router = Router()

router.get('/all', allCompanies)
router.get('/id/:id', companyById)

router.post('/create', create)
router.post('/createMany/', createMany)

router.put('/update/:id', updateCompany)

router.delete('/delete/:id', deleteCompany)

export default router