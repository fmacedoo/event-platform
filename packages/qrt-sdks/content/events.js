export default client => {
    return {
        by: id => ({
            get: () => client.get(`/events/${id}`),
        }),
        get: () => client.get(`/events/`),
    };
};
