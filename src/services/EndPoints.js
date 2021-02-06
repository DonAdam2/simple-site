export const BASE_URL = 'https://jsonplaceholder.typicode.com';

const USERS = '/users';

export const getUsersListUrl = () => `${BASE_URL}${USERS}`;

export const getUserDetailsUrl = ({ id }) => `${BASE_URL}${USERS}/${id}`;
