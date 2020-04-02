import actions from './index';
import axios from 'axios';
import Qs from 'qs';
const {
    GET_ASSET_SUCESS,
    GET_ASSET_FAILURE,
    UPDATE_ASSET_SUCESS,
    UPDATE_ASSET_FAILURE
} = actions;

export function getAsset(query = '') {
    return async (dispatch) => {
        try {
            let data = (await axios.get(`./api/expenses.json`)).data;
            dispatch({
                type: GET_ASSET_SUCESS,
                data: data
            });
        } catch (error) {
            dispatch({
                type: GET_ASSET_FAILURE,
                error: new Error('获取失败, 请稍后再试')
            });
        }
    }
}

export function updateAsset(query = '') {
    return async (dispatch) => {
        try {
            let data = query.expenses;
            dispatch({
                type: UPDATE_ASSET_SUCESS,
                data: data
            });
        } catch (error) {
            dispatch({
                type: UPDATE_ASSET_FAILURE,
                error: new Error('修改失败, 请稍后再试')
            });
        }
    }
}