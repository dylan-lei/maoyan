import React from "react";
import "../../../assets/style/Movie/Release/release.css"
import MostExpected from "../children/zhang/MostExpected";
import ComingList from '../children/zhang/ComingList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReleaseList from '../../../store/actionCreate/movie/Release'
class Release extends React.Component {
    render() {
        return (
            <div className="page-wrap">
                <div className="tab-block">
                    <div className="page f-hot active">
                        <div className="list-wrap">
                            <MostExpected {...this.props}></MostExpected>
                            <ComingList {...this.props}></ComingList>
                        </div>
                        <div className="coming-list"></div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        releaseExpectedList: state.moves.release.releaseExpectedList,
        releaseList: state.moves.release.releaseList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReleaseList,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (Release);