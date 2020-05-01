
import NextApp from 'next/app';
import React from 'react';

import 'styles/main.css';
import withAppData from '../src/components/withAppData';

class App extends NextApp {
    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}

export default withAppData(App);
