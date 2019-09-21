import {CHANGE_CINEMA_LIST} from "../../actionType/cinema";
import axios from 'axios'

export const changeCinemaList = (payload) => {
    return {
        type: CHANGE_CINEMA_LIST,
        payload
    }
}

export default {
    getCinemaList() {
        return async (dispatch) => {
            const data = await axios.get("cinemaList?offset=" + (this.offset || 0))
            dispatch(changeCinemaList(data.cinemas))
            console.log(data, 44444444444444)


        }
    }
}