import {CHANGE_MOVIE_DETAIL} from '../../../actionType/movie/MovieDetail'
import storeMovieDetailList from '../../../state/movie/MovieDetail'
export default function(state = storeMovieDetailList,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    if(type===CHANGE_MOVIE_DETAIL){
        state.movieDetail = payload
    }
    return state
}
