import { getStatistics,getUserProfile,updateUserProfile } from "../controllers/userController.js";
import express from 'express';
import { admin, protectRoute } from "../middleWare/authMiddleware.js";
import upload from "../middleWare/uploadMiddleware.js";
const router=express.Router();




router.get("/profile",protectRoute,getUserProfile);

router.patch("/profile/edit",upload.single("avatar"),protectRoute,updateUserProfile);




//admin
router.get("/admin/stats",protectRoute,admin,getStatistics);




export default router;