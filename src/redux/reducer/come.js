import actions from '../action/index';
const {
    GET_INCOME_SUCESS,
    ADD_INCOME_SUCESS,
    DELETE_INCOME_SUCESS,
    UPDATE_INCOME_SUCESS,


    GET_OUTCOME_SUCESS,
    ADD_OUTCOME_SUCESS,
    DELETE_OUTCOME_SUCESS,
    UPDATE_OUTCOME_SUCESS,
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
        case GET_INCOME_SUCESS:
            return {
                ...state,
                income: action.data.data,
            };
        case ADD_INCOME_SUCESS:
            return {
                ...state,
                income: [...state.income, 
                    { ...action.query, id: action.data.data[0].id}
                ],
            };
        case DELETE_INCOME_SUCESS:
            index = getIndexById(action.query.id,state.income)
            return {
                ...state,
                income: [...state.income.slice(0, index)
                    , ...state.income.slice(index + 1)
                ],
            };
        case UPDATE_INCOME_SUCESS:
            arr = JSON.parse(JSON.stringify(state.income)) 
            index = getIndexById(action.query.id, state.income)
            arr[index].money = action.query.money
            return {
                ...state,
                income: arr,
            };
            
        case GET_OUTCOME_SUCESS:
            return {
                ...state,
                outcome: action.data.data,
            };
        case ADD_OUTCOME_SUCESS:
            return {
                ...state,
                outcome: [...state.outcome,
                { ...action.query, id: action.data.data[0].id }
                ],
            };
        case DELETE_OUTCOME_SUCESS:
            index = getIndexById(action.query.id,state.outcome)
            return {
                ...state,
                outcome: [...state.outcome.slice(0, index)
                    , ...state.outcome.slice(index + 1)
                ],
            };
        case UPDATE_OUTCOME_SUCESS:
            arr = JSON.parse(JSON.stringify(state.outcome)) 
            index = getIndexById(action.query.id, state.outcome)
            arr[index].money = action.query.money
            return {
                ...state,
                outcome: arr,
            };
        default:
            return state;
    }
};