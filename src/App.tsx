import { MsalProvider } from '@azure/msal-react';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import { msalInstance } from './config/msal';
import { Home, RedirectBridge } from './pages';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/redirect" element={<RedirectBridge />} />
                <Route
                    path="/"
                    element={
                        <MsalProvider instance={msalInstance}>
                            <Home />
                        </MsalProvider>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
