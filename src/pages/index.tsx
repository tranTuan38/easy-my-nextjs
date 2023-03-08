import { NextPage } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FiBook, FiCrop } from 'react-icons/fi';

const inter = Inter({ subsets: ['latin'] });

export interface HomeProps {}

export default function Home() {
    return (
        <div>
            <div className="relative w-full h-[600px] max-h-[600px]">
                <h1>Helloooo branch dev</h1>
                {/* <Image
                    alt="anh-nen"
                    src="/bg-img.jpg"
                    width={1000}
                    height={600}
                    className="block h-auto max-h-[600px] w-full max-w-full"
                    priority
                    unoptimized
                /> */}
                <div className="bg-page-animation block h-auto max-h-[600px] w-full max-w-full"></div>
                <span className="absolute bottom-4 block text-center w-full text-white text-base px-3">
                    NextJS so easy
                    <span className="block text-center w-full text-white text-base break-words ">
                        Embrace the future because its always in front of you
                    </span>
                </span>
            </div>
            <div className="container xl:max-w-[1200px] lg:max-w-[984px] px-3 md:px-4 mt-4">
                <h3 className="font-semibold text-center my-3">Which page do you want to move to ?</h3>
                <div className="flex items-center justify-center flex-wrap">
                    <div>
                        <Link
                            href="/post"
                            className="flex items-center p-3 border-solid border-b-2 border-slate-600 my-2 hover:scale-110 hover:opacity-100 opacity-50 transition-all duration-[250ms] ease-linear w-24 justify-center mr-4"
                        >
                            <FiBook className="mr-2" />
                            <h2>Post</h2>
                        </Link>
                    </div>
                    <div>
                        <Link
                            href="/album"
                            className="flex items-center p-3 border-solid border-b-2 border-slate-600 my-2 hover:scale-110 hover:opacity-100 opacity-50 transition-all duration-[250ms] ease-linear w-24 justify-center mr-4"
                        >
                            <FiCrop className="mr-2" />
                            <h2>Album</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
