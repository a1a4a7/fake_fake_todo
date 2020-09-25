import { combineReducers } from 'redux'
import todos from './todos';
import visibilityFilter from './visibilityFilter'

// 利用redux-logger打印日志

// 安装redux-devtools-extension的可视化工具。





export default combineReducers({
    todos,
    // visibilityFilter

})