import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import './App.css';
import { SignInButton, SignOutButton, SignUpButton, WelcomeMessage } from './components';

export const App = () => {
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
