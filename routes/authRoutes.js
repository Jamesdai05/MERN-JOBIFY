import express from "express";
import { registration,login } from "../controllers/userController.js";
import { userInputValidator } from "../middleWare/validationMiddleware.js";
import { registrationValidator } from "../validators/userValidator.js";

const router=express.Router();




// registration

router.post("/register",userInputValidator(registrationValidator),registration);

// log in
router.post("/login",login);


export default router;