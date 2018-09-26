const fetch = require('node-fetch');

const BASE_URL = 'http://192.168.0.108:5000';




const LOGIN_URL = `${BASE_URL}/login`;
const ARCHIVES_URL = `${BASE_URL}/api/archives`;
const POPULAR_URL = `${BASE_URL}/api/popular`;
const BEST_URL = `${BASE_URL}/api/best`;

// const ARCHIVES_URL = `${BASE_URL}/svc/archive/v1/${getRandomYear(min, max)}/${getRandomMonth()}.json`;
// const HISTORY_URL = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json';
// const BEST_URL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json';
// const POPULAR_URL = 'https://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/1.json';


export const FETCH_AUTH = 'FETCH_AUTH';

export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_LOADING = 'FETCH_LOADING';

export const FETCH_HISTORY = 'FETCH_HISTORY';
export const FETCH_BEST = 'FETCH_BEST';
export const FETCH_ARCHIVES = 'FETCH_ARCHIVES';
export const FETCH_POPULAR = 'FETCH_POPULAR';




// -------------------------
// Auth actions
// -------------------------
var token;
export function fetchAuth(formData) {
    return fetch(LOGIN_URL, {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      body: formData
    }).then(res => {
      return res.json();
    }).then(myJson => {
        token = myJson['access_token'];
        return  {
            type: 'FETCH_AUTH',
            auth: myJson['access_token']
        }  
    }).catch(e => {
      console.log('it went wrong \r', e)
    })    
}
// -------------------------
// Error and loading actions
// -------------------------
export function fetchError(bool) {
    return  {
        type: 'FETCH_ERROR',
        isError: bool
    }
}

export function fetchLoading(bool) {
    return {
        type: 'FETCH_LOADING',
        isLoading: bool
    };
}


// -------------------------
// Auth actions
// -------------------------


// -------------------------
// API actions
// -------------------------
export function fetchHistory() {
    return fetch(HISTORY_URL)
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
    return fetch(POPULAR_URL,{
      headers: { 'Authorization' : `Bearer ${token}` },
    })
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
    return fetch(BEST_URL)
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

export function fetchArchivesSuccess(request) {
    return { 
        type: FETCH_ARCHIVES,
        payload: request
    };
}

export function fetchArchives(min, max) {
    // const ARCHIVES_URL = `https://api.nytimes.com/svc/archive/v1/${getRandomYear(min, max)}/${getRandomMonth()}.json`;
    // const archivesUrl = `${ARCHIVES_URL}?api-key=${API_KEY}`;    
    return dispatch => {
        dispatch(fetchLoading(true));        
        dispatch(fetchError(false));        
        return fetch(ARCHIVES_URL)
            .then((response) => {                
                return response.json();
            })
            .then((request) => {
                dispatch(fetchLoading(false))
                return dispatch(fetchArchivesSuccess(request))            
        }).catch(e => dispatch(fetchError(true)));
    }    
}


// ---------------
// Random number generators for
// archives action
// ---------------
function getRandomYear(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

function getRandomMonth() {
    return Math.floor(Math.random() * (12-1) + 1);
}