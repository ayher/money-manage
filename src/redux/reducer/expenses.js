import actions from '../action/index';
const {
    GET_ASSET_SUCESS,
    GET_RESPONSIBLE_SUCESS,
} = actions;
export default (state = {}, action) => {
    switch (action.type) {
        case GET_ASSET_SUCESS:
            return {
                ...state,
                getAsset: action.data,
            };
        case GET_RESPONSIBLE_SUCESS:
            return {
                ...state,
                getResponsible: action.data,
            };
        default:
            return state;
    }
};