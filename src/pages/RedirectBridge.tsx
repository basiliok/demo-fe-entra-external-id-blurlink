import { useEffect } from 'react';
import { broadcastResponseToMainFrame } from '@azure/msal-browser/redirect-bridge';

export const RedirectBridge = () => {
    useEffect(() => {
        broadcastResponseToMainFrame().catch((error: unknown) => console.error(error));
    }, []);

    return <p>Procesando autenticación...</p>;
};
