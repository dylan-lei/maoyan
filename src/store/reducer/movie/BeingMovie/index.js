import initNowMovieState from '../../../state/movie/BeingMovie'
import {CHANGE_NOW_MOVIES_LIST} from '../../../actionType/movie/BeingMovie/index'
export default function (state = initNowMovieState,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    console.log(payload)
    if(type === CHANGE_NOW_MOVIES_LIST){
        state.nowMovieList = [...state.nowMovieList,...payload] 
    }
    return state
}