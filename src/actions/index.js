const fetch = require('node-fetch');

const BASE_URL = 'http://127.0.0.1:5000';



export const REQUEST_URL = `${BASE_URL}/register`;

const LOGIN_URL = `${BASE_URL}/login`;
const ARCHIVES_URL = `${BASE_URL}/api/archives`;
const POPULAR_URL = `${BASE_URL}/api/popular`;
const BEST_URL = `${BASE_URL}/api/best`;

export const SET_AUTH = 'SET_AUTH';
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
        localStorage.setItem('token', token)
        return  {
            type: 'FETCH_AUTH',
            auth: window.localStorage.token
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
      headers: { 'Authorization' : `Bearer ${window.localStorage.token}` },
    })
    .then((response) => {
        return response.json();
    })
    .then((request) => {    
        return {
            type: FETCH_POPULAR,
            payload: request 
        }
    });
}


export function fetchBest() {
    return fetch(BEST_URL, {
        headers: { 'Authorization' : `Bearer ${window.localStorage.token}` },
    })
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
    return dispatch => {
        dispatch(fetchLoading(true));        
        dispatch(fetchError(false));        
        return fetch(`${ARCHIVES_URL}/${getRandomYear(min, max)}/${getRandomMonth()}`, {
            headers: { 'Authorization' : `Bearer ${window.localStorage.token}` },
        })
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