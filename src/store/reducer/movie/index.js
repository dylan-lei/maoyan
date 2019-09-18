import{
    combineReducers
}from 'redux'
import movesnow from './BeingMovie'
import release from './Release'
export default combineReducers({
    movesnow,
    release
})