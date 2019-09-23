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
            const cinemaList = data.cinemas;
            const total = data.paging.total;
            dispatch(changeCinemaList({cinemaList,total}))
            console.log(data, 44444444444444)


        }
    }
}