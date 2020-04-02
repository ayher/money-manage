// 压缩key *还使null 不相同
import keyMirror from 'key-mirror';
const actionType = keyMirror({
	// 获取收入
	GET_INCOME_SUCESS:null,
	GET_INCOME_FAILURE: null,

	// 修改收入
	UPDATE_INCOME_SUCESS: null,
	UPDATE_INCOME_FAILURE: null,

	// 获取资产
	GET_ASSET_SUCESS: null,
	GET_ASSET_FAILURE: null,

	// 修改资产
	UPDATE_ASSET_SUCESS: null,
	UPDATE_ASSET_FAILURE: null,
})
export default actionType;