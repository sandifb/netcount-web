import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
    const [session, loadingSession] = useSession();
    const [loading, setLoading] = useState(false);
    const [subsList, setSubsList] = useState([]);

    return (
        <div>
            <Head>
                <title>NextAuth Test</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>NextAuth Test </h1>

            <h6>{process.env.GOOGLE_CLIENT_SECRET}</h6>
            <h6>{process.env.NEXT_PUBLIC_NEXTAUTH_URL} | NEXT_PUBLIC_NEXTAUTH_URL  </h6>

            {!session && (
                <>
                    <button onClick={() => signIn()}>Sign In</button>
                </>
            )}

            {session && (
                <>
                    <button onClick={() => signOut()}>Sign Out</button>
                    <pre>{JSON.stringify(session, null, 2)}</pre>
                </>
            )}
        </div>
    );
}