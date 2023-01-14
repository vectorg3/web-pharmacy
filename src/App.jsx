import React, { useState, useEffect } from 'react';
import AuthPage from './pages/AuthPage';
import Hero from './components/Hero';
import fire from './fire';
import './App.css';

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
    return <>{user ? <Hero handleLogout={handleLogout} /> : <AuthPage />}</>;
};

export default App;
