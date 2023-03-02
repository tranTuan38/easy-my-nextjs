import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiHome, FiBook, FiCrop } from 'react-icons/fi';

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
    return (
        <header className="bg-slate-500 text-white text-lg shadow-md">
            <div className="container xl:max-w-[1200px] lg:max-w-[984px] flex px-3 justify-around md:px-4 md:justify-start">
                <Link href="/" className="flex items-center p-3 hover:bg-slate-600 transition-all">
                    <FiHome className="mr-2" />
                    <h2 className="inline-block">Home</h2>
                </Link>
                <Link href="/post" className="flex items-center p-3 hover:bg-slate-600">
                    <FiBook className="mr-2" />
                    <h2>Post</h2>
                </Link>
                <Link href="/album" className="flex items-center p-3 hover:bg-slate-600">
                    <FiCrop className="mr-2" />
                    <h2>Album</h2>
                </Link>
            </div>
        </header>
    );
}
