import movieSeek from "../../../state/common/seek"
import {CHANGE_SEARCHMOVIE_LIST, CHANGE_SEARCHRECORD_LIST} from "../../../actionType/common/seek"

export default function (state = movieSeek, {type, payload}) {
    state = JSON.parse(JSON.stringify(state));
    if (type === CHANGE_SEARCHMOVIE_LIST) {
        state.searchMovie = payload;
    }
    if (type === CHANGE_SEARCHRECORD_LIST) {
        let searchRecordList = localStorage.searchRecordList ? JSON.parse(localStorage.searchRecordList) : [];
        if (payload.length >= 2) {
            if(searchRecordList.length>6){
                searchRecordList.pop()
            }
            searchRecordList.unshift(payload);
        } else {
            searchRecordList.splice(payload/1,1);
        }
            window.localStorage.searchRecordList = JSON.stringify(searchRecordList);
        state.searchRecordList = searchRecordList;
    }
    return state;
}
