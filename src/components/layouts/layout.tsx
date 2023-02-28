import { Header } from '@/components';
import Head from 'next/head';
import React, { Suspense } from 'react';
import Footer from '../Footer';
import Loading from './loading';

export interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>Easy Next Web</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Suspense fallback={<Loading />}>
                <main>{children}</main>
            </Suspense>
            <Footer />
        </>
    );
}
