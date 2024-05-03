import joi from 'joi';

export const signinSchema = joi.object({
    name: joi.string().min(4).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
})