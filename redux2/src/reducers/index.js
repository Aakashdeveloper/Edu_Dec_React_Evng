import { combineReducers } from 'redux';
import articles from './article_reducers';
import gallery from './gallery_reducer';

const rootReducer = combineReducers({
    articles,
    gallery
})

export default rootReducer;