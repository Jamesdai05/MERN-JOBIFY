import jwt from "jsonwebtoken";

const generationToken=(res,userId)=>{

    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"10d",
    });

    res.cookie("jwt",token,{
        httpOnly:true,
        secure:process.env.NOD_DEV!=="development",
        sameSite: process.env.NODE_ENV === 'development' ? 'strict' : 'none',
        maxAge:10 * 60 * 24 * 60 * 1000,
    })

}

export default generationToken;