// 压缩key *还使null 不相同
import keyMirror from 'key-mirror';
const actionType = keyMirror({
	// 获取收入
	GET_INCOME_SUCESS:null,
	GET_INCOME_FAILURE: null,
	// 添加收入
	ADD_INCOME_SUCESS:null,
	ADD_INCOME_FAILURE:null,
	// 删除收入
	DELETE_INCOME_SUCESS:null,
	DELETE_INCOME_FAILURE:null,
	// 修改收入
	UPDATE_INCOME_SUCESS:null,
	UPDATE_INCOME_FAILURE:null,

	// 获取支出
	GET_OUTCOME_SUCESS: null,
	GET_OUTCOME_FAILURE: null,

	// 添加支出
	ADD_OUTCOME_SUCESS: null,
	ADD_OUTCOME_FAILURE: null,

	// 删除支出
	DELETE_OUTCOME_SUCESS: null,
	DELETE_OUTCOME_FAILURE: null,

	// 修改支出
	UPDATE_OUTCOME_SUCESS: null,
	UPDATE_OUTCOME_FAILURE: null,

	// 获取资产
	GET_ASSETS_SUCESS: null,
	GET_ASSETS_FAILURE: null,

	// 修改资产
	UPDATE_ASSETS_SUCESS: null,
	UPDATE_ASSETS_FAILURE: null,

	// 删除资产
	DELETE_ASSETS_SUCESS: null,
	DELETE_ASSETS_FAILURE: null,

	// 添加资产
	ADD_ASSETS_SUCESS: null,
	ADD_ASSETS_FAILURE: null,

	// 获取负债
	GET_LIABILILIES_SUCESS: null,
	GET_LIABILILIES_FAILURE: null,

	// 修改负债
	UPDATE_LIABILILIES_SUCESS: null,
	UPDATE_LIABILILIES_FAILURE: null,

	// 删除负债
	DELETE_LIABILILIES_SUCESS: null,
	DELETE_LIABILILIES_FAILURE: null,

	// 添加负债
	ADD_LIABILILIES_SUCESS: null,
	ADD_LIABILILIES_FAILURE: null,
})
export default actionType;