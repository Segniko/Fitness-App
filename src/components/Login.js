import { useEffect } from 'react';

const Login = () => {
    useEffect(() => {
        // Redirect to the external login URL
        window.location.href = 'https://absolute-swan-22.accounts.dev/sign-in';
    }, []);

    return null; // Render nothing
};

export default Login;
