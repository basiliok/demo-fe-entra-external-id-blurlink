import { z } from 'zod';

export const currentUserSchema = z.object({
    name: z.string().optional(),
    givenName: z.string().optional(),
    familyName: z.string().optional(),
    email: z.string().optional(),
});
