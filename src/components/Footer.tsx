import React from 'react';
import Link from 'next/link';

export interface FooterProps {}

export default function Footer(props: FooterProps) {
    return (
        <footer className="bg-slate-700 mt-6 p-4">
            <Link href="/" className="text-2xl text-white text-center my-6 mb-2 inline-block w-full">
                <h2>EASY NEXT WEB</h2>
            </Link>

            <div>
                <span className="text-white block text-center">
                    Embrace the future because its always in front of you
                </span>
            </div>
        </footer>
    );
}
