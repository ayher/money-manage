import actions from '../action/index';
const {
    GET_ASSET_SUCESS,
    UPDATE_ASSET_SUCESS
} = actions;
export default (state = {}, action) => {
    switch (action.type) {
        case GET_ASSET_SUCESS:
            return {
                ...state,
                expenses: action.data,
            };
        case UPDATE_ASSET_SUCESS:
            return {
                ...state,
                expenses: action.data,
            };
        default:
            return state;
    }
};