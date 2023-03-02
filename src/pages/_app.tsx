import '@/styles/globals.css';
import Layout from '@/components/layouts';
import type { AppProps } from 'next/app';
import { atom, RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </RecoilRoot>
    );
}
