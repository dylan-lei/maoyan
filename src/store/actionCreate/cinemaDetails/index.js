import {CHANGE_CINEMA_DATA} from "../../actionType/cinemaDetails"
import {CHANGE_SHOW_DATA} from "../../actionType/cinemaDetails";
// import {CHANGE_DEAL_LIST } from "../../actionType/cinemaDetails";
// import {CHANGE_VIP_INFO } from "../../actionType/cinemaDetails";

import axios from "axios";
export const changeCinemaData = (payload) =>{
    return{
        type:CHANGE_CINEMA_DATA,
        payload,
    }
}
export const changeShowData=(payload)=>{
    return{
        type: CHANGE_SHOW_DATA,
        payload
    }
}
export const changeDealList=(payload)=>{
    return{
        type: "CHANGE_DEAL_LIST",
        payload
    }
}
export const changeVipInfo=(payload)=>{
    return{
        type: "CHANGE_VIP_INFO",
        payload
    }
}
export default {
    getCinemaData(id) {
        console.log(id)
        return async (dispatch) => {
            //const location = this.history.location ||{state:{id:107}}
            //const id=location.state.id
            // console.log(this.history.location.state,9999999777)
             if(id){
                const {data} = await axios.get("cinemaDetail/?cinemaId=" + id)
                console.log(data,888888)
                dispatch(changeCinemaData(data.cinemaData))
                dispatch(changeShowData(data.showData.movies))
                // console.log(data.showData)
                dispatch(changeDealList(data.dealList))
                dispatch(changeVipInfo(data.showData.vipInfo))
             }






        }
    },

}
