import { PromptValue } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../config/msal';

export const SignUpButton = () => {
    const { instance } = useMsal();

    const handleSignUp = () => {
        instance
            .loginRedirect({ ...loginRequest, prompt: PromptValue.CREATE })
            .catch((error: unknown) => console.error(error));
    };

    return (
        <button type="button" onClick={handleSignUp}>
            Registrarse
        </button>
    );
};
