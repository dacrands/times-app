const fetch = require('node-fetch');

const ROOT_URL = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json';
const API_KEY = '1e2e8c3de5ee427c835460f4a58a4792';

const getUrl = `${ROOT_URL}?api-key=${API_KEY}`;

export const FETCH_POSTS = 'FETCH_POSTS';


export function fetchPosts () {
    return fetch(getUrl)
    .then((response) => {
        return response.json();
    })
    .then((request) => {
        return {
            type: FETCH_POSTS,
            payload: request 
        }
    });
}

