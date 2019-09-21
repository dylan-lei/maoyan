import React, {Component} from 'react'
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import "../../../assets/style/movie/nowhot.css"
import movieListCreate from '../../../store/actionCreate/movie/BeingMovie'

class BeingMovieBox extends Component {
    render() {
        const {nowMovieList} = this.props
        const {history} = this.props
        return (
            <div>
                {/*正在热映 渲染部分 this.props.histroy.push('/nav/movie/details')*/}
                {
                    nowMovieList.map(v => (
                        <div key={v.id} onClick={() => {
                            history.push({pathname: '/details', state: {detailsId: v.id}})
                        }}>
                            <div className="main_block">
                                <div className="avatar_left">
                                    <img src={v.img.replace(/w.h/, '')} alt=''/>
                                </div>
                                <div className="avatar_right">
                                    <div className="box-context">
                                        <div className="box-title">
                                            <div className="box-title-left">{v.nm}</div>
                                            <span
                                                className={v.version === "v2d imax" ? "box-title-right" : "box-title-right-3d"}>&nbsp;</span>
                                        </div>
                                        <div className="box-bottom">
                                            <div className="score">
                                                <span className="score-suffix">观众评分</span>
                                                <span className="grade">{v.sc}</span>
                                            </div>
                                            <div className="box-bottom-actor">主演:{v.star}</div>
                                            <div className="box-show-info">{v.showInfo}</div>
                                        </div>
                                    </div>
                                    <div className="box-button-block">
                                        <div className={v.globalReleased ? "box-btn" : "box-btn-blue"}>
                                            <span className="box-btn-fix">{v.globalReleased ? "购买" : "预售"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {/* 渲染部分结束 */}
            </div>
        )
    }

    componentDidMount() {
        this.props.getNowMovieList()
        //修改站标
        const str ="http://s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/icon/faviconmy.ico";
        if (this.props.location.pathname === "/nav/movie/hot") {
            document.title = "猫眼电影"
            document.querySelector(".titl-logo").href=str;
        }
    }
}

function mapStateToProps(state) {
    return {
        nowMovieList: state.moves.movesnow.nowMovieList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(movieListCreate, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BeingMovieBox)