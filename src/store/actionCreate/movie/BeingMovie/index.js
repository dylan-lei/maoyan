import {CHANGE_NOW_MOVIES_LIST} from '../../../actionType/movie/BeingMovie/index'
import axios from 'axios'
export const changeMoviesList = (payload) => {
    return {
        type: CHANGE_NOW_MOVIES_LIST,
        payload
    }
}

export default {
    getNowMovieList(pageIndex) {
        return async (dispatch) => {     
            if(this.nowMovieList.length<=10){
                const data = await axios.get('movieList')
                dispatch(changeMoviesList(data.movieList));
            }else{
                const data = await axios.get('movieLoaderList/'+pageIndex)
                if(data.status === 2){
                    dispatch(changeMoviesList(data.movieList))
                }  
            }
          

        }
    }
}