import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";
import { BadRequestError } from "./errorMiddleware.js";


const protectRoute=async(req,res,next)=>{

    const token=req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select("-password");

            if (!req.user) {
                res.status(401);
                return next(new Error("Authentication failed - User not found"));
            }

            next();
        } catch (err) {
            console.error(err);
            res.status(401);
            return next(new Error("Authentication failed - Invalid or expired token"));
        }
    }else{
        res.status(401);
        return next(new Error("Authentication required - Please log in to access this resource"));
    }
}


//admin middleware

const admin=(req,res,next)=>{
    const role=req.user.role;
    if (!req.user) {
        res.status(401);
        return next(new Error("Unauthorized: No user found in request"));
  }

    if(req.user && role ==="admin"){
        return next()
    }
    res.status(401)

    return next(new Error("Authentication required - Please log in as admin!"));
}

const testAccountCheck=(req,res,next)=>{
    // console.log("testing testAccount")
    // console.log(req.user)
    // to check the user id whether is equal to the id of test user
    if(String(req.user._id) === "68ccf091a248c70493307fcc") throw new BadRequestError("Demo user,read only!")
    next()
}


export {protectRoute,admin,testAccountCheck}