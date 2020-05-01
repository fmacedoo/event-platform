const scrapPEGN = require('./scrap');

module.exports = {
    async scrap(ctx) {
        try {
            const data = await scrapPEGN();
            return data;
        } catch (err) {
            ctx.status = 500;
            ctx.response = { err };
            throw err;
        }
    },
};
