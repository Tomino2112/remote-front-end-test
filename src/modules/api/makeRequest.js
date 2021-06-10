const normalizeRequestError = (statusCode, message) => ({
    code: statusCode,
    message,
});

export default async (path) => {
    const url = `/api${path}`;
    let response;

    try {
        response = await fetch(url);
    } catch (requestError) {
        return Promise.reject(normalizeRequestError(666));
    }

    let data;

    try {
        data = await response.json();
    } catch(parseError) {
        data = {};
    }

    return response.ok
        ? data
        : Promise.reject(normalizeRequestError(
            response.status,
            data && data.error && data.error.message
        ));
};