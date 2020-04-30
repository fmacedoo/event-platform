import React from 'react';
import Head from 'next/head';

import { useAppContext } from 'context/app';

import Styles from './Layout.css';

export default function Layout({ children }) {
    const { title } = useAppContext();

    return (
        <div className={Styles.layout}>
            <Head>
                <title>{title}</title>
            </Head>
            <main className={Styles.main}>{children}</main>
        </div>
    )
}
