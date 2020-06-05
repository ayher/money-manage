import actions from './index';
import axios from 'axios';
import config from '../config';
const { baseUrl } = config
const {
    GET_ASSETS_SUCESS,
    GET_ASSETS_FAILURE,

    ADD_ASSETS_SUCESS,
    ADD_ASSETS_FAILURE,

    DELETE_ASSETS_SUCESS,
    DELETE_ASSETS_FAILURE,

    UPDATE_ASSETS_SUCESS,
    UPDATE_ASSETS_FAILURE,

    GET_LIABILILIES_SUCESS,
    GET_LIABILILIES_FAILURE,

    ADD_LIABILILIES_SUCESS,
    ADD_LIABILILIES_FAILURE,

    DELETE_LIABILILIES_SUCESS,
    DELETE_LIABILILIES_FAILURE,

    UPDATE_LIABILILIES_SUCESS,
    UPDATE_LIABILILIES_FAILURE,


} = actions;

export async function getAssets(query = '') {
    try {
        let data = (await axios.get(`${baseUrl}/assets/get`)).data;
        return ({
            type: GET_ASSETS_SUCESS,
            data: data
        })
    } catch (error) {
        return ({
            type: GET_ASSETS_FAILURE,
            error: new Error('获取失败, 请稍后再试')
        });
    }
}

export async function addAssets(query = '') {
    try {
        let data = (await axios.post(`${baseUrl}/assets/add`, { ...query, user_id: 1 })).data;
        return ({
            type: ADD_ASSETS_SUCESS,
            data: data,
            query: query
        })
    } catch (error) {
        return ({
            type: ADD_ASSETS_FAILURE,
            error: new Error('添加失败, 请稍后再试')
        });
    }
}

export async function updateAssets(query = '') {
    try {
        let data = (await axios.post(`${baseUrl}/assets/update`, query)).data;
        return ({
            type: UPDATE_ASSETS_SUCESS,
            data: data,
            query
        })
    } catch (error) {
        return ({
            type: UPDATE_ASSETS_FAILURE,
            error: new Error('修改失败, 请稍后再试')
        });
    }
}

export async function deleteAssets(query = '') {
    try {
        let data = (await axios.delete(`${baseUrl}/assets/delete`, { data: query })).data;
        return ({
            type: DELETE_ASSETS_SUCESS,
            data: data,
            query
        })
    } catch (error) {
        return ({
            type: DELETE_ASSETS_FAILURE,
            error: new Error('修改失败, 请稍后再试')
        });
    }
}



export async function getLiabililies(query = '') {
    try {
        let data = (await axios.get(`${baseUrl}/liabililies/get`)).data;
        return ({
            type: GET_LIABILILIES_SUCESS,
            data: data
        })
    } catch (error) {
        return ({
            type: GET_LIABILILIES_FAILURE,
            error: new Error('获取失败, 请稍后再试')
        });
    }
}

export async function addLiabililies(query = '') {
    try {
        let data = (await axios.post(`${baseUrl}/liabililies/add`, { ...query, user_id: 1 })).data;
        return ({
            type: ADD_LIABILILIES_SUCESS,
            data: data,
            query
        })
    } catch (error) {
        return ({
            type: ADD_LIABILILIES_FAILURE,
            error: new Error('添加失败, 请稍后再试')
        });
    }
}

export async function updateLiabililies(query = '') {
    try {
        let data = (await axios.post(`${baseUrl}/liabililies/update`, query)).data;
        return ({
            type: UPDATE_LIABILILIES_SUCESS,
            data: data,
            query
        })
    } catch (error) {
        return ({
            type: UPDATE_LIABILILIES_FAILURE,
            error: new Error('修改失败, 请稍后再试')
        });
    }
}

export async function deleteLiabililies(query = '') {
    try {
        let data = (await axios.delete(`${baseUrl}/liabililies/delete`, { data: query })).data;
        return ({
            type: DELETE_LIABILILIES_SUCESS,
            data: data,
            query
        })
    } catch (error) {
        return ({
            type: DELETE_LIABILILIES_FAILURE,
            error: new Error('修改失败, 请稍后再试')
        });
    }
}
