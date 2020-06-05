import actions from './index';
import axios from 'axios';
import config from '../config';
const { baseUrl } = config
const {
    GET_INCOME_SUCESS,
    GET_INCOME_FAILURE,

    ADD_INCOME_SUCESS,
    ADD_INCOME_FAILURE,

    DELETE_INCOME_SUCESS,
    DELETE_INCOME_FAILURE,

    UPDATE_INCOME_SUCESS,
    UPDATE_INCOME_FAILURE,

    GET_OUTCOME_SUCESS,
    GET_OUTCOME_FAILURE,

    ADD_OUTCOME_SUCESS,
    ADD_OUTCOME_FAILURE,

    DELETE_OUTCOME_SUCESS,
    DELETE_OUTCOME_FAILURE,

    UPDATE_OUTCOME_SUCESS,
    UPDATE_OUTCOME_FAILURE,

    
} = actions;

export async function getIncome(query = '')  {
    try {
        let data = (await axios.get(`${baseUrl}/income/get`)).data;
        return({
            type: GET_INCOME_SUCESS,
            data: data
        })
    } catch (error) {
        return({
            type: GET_INCOME_FAILURE,
            error: new Error('获取失败, 请稍后再试')
        });
    }
}

export async function addIncome(query = '') {
    try {
        let data = (await axios.post(`${baseUrl}/income/add`, { ...query, user_id:1})).data;
        return({
            type: ADD_INCOME_SUCESS,
            data: data,
            query: query
        })
    } catch (error) {
        return({
            type: ADD_INCOME_FAILURE,
            error: new Error('添加失败, 请稍后再试')
        });
    }
}

export async function updateIncome(query = '') {
    try {
        let data = (await axios.post(`${baseUrl}/income/update`, query)).data;
        return({
            type: UPDATE_INCOME_SUCESS,
            data: data,
            query
        })
    } catch (error) {
        return({
            type: UPDATE_INCOME_FAILURE,
            error: new Error('修改失败, 请稍后再试')
        });
    }
}

export async function deleteIncome(query = '') {
    try {
        let data = (await axios.delete(`${baseUrl}/income/delete`, {data:query})).data;
        return({
            type: DELETE_INCOME_SUCESS,
            data: data,
            query
        }) 
    } catch (error) {
        return({
            type: DELETE_INCOME_FAILURE,
            error: new Error('修改失败, 请稍后再试')
        });
    }
}



export async function getOutcome(query = '') {
    try {
        let data = (await axios.get(`${baseUrl}/outcome/get`)).data;
        return({
            type: GET_OUTCOME_SUCESS,
            data: data
        })
    } catch (error) {
        return({
            type: GET_OUTCOME_FAILURE,
            error: new Error('获取失败, 请稍后再试')
        });
    }
}

export async function addOutcome(query = '') {
    try {
        let data = (await axios.post(`${baseUrl}/outcome/add`,{ ...query, user_id: 1 })).data;
        return({
            type: ADD_OUTCOME_SUCESS,
            data: data,
            query
        })
    } catch (error) {
        return({
            type: ADD_OUTCOME_FAILURE,
            error: new Error('添加失败, 请稍后再试')
        });
    }
}

export async function updateOutcome(query = '') {
    try {
        let data = (await axios.post(`${baseUrl}/outcome/update`,query)).data;
        return({
            type: UPDATE_OUTCOME_SUCESS,
            data: data,
            query
        })
    } catch (error) {
        return({
            type: UPDATE_OUTCOME_FAILURE,
            error: new Error('修改失败, 请稍后再试')
        });
    }
}

export async function deleteOutcome(query = '') {
    try {
        let data = (await axios.delete(`${baseUrl}/outcome/delete`, { data: query })).data;
        return({
            type: DELETE_OUTCOME_SUCESS,
            data: data,
            query
        }) 
    } catch (error) {
        return({
            type: DELETE_OUTCOME_FAILURE,
            error: new Error('修改失败, 请稍后再试')
        });
    }
}
