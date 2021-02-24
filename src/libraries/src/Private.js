import { Login } from 'components';

const withAuth = Component => {
    const Auth = (props) => {
        // Login data added to props via redux-store (or use react context for example)
        const { user } = props;
        // If user is not logged in, return login component
        if (!user) {
            return (
                <Login/>
            );
        }
        // If user is logged in, return original component
        return (
            <Component {...props} />
        );
    };
    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }
    return Auth;
};

export default withAuth;
