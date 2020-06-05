import actions from '../action/index';
const {
    GET_ASSETS_SUCESS,
    ADD_ASSETS_SUCESS,
    DELETE_ASSETS_SUCESS,
    UPDATE_ASSETS_SUCESS,


    GET_LIABILILIES_SUCESS,
    ADD_LIABILILIES_SUCESS,
    DELETE_LIABILILIES_SUCESS,
    UPDATE_LIABILILIES_SUCESS,
} = actions;
function getIndexById(id,arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) return i;
    }
    return -1;
}
export default (state = {}, action) => {
    if (action.data && action.data.status !== 'SUCCESS') {
        alert("请求错误")
        return { ...state }
    }
    let index,arr;
    switch (action.type) {
        case GET_ASSETS_SUCESS:
            return {
                ...state,
                assets: action.data.data,
            };
        case ADD_ASSETS_SUCESS:
            return {
                ...state,
                assets: [...state.assets, 
                    { ...action.query, id: action.data.data[0].id}
                ],
            };
        case DELETE_ASSETS_SUCESS:
            index = getIndexById(action.query.id,state.assets)
            return {
                ...state,
                assets: [...state.assets.slice(0, index)
                    , ...state.assets.slice(index + 1)
                ],
            };
        case UPDATE_ASSETS_SUCESS:
            arr = JSON.parse(JSON.stringify(state.assets)) 
            index = getIndexById(action.query.id, state.assets)
            arr[index].money = action.query.money
            return {
                ...state,
                assets: arr,
            };
            
        case GET_LIABILILIES_SUCESS:
            return {
                ...state,
                liabililies: action.data.data,
            };
        case ADD_LIABILILIES_SUCESS:
            return {
                ...state,
                liabililies: [...state.liabililies,
                { ...action.query, id: action.data.data[0].id }
                ],
            };
        case DELETE_LIABILILIES_SUCESS:
            index = getIndexById(action.query.id,state.liabililies)
            return {
                ...state,
                liabililies: [...state.liabililies.slice(0, index)
                    , ...state.liabililies.slice(index + 1)
                ],
            };
        case UPDATE_LIABILILIES_SUCESS:
            arr = JSON.parse(JSON.stringify(state.liabililies)) 
            index = getIndexById(action.query.id, state.liabililies)
            arr[index].money = action.query.money
            return {
                ...state,
                liabililies: arr,
            };
        default:
            return state;
    }
};