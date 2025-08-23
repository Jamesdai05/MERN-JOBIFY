import Joi from "joi";



const userValidator=Joi.object({
    name:Joi.string().trim().min(3).label("Name").required(),
    email:Joi.string.trim().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .label("Email").required().unique(),
    password:Joi.string().min(6).label("Password").required(),
})

export {userValidator};