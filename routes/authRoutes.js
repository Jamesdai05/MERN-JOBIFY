import express from "express";
import { registration,login, logout } from "../controllers/userController.js";
import { userInputValidator } from "../middleWare/validationMiddleware.js";
import { registrationValidator } from "../validators/userValidator.js";


const router=express.Router();




// registration
// @desc  registration
// @route POST /api/auth/register
// @access public

router.post("/register",userInputValidator(registrationValidator),registration);

// @desc  login && get token
// @route POST /api/auth/login
// @access public
router.post("/login",login);

// @desc  logout / clear cookies
// @route POST /api/auth/logout
// @access private
router.post("/logout",logout);

export default router;