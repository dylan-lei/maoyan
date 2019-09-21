import React from "react";
import "../../../assets/style/movie/release/release.css"
import MostExpected from "../children/zhang/MostExpected";
import ComingList from '../children/zhang/ComingList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReleaseList from '../../../store/actionCreate/movie/Release'
import { ActivityIndicator } from 'antd-mobile';

class Release extends React.Component {
    constructor(){
        super();
        this.state={
            animating: true,
            loading:false
        }
    }
    changeLoading() {
        this.setState({
            loading: true
        })
    }
    
    render() {
        return (
            <div className="page-wrap">
                <div className="tab-block">
                    <div className="page f-hot active">
                        <div className="list-wrap">
                            <MostExpected {...this.props}></MostExpected>
                            <ComingList {...this.props} {...this.changeLoading}></ComingList>
                        </div>
                        <div className="coming-list"></div>
                        <div style={{
                            width: "20px",
                            margin: "0 auto",
                            textAlign:"center"
                        }}>
                            < ActivityIndicator animating / >
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
        releaseList: state.moves.release.releaseList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReleaseList,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (Release);