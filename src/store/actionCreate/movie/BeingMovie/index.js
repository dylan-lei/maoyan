import {CHANGE_NOW_MOVIES_LIST} from '../../../actionType/movie/BeingMovie/index'
import axios from 'axios'
import {ActivityIndicator} from 'antd-mobile';
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
                console.log(1111111)
                const data = await axios.get('movieList')
                console.log(data)
                dispatch(changeMoviesList(data.movieList));
            }else{
                const data = await axios.get('movieLoaderList/'+pageIndex)
                if(data.stutas === 2){
                    
                }
                console.log(data)
                dispatch(changeMoviesList(data.movieList))
            }
          

        }
    }
}