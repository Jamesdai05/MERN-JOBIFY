import { getStatistics,getUserProfile,updateUserProfile } from "../controllers/userController.js";
import express from 'express';
import { admin, protectRoute } from "../middleWare/authMiddleware.js";
const router=express.Router();




router.get("/profile",protectRoute,getUserProfile);

router.patch("/profile/edit",protectRoute,updateUserProfile);




//admin
router.get("/admin/stats",protectRoute,admin,getStatistics);




export default router;