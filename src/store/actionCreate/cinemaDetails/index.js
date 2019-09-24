import {CHANGE_CINEMA_DATA} from "../../actionType/cinemaDetails"
import {CHANGE_SHOW_DATA} from "../../actionType/cinemaDetails";
import {CHANGE_DEAL_LIST } from "../../actionType/cinemaDetails";
import {CHANGE_VIP_INFO } from "../../actionType/cinemaDetails";

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
    getCinemaData() {
        return async (dispatch) => {
            const {data} = await axios.get("cinemaDetail/?cinemaId=" + 107)
            console.log(data,888888)
            dispatch(changeCinemaData(data.cinemaData))
            dispatch(changeShowData(data.showData.movies))
            // console.log(data.showData)
            dispatch(changeDealList(data.dealList))
            dispatch(changeVipInfo(data.showData.vipInfo))


        }
    },

}
