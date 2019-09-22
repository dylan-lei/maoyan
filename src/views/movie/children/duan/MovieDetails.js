import React, { Component } from 'react';
import "../../../../assets/style/movie/movieDetails.css"
import{
    connect
}from 'react-redux'
import {
    bindActionCreators
}from 'redux'
import MovieDetail from '../../../../store/actionCreate/movie/MovieDetail'
import Week from '../../../../views/common/week'
class MovieDetails extends Component{
    render(){
        console.log(this.props)
        const {movieDetail} = this.props.movieDetail;
        // console.log((movieDetail.img+"").replace(/w.h/,''))
        return(
            <div>
                <header className="Movie-navbar">
                    <div className="Movie-nav-header-left" onClick={()=>{this.props.history.go(-1)}}>
                        <a href="##" className="Movie-nav-header-back">
                            <i className="iconfont mao-zuofanhui1"></i>
                        </a>
                    </div>
                    <h1 className="Movie-nav-header-name">{movieDetail.nm}</h1>
                    <div className='whiteBlock'></div>
                </header>
                <div className="Movie-detail">
                    <div className="Movie-filter"></div>
                    <div className="Movie-poster-bg" style={{
                        backgroundImage: "url(//p0.meituan.net/71.100/movie/845dce25ba800e91ac591b683a0c3ba92450317.jpg)"
                    }}></div>
                    <div className="Movie-detail-context">
                        <div className="Movie-detail-context-poster">
                            <img src ={(movieDetail.img+"").replace(/w.h/,'')} alt=""/>
                        </div>
                        <div className="Movie-detail-context-content">
                                <div className="Movie-detail-context-content-title">{movieDetail.nm}</div>
                                <div className="Movie-title-en-name">{movieDetail.enm}</div>
                                <div className="Movie-score">{movieDetail.sc}<span className="Movie-score-snum">({this.tranNumber((movieDetail.snum/1),2)}人评论)</span></div>
                                <div className="Movie-detail-type">
                                    <span>{movieDetail.cat}</span>
                                </div>
                                <div className="Movie-detail-time">{movieDetail.src}/{movieDetail.episodeDur}分钟</div>
                                <div className="Movie-detail-pubDesc">{movieDetail.pubDesc}</div>
                            </div>
                    </div>
                    <div className="Movie-arrow-g">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC" alt=""/>
                    </div>
                </div>
                <div className="Movie-showDays">
                    <ul className="Movie-timeline">
                        <Week></Week>
                    </ul>
                </div>

            </div>

        )
    }
    tranNumber(num,point) {
        let numStr = num.toString()
        // 十万以内直接返回
        if (numStr.length < 6) {
            return numStr;
        }
        //大于8位数是亿
        else if (numStr.length > 8) {
            let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
            return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿';
        }
        //大于6位数是十万 (以10W分割 10W以下全部显示)
        else if (numStr.length > 5) {
            console.log(point,111111)
            // let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
            let decimal =numStr.substring(2,numStr.length-3)
            return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万';
        }
    }
    componentDidMount(){
        this.props.getDetails()
    }
}
function mapStateToProps(state){
    // console.log(state)
    return {
        movieDetail:state.moves.movesDetail
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(MovieDetail,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps) (MovieDetails)
