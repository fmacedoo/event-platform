const server = require('../server');
const logger = require('../logger');

(async () => {
    try {
        const app = await server();
        app.listen('3000', err => {
            if (err) {
                throw err;
            }

            logger.info(`[Server] Ready on http://localhost:3000`);
        });
    } catch (e) {
        console.log(e);
    }
})();
