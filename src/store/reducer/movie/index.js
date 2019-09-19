import{
    combineReducers
}from 'redux'
import movesnow from './BeingMovie'
import movesDetail from './MovieDetail'
import release from './Release'
export default combineReducers({
    movesnow,
    movesDetail,
    release
})