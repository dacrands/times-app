import { combineReducers } from 'redux';
import  HistoryReducer  from './reducer_history';
import  BestReducer  from './reducer_best';
import  ArchivesReducer  from './reducer_archives';

const rootReducer = combineReducers({
    history: HistoryReducer,
    best: BestReducer,
    archives: ArchivesReducer
});

export default rootReducer;