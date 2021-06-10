import makeRequest from "./makeRequest";

export const getProperties = () => {
    return makeRequest('/properties');
};