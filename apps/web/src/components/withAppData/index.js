import { object } from 'prop-types';
import { useState } from 'react';

import { createSDK } from '@qrt/sdks';

export default function withAppData(AppComponent) {
    const WithApi = props => {
        const [state] = useState({ appData: props.appData });

        return <AppComponent {...props} {...state} />;
    };

    WithApi.getInitialProps = async appCtx => {
        let appData, api;
        const ctx = appCtx.ctx;
        const isServer = !!ctx.req;

        if (isServer) {
            api = createSDK(isServer, ctx.req.endpoints.CMS_URL);
        } else {
            api = createSDK(isServer);
        }

        appCtx.ctx.api = api;
        appCtx.ctx.isServer = isServer;
        appCtx.ctx.isClient = !isServer;

        try {
            const appProps =
                (AppComponent.getInitialProps && (await AppComponent.getInitialProps(appCtx))) ||
                {};

            return { ...appProps, appData };
        } catch (error) {
            return { error, appData };
        }
    };

    WithApi.propTypes = {
        appData: object,
    };

    return WithApi;
}
