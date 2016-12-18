import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

//ES6 Shorthand property names
/* https://ariya.io/2013/02/es6-and-object-literal-property-value-shorthand */
const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;
