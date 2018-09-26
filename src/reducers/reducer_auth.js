import { FETCH_AUTH } from '../actions';

export default function(state="", action) {
  switch (action.type) {
    case FETCH_AUTH:            
        return action.auth                    
  }
  return state;
}