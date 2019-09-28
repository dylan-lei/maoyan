import {CHANGE_CINEMA_DATA} from "../../actionType/cinemaDetails"
import {CHANGE_SHOW_DATA} from "../../actionType/cinemaDetails";



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
export const changeAddr=(payload)=>{
    return{
        type: "CHANGE_ADDR",
        payload
    }
}
export default {
    getCinemaData(id) {
        return async (dispatch) => {
             if(id){
                const {data} = await axios.get("cinemaDetail/?cinemaId=" + id)
                dispatch(changeCinemaData(data.cinemaData))
                dispatch(changeShowData(data.showData.movies))
                dispatch(changeDealList(data.dealList))
                dispatch(changeVipInfo(data.showData.vipInfo))
             }







        }
    },

}
