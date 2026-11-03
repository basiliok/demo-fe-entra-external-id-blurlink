import { z } from 'zod';

const envSchema = z.object({
    VITE_ENTRA_CLIENT_ID: z.guid(),
    VITE_ENTRA_AUTHORITY: z.url(),
    VITE_API_BASE_URL: z.url(),
    VITE_API_SCOPE_READ: z.string().startsWith('api://'),
});

export const env = envSchema.parse(import.meta.env);
