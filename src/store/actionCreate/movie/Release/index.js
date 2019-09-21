import {
    CHANGE_RELEASE_EXPECTED_LIST,
    CHANGE_COMING_LIST
} from '../../../actionType/movie/Release'
import axios from 'axios';
export const changeReleaseExpectedList = (payload) => {
    return {
        type: CHANGE_RELEASE_EXPECTED_LIST,
        payload
    }
}
export const changeComingList = (payload, index) => {
    return {
        type: CHANGE_COMING_LIST,
        payload,
        index
    }
}
export default {
    gitReleaseExpectedList() {
        return async (dispatch) => {
            const { data } = await axios.get('mostExpected');
            dispatch(changeReleaseExpectedList(data.coming));
        }
    },
    gitReleaseList(index) {
        return async (dispatch) => {
            if (this.releaseList.length <= 10) {
                let { data } = await axios.get('comingList');
                dispatch(changeComingList(data.coming))
            } else {
                if (index) {
                    let data = await axios.get('moreComingList/' + index);
                    if(data.status === 2 && index)
                        dispatch(changeComingList(data.coming));
                    else {
                        dispatch(changeComingList(false))
                    }
                }
            }
        }
    }
}