import React from 'react';
import Head from 'next/head';

import { useAppContext } from 'context/app';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer';

import Styles from './Layout.css';

export default function Layout({ children }) {
    const { title } = useAppContext();

    return (
        <div className={Styles.layout}>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <main className={Styles.main}>{children}</main>
            <Footer />
        </div>
    )
}
