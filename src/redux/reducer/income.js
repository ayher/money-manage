import actions from '../action/index';
const {
    GET_INCOME_SUCESS,
    GET_OUTCOME_SUCESS,
} = actions;
export default (state = {}, action) => {
    switch (action.type) {
        case GET_INCOME_SUCESS:
            return {
                ...state,
                getIncome: action.data,
            };
        case GET_OUTCOME_SUCESS:
            return {
                ...state,
                getOutcome: action.data,
            };
        default:
            return state;
    }
};