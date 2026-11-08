import { useMsal } from '@azure/msal-react';

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleSignOut = () => {
        const activeAccount = instance.getActiveAccount();
        instance.logoutRedirect({ account: activeAccount }).catch((error: unknown) => console.error(error));
    };

    return (
        <button type="button" onClick={handleSignOut}>
            Cerrar sesión
        </button>
    );
};
