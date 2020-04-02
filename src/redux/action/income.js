import actions from './index';
import axios from 'axios';
import Qs from 'qs';
const {
    GET_INCOME_SUCESS,
    GET_INCOME_FAILURE,

    UPDATE_INCOME_SUCESS,
    UPDATE_INCOME_FAILURE
} = actions;

export function getIncome(query = '') {
    return async (dispatch) => {
        try {
            let data = (await axios.get(`./api/income.json`)).data;
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
export function updateIncome(query = '') {
    return async (dispatch) => {
        try {
            let data = query.income;
            dispatch({
                type: UPDATE_INCOME_SUCESS,
                data: data
            });
        } catch (error) {
            dispatch({
                type: UPDATE_INCOME_FAILURE,
                error: new Error('修改失败, 请稍后再试')
            });
        }
    }
}