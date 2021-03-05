import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';


export default NextAuth({
    providers: [
        Providers.Google({
            site: 'https://server-test-netc.netcount.id' || 'http://localhost: 3000',
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
        }),
    ],
    callbacks: {
        async session(session, user) {
            return user;
        }
    }
});