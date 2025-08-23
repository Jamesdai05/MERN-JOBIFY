import Joi from "joi";



const registrationValidator=Joi.object({
    name:Joi.string().trim().min(3).label("Name").required(),
    email:Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .label("Email").required(),
    password:Joi.string().min(6).label("Password").required(),
    location:Joi.string().label("Location").required(),
    confirmPassword:Joi.string().equal(Joi.ref("password")).required()
        .label('Confirm password')
        .messages({ 'any.only': '{{#label}} does not match' }) //to pop a message during development.
})

const loginValidator=Joi.object({
    email:Joi.string().trim().email({minDomainSegments:2,tlds:{allow:['com','net']}}).label('Email').required(),
    password:Joi.string().min(6).label("Password").required(),
})

export {registrationValidator,loginValidator};