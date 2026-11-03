import { useEffect, useState } from 'react';
import { InteractionRequiredAuthError, InteractionStatus, type IPublicClientApplication } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import type { z } from 'zod';
import { env } from '../config/env';
import { apiRequest } from '../config/msal';

const acquireApiAccessToken = async (instance: IPublicClientApplication) => {
    try {
        const authenticationResult = await instance.acquireTokenSilent(apiRequest);
        return authenticationResult.accessToken;
    } catch (error) {
        if (error instanceof InteractionRequiredAuthError) {
            await instance.acquireTokenRedirect(apiRequest);
        }
        throw error;
    }
};

const fetchFromApi = async <ResponseSchema extends z.ZodType>(
    path: string,
    accessToken: string,
    responseSchema: ResponseSchema,
): Promise<z.infer<ResponseSchema>> => {
    const response = await fetch(`${env.VITE_API_BASE_URL}${path}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!response.ok) {
        throw new Error(`Request to ${path} failed with status ${response.status}`);
    }

    const responseBody: unknown = await response.json();
    return responseSchema.parse(responseBody);
};

export const useApiFetch = <ResponseSchema extends z.ZodType>(path: string, responseSchema: ResponseSchema) => {
    const { instance, inProgress } = useMsal();
    const [data, setData] = useState<z.infer<ResponseSchema> | null>(null);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        if (inProgress !== InteractionStatus.None) {
            return;
        }

        let isCurrentRequest = true;

        acquireApiAccessToken(instance)
            .then((accessToken) => fetchFromApi(path, accessToken, responseSchema))
            .then((responseBody) => {
                if (isCurrentRequest) {
                    setData(responseBody);
                }
            })
            .catch((fetchError: unknown) => {
                if (isCurrentRequest) {
                    console.error(fetchError);
                    setError(fetchError);
                }
            });

        return () => {
            isCurrentRequest = false;
        };
    }, [instance, inProgress, path, responseSchema]);

    return { data, error };
};
