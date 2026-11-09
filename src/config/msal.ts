import {
    type AccountInfo,
    type EventMessage,
    EventType,
    PublicClientApplication,
    type RedirectRequest,
    type SilentRequest,
} from '@azure/msal-browser';
import { env } from './env';

const entraAuthority = `https://${env.VITE_ENTRA_TENANT_SUBDOMAIN}.ciamlogin.com/${env.VITE_ENTRA_TENANT_ID}`;
const apiReadScope = `api://${env.VITE_ENTRA_API_CLIENT_ID}/Blurlinks.Read`;

export const msalInstance = new PublicClientApplication({
    auth: {
        clientId: env.VITE_ENTRA_SPA_CLIENT_ID,
        authority: entraAuthority,
        redirectUri: '/redirect',
        postLogoutRedirectUri: '/redirect',
    },
    cache: {
        cacheLocation: 'sessionStorage',
    },
});

export const loginRequest: RedirectRequest = {
    scopes: [],
};

export const apiRequest: SilentRequest = {
    scopes: [apiReadScope],
};

const setSignedInAccountAsActive = (event: EventMessage) => {
    const signedInAccount = event.payload as AccountInfo;
    msalInstance.setActiveAccount(signedInAccount);
};

msalInstance.addEventCallback(setSignedInAccountAsActive, [EventType.LOGIN_SUCCESS]);
