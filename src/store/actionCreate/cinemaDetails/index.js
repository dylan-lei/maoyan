import {CHANGE_CINEMA_DATA} from "../../actionType/cinemaDetails"
import {CHANGE_SHOW_DATA} from "../../actionType/cinemaDetails";
import axios from "axios";
export const changeCinemaData = (payload) =>{
    return{
        type:"CHANGE_CINEMA_DATA",
        payload,
    }
}
export const changeShowData=(payload)=>{
    return{
        type: "CHANGE_SHOW_DATA",
        payload
    }
}
export default {
    getCinemaData() {
        return async (dispatch) => {
            const {data} = await axios.get("cinemaDetail/?cinemaId=" + 107)

            dispatch(changeCinemaData(data.cinemaData))
            dispatch(changeShowData(data.showData.movies))
        }
    },

}
