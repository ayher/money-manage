import {combineReducers} from 'redux';
import income from './income.js'
import expenses from './expenses.js'
export default combineReducers({
	income,
	expenses
});