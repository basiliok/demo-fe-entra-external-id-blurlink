import {
    type AccountInfo,
    type EventMessage,
    EventType,
    PublicClientApplication,
    type RedirectRequest,
    type SilentRequest,
} from '@azure/msal-browser';
import { env } from './env';

export const msalInstance = new PublicClientApplication({
    auth: {
        clientId: env.VITE_ENTRA_CLIENT_ID,
        authority: env.VITE_ENTRA_AUTHORITY,
        redirectUri: '/redirect',
        postLogoutRedirectUri: '/',
    },
    cache: {
        cacheLocation: 'sessionStorage',
    },
});

export const loginRequest: RedirectRequest = {
    scopes: [],
};

export const apiRequest: SilentRequest = {
    scopes: [env.VITE_API_SCOPE_READ],
};

const setSignedInAccountAsActive = (event: EventMessage) => {
    const signedInAccount = event.payload as AccountInfo;
    msalInstance.setActiveAccount(signedInAccount);
};

msalInstance.addEventCallback(setSignedInAccountAsActive, [EventType.LOGIN_SUCCESS]);
