import { getPosts } from '@/request';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostIdPageProps {
    idData: {
        title: string;
        body: string;
    };
}

export default function PostIdPage({ idData }: PostIdPageProps) {
    const router = useRouter();

    if (router.isFallback) return <div>Loading...</div>;

    return (
        <div className="container xl:max-w-[1200px] mt-6 lg:max-w-[984px] px-3 md:px-4 h-screen">
            <div className="p-4">
                {idData.title} -- {idData.body}
            </div>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const prevData: Awaited<Array<{ id: number }>> = await getPosts(5);
    const paths: Array<{ params: { id: string } }> = prevData.map((path) => ({ params: { id: path.id.toString() } }));

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    try {
        const { params } = context;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
        const data = res.data;

        return {
            props: {
                idData: data,
            },
            revalidate: 1,
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};
