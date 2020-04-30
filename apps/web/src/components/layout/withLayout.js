import { object } from 'prop-types';
import React from 'react';

import Layout from './Layout';

export default function withLayout(Component, props) {
    return class WithLayout extends React.Component {
        static propTypes = {
            componentProps: object,
        };

        static async getInitialProps(ctx) {
            const componentProps =
                (Component.getInitialProps && (await Component.getInitialProps(ctx))) || {};

            return { componentProps };
        }

        render() {
            return (
                <Layout {...props}>
                    <Component {...this.props.componentProps} />
                </Layout>
            );
        }
    };
}
