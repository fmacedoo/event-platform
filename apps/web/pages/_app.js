
import NextApp from 'next/app';
import React from 'react';

import 'styles/main.css';

export default class App extends NextApp {
    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}
