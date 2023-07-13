import { Router } from "express";
import { deleteSuperUser, getSuperUser, getSuperUsers, postSuperUser, updateSuperUser, loginSuperUser } from "../controllers/superUser.controller";
const router = Router();

/**
 * http://localhost:3000/superUser
 */

router.post("/login", loginSuperUser);
router.get("/:id", getSuperUser);
router.get("/", getSuperUsers);
router.post("/", postSuperUser);
router.put("/:id", updateSuperUser);
router.delete("/:id", deleteSuperUser);



export { router };
