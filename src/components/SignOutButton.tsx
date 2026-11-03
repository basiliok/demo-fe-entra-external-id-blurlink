import { useMsal } from '@azure/msal-react';

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleSignOut = () => {
        instance.logoutRedirect().catch((error: unknown) => console.error(error));
    };

    return (
        <button type="button" onClick={handleSignOut}>
            Cerrar sesión
        </button>
    );
};
