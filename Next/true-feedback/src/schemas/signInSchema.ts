import {z} from 'zod';

//identifire here is denoted to the username as per the good practice
export const signInSchema = z.object({
    identifier : z.string(),
    password: z.string()
})