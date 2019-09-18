import {CHANGE_MOVIE_DETAIL} from '../../../actionType/movie/MovieDetail'
export const ChangeMovieDetail = (payload)=>{
    return{
        type:CHANGE_MOVIE_DETAIL,
        payload
    }
}