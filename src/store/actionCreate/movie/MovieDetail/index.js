import {CHANGE_MOVIE_DETAIL} from '../../../actionType/movie/MovieDetail'
import axios from 'axios'
export const ChangeMovieDetail = (payload)=>{
    return{
        type:CHANGE_MOVIE_DETAIL,
        payload
    }
}
export default {
    getDetails(){
        return async(dispatch)=>{
            const {detailsId} = this.location.state //这里this指向props
            const data =await axios.get('detailmovie/'+detailsId)
            dispatch(ChangeMovieDetail(data.detailMovie))
            // const lala=data.detailMovie
            // PubSub.publish('movieDetails',data.detailMovie);
            // console.log(data.detailMovie)
            // console.log(detailsId)
        }
    }
}