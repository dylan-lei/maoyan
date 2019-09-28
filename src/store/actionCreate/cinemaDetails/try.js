import {CHANGE_TRY} from "../../actionType/cinemaDetails/try";

import axios from 'axios';

export const changeTry = (payload) =>{
    return{
        type:"CHANGE_TRY",
        payload,
    }
}


export default {
    getTryData() {
        return async (dispatch) => {
            const {data} = await axios.get("cinemaDetail/?cinemaId=" + 107)
            console.log(data,888888)
            console.log(data.showData,999);
            dispatch(changeTry(data.showData))

        }
    },

}
