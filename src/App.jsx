import React, { useState, useEffect } from 'react';
import AuthPage from './pages/AuthPage';
import Hero from './components/Hero';
import fire from './fire';
import './App.css';
import { ContextProvider } from './context';

const App = () => {
    const [user, setUser] = useState('');
    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser('');
            }
        });
    };
    useEffect(() => {
        authListener();
    }, []);
    const handleLogout = () => {
        fire.auth().signOut();
    };
    console.log(user);
    return (
        <ContextProvider>
            {user ? <Hero handleLogout={handleLogout} /> : <AuthPage />}
        </ContextProvider>
    );
};

export default App;
