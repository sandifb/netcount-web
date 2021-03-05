import Head from 'next/head';
import { LoginHooks } from 'components';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Auth Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Auth Login </h1>

            <LoginHooks/>
           
        </div>
    );
}