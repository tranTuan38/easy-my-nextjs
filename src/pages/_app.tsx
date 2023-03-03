import '@/styles/globals.css';
import Layout from '@/components/layouts';
import type { AppProps } from 'next/app';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </Layout>
    );
}
