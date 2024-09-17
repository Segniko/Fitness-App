import { useEffect } from 'react';

const Signup = () => {
    useEffect(() => {
        // Redirect to the external sign-up URL
        window.location.href = 'https://absolute-swan-22.accounts.dev/sign-up';
    }, []);

    return null; // Render nothing
};

export default Signup;
