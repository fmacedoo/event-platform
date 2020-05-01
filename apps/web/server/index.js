const express = require('express');
const createNext = require('next');

const addNextRoutes = require('./next-routes');

const dev = process.env.NODE_ENV !== 'production';

module.exports = async () => {
    const app = express();

    const next = createNext({ dev });
    await next.prepare();

    addNextRoutes(app, next);

    return app;
};
