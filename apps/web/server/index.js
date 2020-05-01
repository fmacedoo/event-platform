const config = require('config');
const express = require('express');
const createNext = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const logger = require('../logger');
const addNextRoutes = require('./next-routes');

const dev = process.env.NODE_ENV !== 'production';

module.exports = async () => {
    const app = express();

    const next = createNext({ dev });
    await next.prepare();

    app.use((req, res, $next) => {
        req.endpoints = {
            CMS_URL: config.get('CMS_URL'),
        };

        $next();
    });

    app.use(
        '/api',
        createProxyMiddleware({
            target: config.get('CMS_URL'),
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/',
            },
        })
    );

    addNextRoutes(app, next);

    return app;
};
