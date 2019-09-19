import {CHANGE_NOW_MOVIES_LIST} from '../../../actionType/movie/BeingMovie/index'
import axios from 'axios'

export const changeMoviesList = (payload) => {
    return {
        type: CHANGE_NOW_MOVIES_LIST,
        payload
    }
}
export default {
    getNowMovieList() {
        return async (dispatch) => {
            const data = await axios.get('movieList')
            dispatch(changeMoviesList(data.movieList));

        }
    }
}