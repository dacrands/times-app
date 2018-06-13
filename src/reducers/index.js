import { combineReducers } from 'redux';
import  HistoryReducer  from './reducer_history';
import  BestReducer  from './reducer_best';
import  ArchivesReducer  from './reducer_archives';
import  PopularReducer  from './reducer_popular';

const rootReducer = combineReducers({
    history: HistoryReducer,
    popular: PopularReducer,
    archives: ArchivesReducer,
    best: BestReducer
});

export default rootReducer;