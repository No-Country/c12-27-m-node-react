import { Router } from "express";
import { deleteSupplier, getSupplier, getSuppliers, postSupplier, updateSupplier } from "../controllers/supplier.controller";
const router = Router();

/**
 * http://localhost:3000/supplier
 */

router.get("/:id", getSupplier);
router.get("/", getSuppliers);
router.post("/", postSupplier);
router.put("/:id", updateSupplier);
router.delete("/:id", deleteSupplier);



export { router };
