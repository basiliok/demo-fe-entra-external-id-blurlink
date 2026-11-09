import { z } from 'zod';

const envSchema = z.object({
    VITE_ENTRA_TENANT_SUBDOMAIN: z
        .string()
        .regex(/^[a-z0-9-]+$/i, 'Use only the subdomain, e.g. blurlinkdemo (without .onmicrosoft.com)'),
    VITE_ENTRA_TENANT_ID: z.guid(),
    VITE_ENTRA_SPA_CLIENT_ID: z.guid(),
    VITE_ENTRA_API_CLIENT_ID: z.guid(),
    VITE_API_BASE_URL: z.url(),
});

export const env = envSchema.parse(import.meta.env);
