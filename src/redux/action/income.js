import actions from './index';

const {
    GET_INCOME_SUCESS,
    GET_INCOME_FAILURE,
    GET_OUTCOME_SUCESS,
    GET_OUTCOME_FAILURE
} = actions;

export function getIncome(query = '') {
    return async (dispatch) => {
        try {
            let data=[{ '工资': 2000 }, { '房租': 100 }];
            dispatch({
                type: GET_INCOME_SUCESS,
                data: data
            });
        } catch (error) {
            dispatch({
                type: GET_INCOME_FAILURE,
                error: new Error('获取失败, 请稍后再试')
            });
        }
    }
}
export function getOutcome(query = '') {
    return async (dispatch) => {
        try {
            let data = [{ '电影': 1020 }, { '午餐': 100 }];
            dispatch({
                type: GET_OUTCOME_SUCESS,
                data: data
            });
        } catch (error) {
            dispatch({
                type: GET_OUTCOME_FAILURE,
                error: new Error('获取失败, 请稍后再试')
            });
        }
    }
}