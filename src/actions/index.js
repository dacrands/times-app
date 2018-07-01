const fetch = require('node-fetch');


const HISTORY_URL = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json';
const BEST_URL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json';
const POPULAR_URL = 'http://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/1.json';


const API_KEY = process.env.API_KEY;

const historyUrl = `${HISTORY_URL}?api-key=${API_KEY}`;
const bestUrl = `${BEST_URL}?api-key=${API_KEY}`;
const popularUrl = `${POPULAR_URL}?api-key=${API_KEY}`;


export const FETCH_HISTORY = 'FETCH_HISTORY';
export const FETCH_BEST = 'FETCH_BEST';
export const FETCH_ARCHIVES = 'FETCH_ARCHIVES';
export const FETCH_POPULAR = 'FETCH_POPULAR';

function getRandomYear(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

function getRandomMonth() {
    return Math.floor(Math.random() * (12-1) + 1);
}

export function fetchHistory() {
    return fetch(historyUrl)
    .then((response) => {
        return response.json();
    })
    .then((request) => {        
        return {
            type: FETCH_HISTORY,
            payload: request 
        }
    });
}


export function fetchPopular() {
    return fetch(popularUrl)
    .then((response) => {
        return response.json();
    })
    .then((request) => {
        console.log(request);       
        return {
            type: FETCH_POPULAR,
            payload: request 
        }
    });
}


export function fetchBest() {
    return fetch(bestUrl)
        .then((response) => {
            return response.json();
        })
        .then((request) => {
            return {
                type: FETCH_BEST,
                payload: request 
            }
    });
}


// export function fetchArchives(start, end) {
//     const ARCHIVES_URL = `https://api.nytimes.com/svc/archive/v1/${getRandomYear(start, end)}/${getRandomMonth()}.json`;
//     const archivesUrl = `${ARCHIVES_URL}?api-key=${API_KEY}`;
//     return fetch(archivesUrl)
//         .then((response) => {
//             return response.json();
//         })
//         .then((request) => {
//             return {
//                 type: FETCH_ARCHIVES,
//                 payload: request
//             }
//     }).catch(e => {console.log(e)});
// }
export function fetchArchivesSuccess(request) {
    return { 
        type: FETCH_ARCHIVES,
        payload: request
    };
}

export function fetchArchives(min, max) {
    const ARCHIVES_URL = `https://api.nytimes.com/svc/archive/v1/${getRandomYear(min, max)}/${getRandomMonth()}.json`;
    const archivesUrl = `${ARCHIVES_URL}?api-key=${API_KEY}`;
    return dispatch => {        
        return fetch(archivesUrl)
            .then((response) => {
                return response.json();
            })
            .then((request) => {
                return dispatch(fetchArchivesSuccess(request))            
        }).catch(e => {console.log(e)});
    }    
}
