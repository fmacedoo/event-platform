export default (params = {}) => {
    const encode = encodeURIComponent;

    return Object.keys(params)
        .map(key => `${encode(key)}=${encode(params[key])}`)
        .join('&');
};
