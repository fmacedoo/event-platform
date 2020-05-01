const routes = require('next-routes');

const nextRoutes = routes();

module.exports = (app, next) =>
    app.get('*', nextRoutes.getRequestHandler(next));
