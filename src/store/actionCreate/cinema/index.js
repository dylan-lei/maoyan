
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
            const data = await axios.get("cinemaList")
            console.log(data)
            dispatch(changeCinemaList(data.cinemas))
        }
    }
}