const server = require('../server');
const logger = require('../logger');

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        const app = await server();
        app.listen(PORT, err => {
            if (err) {
                throw err;
            }

            logger.info(`[Server] Ready on http://localhost:${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
})();
