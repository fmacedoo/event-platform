export default client => {
    return {
        get: () => client.get('/news'),
    };
};
