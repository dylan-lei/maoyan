import {
    CHANGE_RELEASE_EXPECTED_LIST
} from '../../../actionType/movie/Release'
import {
    CHANGE_COMING_LIST
} from '../../../actionType/movie/Release'
import axios from 'axios';
export const changeReleaseExpectedList = (payload) => {
    return {
        type: CHANGE_RELEASE_EXPECTED_LIST,
        payload
    }
}
export const changeComingList = (payload) => {
    return {
        type: CHANGE_COMING_LIST,
        payload
    }
}
export default {
    gitReleaseExpectedList() {
        return async (dispatch) => {
            const { data } = await axios.get('mostExpected');
            dispatch(changeReleaseExpectedList(data.coming));
        }
    },
    gitReleaseList() {
        return async (dispatch) => {
            const { data } = await axios.get('comingList');
            dispatch(changeComingList(data.coming))
        }
    }
}