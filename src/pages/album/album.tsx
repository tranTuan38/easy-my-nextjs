import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState, Suspense, useLayoutEffect } from 'react';

export interface AlbumProps {}

export interface IDataItem {
    userId: number;
    id: number;
    title: string;
}

export interface DataProps extends Array<IDataItem> {
    [i: number]: IDataItem;
}

export default function Album(props: AlbumProps) {
    const [data, setData] = useState<DataProps>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const limit = 10;

    useLayoutEffect(() => {
        const getData = async (limit?: number) => {
            try {
                setLoading(true);
                const res = await axios.get(
                    `https://jsonplaceholder.typicode.com/albums${limit ? `?_limit=${limit}` : ''}`,
                );
                setData(res.data);
                setTimeout(() => setLoading(false), 300);
            } catch (error) {
                console.log(error);
            }
        };

        getData(limit);
    }, []);

    return (
        <div
            className={`container xl:max-w-[1200px] mt-6 lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 lg:max-w-[984px] px-3 md:px-4 ${
                loading ? 'min-h-screen' : ''
            }`}
        >
            {loading && (
                <>
                    {[...Array(10)].map((item, index) => (
                        <div
                            key={index}
                            className="shadow-lg mb-6 xl:mb-0 bg-slate-300 rounded-2xl p-4 animate-pulse lg:h-[220px] lg:max-h-[250px]"
                            style={{
                                animationDelay: `${index * 0.05}s`,
                                animationDuration: '1s',
                            }}
                        ></div>
                    ))}
                </>
            )}

            {!loading &&
                data.map((item) => (
                    <div
                        key={item.id}
                        className="shadow-lg mb-6 xl:mb-0 bg-slate-300 rounded-2xl p-4 lg:h-[220px] lg:max-h-[250px]"
                    >
                        {item.title}
                    </div>
                ))}
        </div>
    );
}
