// 压缩key *还使null 不相同
import keyMirror from 'key-mirror';
const actionType = keyMirror({
	// 获取收入
	GET_INCOME_SUCESS:null,
	GET_INCOME_FAILURE: null,

	// 获取支出
	GET_OUTCOME_SUCESS: null,
	GET_OUTCOME_FAILURE: null,

	// 获取资产
	GET_ASSET_SUCESS: null,
	GET_ASSET_FAILURE: null,

	// 获取负债
	GET_RESPONSIBLE_SUCESS: null,
	GET_RESPONSIBLE_FAILURE: null
})
export default actionType;