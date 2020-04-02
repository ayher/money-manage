import actions from '../action/index';
const {
    GET_INCOME_SUCESS,
    UPDATE_INCOME_SUCESS
} = actions;
export default (state = {}, action) => {
    switch (action.type) {
        case GET_INCOME_SUCESS:
            return {
                ...state,
                income: action.data,
            };
        case UPDATE_INCOME_SUCESS:
            return {
                ...state,
                income: action.data,
            };
        default:
            return state;
    }
};