import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";


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
    // console.log(req.user);
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


export {protectRoute,admin}