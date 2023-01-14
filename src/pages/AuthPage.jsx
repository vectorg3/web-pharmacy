import React, { useState, useEffect } from 'react';
import fire from '../fire';
import Login from '../components/Login';
import Hero from '../components/Hero';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AuthPage = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(true);
    const MySwal = withReactContent(Swal);

    const allertError = (errorCode) => {
        switch (errorCode) {
            case 'auth/email-already-in-use':
                MySwal.fire({
                    icon: 'error',
                    text: 'Этот email уже занят!',
                    confirmButtonText: 'Хорошо',
                    confirmButtonColor: '#37A3A5',
                });
                break;
            case 'auth/invalid-email':
                MySwal.fire({
                    icon: 'error',
                    text: 'Неправильно указан email',
                    confirmButtonText: 'Хорошо',
                    confirmButtonColor: '#37A3A5',
                });
                break;
            case 'auth/weak-password':
                MySwal.fire({
                    icon: 'error',
                    text: 'Минимальная длинна пароля - 6 символов',
                    confirmButtonText: 'Хорошо',
                    confirmButtonColor: '#37A3A5',
                });
                break;
            case 'auth/wrong-password':
                MySwal.fire({
                    icon: 'error',
                    text: 'Неправильно указан пароль!',
                    confirmButtonText: 'Хорошо',
                    confirmButtonColor: '#37A3A5',
                });
                break;
            case 'auth/user-not-found':
                MySwal.fire({
                    icon: 'error',
                    text: 'Указанный пользователь не зарегистрирован',
                    confirmButtonText: 'Хорошо',
                    confirmButtonColor: '#37A3A5',
                });
                break;
        }
    };

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };
    const clearError = () => {
        setEmailError('');
        setPasswordError('');
    };

    const handleLogin = () => {
        clearError();
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                allertError(err.code);
            });
    };
    const handleSignup = () => {
        clearError();
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                allertError(err.code);
            });
    };
    const handleLogout = () => {
        fire.auth().signOut();
    };
    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser('');
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);
    return (
        <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
        />
    );
};
export default AuthPage;
