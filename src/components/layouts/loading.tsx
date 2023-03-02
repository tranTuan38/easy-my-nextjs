import React from 'react';

export interface LoadingProps {}

export default function Loading(props: LoadingProps) {
    return <div className="fixed top-0 bottom-0 w-full text-center">Loading...</div>;
}
