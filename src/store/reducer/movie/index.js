import{
    combineReducers
}from 'redux'
import movesnow from './BeingMovie'
import movesDetail from './MovieDetail'
export default combineReducers({
    movesnow,
    movesDetail
})