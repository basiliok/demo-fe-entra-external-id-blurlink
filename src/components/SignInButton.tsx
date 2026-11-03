import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../config/msal';

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleSignIn = () => {
        instance.loginRedirect(loginRequest).catch((error: unknown) => console.error(error));
    };

    return (
        <button type="button" onClick={handleSignIn}>
            Iniciar sesión
        </button>
    );
};
