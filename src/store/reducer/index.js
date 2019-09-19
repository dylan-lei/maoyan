import {combineReducers} from "redux"
import moves from './movie/index'
import cinema from "./cinema"
import common from "./common"
export default combineReducers({
    moves,
    cinema,
    common
})