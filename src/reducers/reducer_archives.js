import { FETCH_ARCHIVES } from '../actions';

export default function(state=[], action) {
    switch (action.type) {
        case FETCH_ARCHIVES:            
            return [action.payload.response.docs]                    
    }
    return state; 
};
