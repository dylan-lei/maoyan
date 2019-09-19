import initComing from '../../../state/movie/Release'
import {
    CHANGE_RELEASE_EXPECTED_LIST,
    CHANGE_COMING_LIST
} from '../../../actionType/movie/Release'
export default function (state = initComing, { type, payload }) {
    state = JSON.parse(JSON.stringify(state));
    if (type === CHANGE_RELEASE_EXPECTED_LIST) {
        state.releaseExpectedList = payload;
    }
    if (type === CHANGE_COMING_LIST) {
        state.releaseList = payload;
    }
    return state;
}