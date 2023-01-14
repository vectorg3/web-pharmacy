import React from 'react';
const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;
    return (
        <div className='log_form form'>
            <div className='form__wrapper'>
                <div className='title'>
                    {hasAccount ? 'Вход' : 'Регистрация'}
                </div>

                <div className='form__email form__group'>
                    <label>Почта</label>
                    <input
                        placeholder='example@email.ru'
                        type='email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        autoFocus
                    />
                </div>
                <div className='form__password form__group'>
                    <label>Пароль</label>
                    <input
                        placeholder='Пароль'
                        type='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                {hasAccount ? (
                    <>
                        <button
                            className='form__button'
                            type='button'
                            onClick={() => handleLogin()}
                        >
                            Вход
                        </button>
                        <div className='form__help'>
                            Еще не зарегистрировались? Нажмите, чтобы{' '}
                            <span
                                className='log_link'
                                onClick={() => setHasAccount(!hasAccount)}
                            >
                                зарегистрироваться
                            </span>
                        </div>
                    </>
                ) : (
                    <>
                        <button
                            className='form__button'
                            type='button'
                            onClick={() => handleSignup()}
                        >
                            Регистрация
                        </button>
                        <div className='form__help'>
                            Уже есть аккаунт? Нажмите, чтобы{' '}
                            <span
                                className='log_link'
                                onClick={() => setHasAccount(!hasAccount)}
                            >
                                войти
                            </span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
