import {
    CHANGE_SEARCHMOVIE_LIST,
    CHANGE_SEARCHRECORD_LIST
} from "../../../actionType/common/seek"
import axios from "axios";

const changeSearchMovie = (payload) => {
    return {
        type: CHANGE_SEARCHMOVIE_LIST,
        payload
    }
};
const changeSearchRecord = (payload) => {
    return {
        type: CHANGE_SEARCHRECORD_LIST,
        payload
    }
};
export default {
    getMovieList(value) {
        return async (dispatch) => {
            axios.get("searchMovieList/?key=" + value)
                .then(data => {
                    dispatch(changeSearchMovie(data));
                });

        }
    },
    changeSearchRecord_props(record) {
        return (dispatch) => {
            dispatch(changeSearchRecord(
                record
            ))
        };

    }
}
