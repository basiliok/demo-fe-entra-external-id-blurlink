import {
    type AccountInfo,
    type EventMessage,
    EventType,
    PublicClientApplication,
    type RedirectRequest,
} from '@azure/msal-browser';

export const msalInstance = new PublicClientApplication({
    auth: {
        clientId: import.meta.env.VITE_ENTRA_CLIENT_ID,
        authority: import.meta.env.VITE_ENTRA_AUTHORITY,
        redirectUri: '/redirect.html',
        postLogoutRedirectUri: '/',
    },
    cache: {
        cacheLocation: 'sessionStorage',
    },
});

export const loginRequest: RedirectRequest = {
    scopes: [],
};

const setSignedInAccountAsActive = (event: EventMessage) => {
    const signedInAccount = event.payload as AccountInfo;
    msalInstance.setActiveAccount(signedInAccount);
};

msalInstance.addEventCallback(setSignedInAccountAsActive, [EventType.LOGIN_SUCCESS]);
