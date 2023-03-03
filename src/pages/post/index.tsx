import { getPosts } from '@/request';
import { GetServerSideProps, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

export interface ItemInF {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface DataProps extends Array<ItemInF> {
    [i: number]: ItemInF;
}

export interface PostProps {
    postData: DataProps;
}

export default function Post({ postData }: PostProps) {
    const router = useRouter();

    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = postData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(postData.length / itemsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % postData.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="container xl:max-w-[1200px] mt-6 lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 lg:max-w-[984px] px-3 md:px-4">
                {currentItems.map((item) => {
                    return (
                        <div key={item.id} className="shadow-lg mb-6 xl:mb-0 bg-slate-300 rounded-2xl p-4">
                            <div className="lg:h-[220px] lg:max-h-[250px] overflow-hidden">
                                <h2>
                                    {item.id} -- {item.title}
                                </h2>
                                <span className="cut-strs">{item.body}</span>
                            </div>
                            <Link
                                href={`/post/${item.id}`}
                                className="inline-block text-sm font-semibold hover:text-slate-600"
                            >
                                see more
                            </Link>
                        </div>
                    );
                })}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=" >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="< "
                marginPagesDisplayed={4}
                containerClassName="flex item-center justify-center flex-wrap xl:mt-6"
                pageLinkClassName="px-3 py-1"
                nextClassName="px-3 py-1 mt-2"
                previousClassName="px-3 py-1 mt-2"
                pageClassName="flex mt-2"
                breakClassName="flex px-3 py-1 mt-2"
                activeClassName="bg-slate-600 text-white rounded-lg"
            />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data: DataProps | undefined = await getPosts(100);

    return {
        props: {
            postData: data ? data : [],
        },
    };
};
