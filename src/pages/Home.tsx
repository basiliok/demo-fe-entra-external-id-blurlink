import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { SignInButton, SignOutButton, SignUpButton, WelcomeMessage } from '../components';

export const Home = () => {
    return (
        <section id="center">
            <h1>demo-fe-entra-external-id-blurlink</h1>
            <UnauthenticatedTemplate>
                <SignInButton />
                <SignUpButton />
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>
                <WelcomeMessage />
                <SignOutButton />
            </AuthenticatedTemplate>
        </section>
    );
};
