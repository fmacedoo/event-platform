const express = require('express');
const createNext = require('next');

const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';

module.exports = async () => {
    const next = createNext({ dev });
    const app = express();

    await next.prepare();

    app.get('*', routes.getRequestHandler(next));

    return app;
};
