import actions from './index';
import axios from 'axios';
import Qs from 'qs';
import config from '../config';
const { baseUrl } = config
const {
    GET_INCOME_SUCESS,
    GET_INCOME_FAILURE,

    UPDATE_INCOME_SUCESS,
    UPDATE_INCOME_FAILURE,

    GET_OUTCOME_SUCESS,
    GET_OUTCOME_FAILURE,

    UPDATE_OUTCOME_SUCESS,
    UPDATE_OUTCOME_FAILURE
} = actions;

export function getIncome(query = '') {
    return async (dispatch) => {
        try {
            let data = (await axios.get(`${baseUrl}/getincome`)).data;
            data.status==='SUCCESS'?
                dispatch({
                    type: GET_INCOME_SUCESS,
                    data: data.data
                }):
                dispatch({
                    type: GET_INCOME_FAILURE,
                    error: new Error('获取失败, 请稍后再试')
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
            let data = (await axios.get(`${baseUrl}/getoutcome`)).data;
            data.status === 'SUCCESS'?
            dispatch({
                type: GET_OUTCOME_SUCESS,
                data: data.data
            }):
            dispatch({
                type: GET_OUTCOME_FAILURE,
                error: new Error('获取失败, 请稍后再试')
            });
        } catch (error) {
            dispatch({
                type: GET_OUTCOME_FAILURE,
                error: new Error('获取失败, 请稍后再试')
            });
        }
    }
}
export function updateIncome(query = '') {
    return async (dispatch) => {
        try {
            let data = query;
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

export function updateOutcome(query = '') {
    return async (dispatch) => {
        try {
            let data = query;
            dispatch({
                type: UPDATE_OUTCOME_SUCESS,
                data: data
            });
        } catch (error) {
            dispatch({
                type: UPDATE_OUTCOME_FAILURE,
                error: new Error('修改失败, 请稍后再试')
            });
        }
    }
}