import React, { Component } from 'react'
import axios from 'axios';
import{
    connect
}from 'react-redux'
import {
    bindActionCreators
}from 'redux'
import{
    withRouter
}from 'react-router-dom'
import movieListCreate from '../../../store/actionCreate/movie/BeingMovie'
class BeingMovieBox extends Component {
    render() {
        const {nowMovieList} = this.props
        // const {histroy} = this.props
        console.log(this.props)
        return (
            <div>
                {/*正在热映 渲染部分 this.props.histroy.push('/nav/movie/details')*/}
                {
                    nowMovieList.map(v=>(
                        <div key={v.id} onClick={()=>{console.log(111)}}>
                            <div className="main_block">
                                <div className="avatar_left">
                                    <img src={v.img.replace(/w.h/,'')} />
                                </div>
                                <div className="avatar_right">
                                    <div className="box-context">
                                        <div className="box-title">
                                            <div className="box-title-left">{v.nm}</div>
                                            <span className={v.version==="v2d imax"?"box-title-right":"box-title-right-3d"} >&nbsp;</span>
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
                                        <div className={v.globalReleased?"box-btn":"box-btn-blue"}>
                                            <span className="box-btn-fix">{v.globalReleased?"购买":"预售"}</span>
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
    componentDidMount(){
       this.props.getNowMovieList()
    }
}
function mapStateToProps(state){
    return{
        nowMovieList:state.moves.movesnow.nowMovieList
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(movieListCreate,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps) (withRouter(BeingMovieBox))