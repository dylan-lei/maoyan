import React from "react";
import '../../../assets/style/movie/release/release.css'

import MostExpected from "../children/zhang/MostExpected";
import ComingList from '../children/zhang/ComingList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReleaseList from '../../../store/actionCreate/movie/Release'
import { ActivityIndicator } from 'antd-mobile';

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
                        <div style={{
                            padding: "5px 0",
                            width: this.props.isLoad ? "" : "20px",
                            margin: "0 auto",
                            textAlign:"center"
                        }}>
                            {
                                this.props.isLoad ? "亲，没有数据啦...": <ActivityIndicator animating = {
                                    true
                                }/>
                            }
                        </div>
                        <div style={{height:'48px'}}></div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        releaseExpectedList: state.moves.release.releaseExpectedList,
        releaseList: state.moves.release.releaseList,
        isLoad: state.moves.release.isLoad
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReleaseList,dispatch)
}




export default connect(mapStateToProps,mapDispatchToProps) (Release);

