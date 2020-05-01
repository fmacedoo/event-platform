import 'isomorphic-unfetch';
import qs from './utils/query-string';

export default function createClient(baseUrl = '') {
    const baseOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    function request(endpoint, options) {
        return fetch(`${baseUrl}${endpoint}`, options).then(res => {
            if (res.ok) {
                return res.json().catch(() => undefined);
            }

            return res
                .json()
                .catch(() => {
                    const err = new Error(res.statusText);

                    err.statusCode = res.status;

                    return Promise.reject(err);
                })
                .then(body => {
                    const message =
                        body.errors &&
                        body.errors.length &&
                        body.errors[0].message;
                    const err = new Error(message);

                    err.statusCode = res.status;

                    return Promise.reject(err);
                });
        });
    }

    function get(endpoint, extraOptions = {}) {
        const options = { method: 'GET', ...baseOptions, ...extraOptions };
        let finalEndpoint = endpoint;

        if (options.query) {
            finalEndpoint += `?${qs(options.query)}`;
            delete options.query;
        }

        return request(finalEndpoint, options);
    }

    function post(endpoint, body = {}, extraOptions = {}) {
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            ...baseOptions,
            ...extraOptions,
        };

        return request(endpoint, options);
    }

    function del(endpoint, body = {}, extraOptions = {}) {
        const options = {
            method: 'DELETE',
            body: JSON.stringify(body),
            ...baseOptions,
            ...extraOptions,
        };

        return request(endpoint, options);
    }

    function put(endpoint, body = {}, extraOptions = {}) {
        const options = {
            method: 'PUT',
            body: JSON.stringify(body),
            ...baseOptions,
            ...extraOptions,
        };

        return request(endpoint, options);
    }

    function upload(endpoint, formData) {
        const options = {
            method: 'POST',
            body: formData,
        };

        return request(endpoint, options);
    }

    return {
        del,
        get,
        post,
        put,
        request,
        upload,
    };
}
