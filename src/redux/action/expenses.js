import actions from './index';

const {
    GET_ASSET_SUCESS,
    GET_ASSET_FAILURE,

    GET_RESPONSIBLE_SUCESS,
    GET_RESPONSIBLE_FAILURE
} = actions;

export function getAsset(query = '') {
    return async (dispatch) => {
        try {
            let data = [{ '茅台股票': 2000 }, { '苹果股票': 100 }];
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
export function getResponsible(query = '') {
    return async (dispatch) => {
        try {
            let data = [{ '房贷': 1020 }, { '信用卡': 100 }];
            dispatch({
                type: GET_RESPONSIBLE_SUCESS,
                data: data
            });
        } catch (error) {
            dispatch({
                type: GET_RESPONSIBLE_FAILURE,
                error: new Error('获取失败, 请稍后再试')
            });
        }
    }
}