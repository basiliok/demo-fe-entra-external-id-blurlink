import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { SignInButton, SignOutButton, SignUpButton, WelcomeMessage } from '../components';

export const Home = () => {
    return (
        <>
            <h1>Blurlink</h1>

            <section>
                <UnauthenticatedTemplate>
                    <SignInButton />
                    <SignUpButton />
                </UnauthenticatedTemplate>
                <AuthenticatedTemplate>
                    <WelcomeMessage />
                    <SignOutButton />
                </AuthenticatedTemplate>
            </section>
        </>
    );
};
