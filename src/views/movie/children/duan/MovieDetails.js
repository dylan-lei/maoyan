import React,{Component}from 'react';
import '../../../../assets/style/Movie/MovieDetails.css'
import{
    connect
}from 'react-redux'
import {
    bindActionCreators
}from 'redux'
import MovieDetail from '../../../../store/actionCreate/movie/MovieDetail'
class MovieDetails extends Component{
    render(){
        console.log(this.props)
        const {movieDetail} = this.props.movieDetail
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
                        backgroundImage: "url( //p0.meituan.net/71.100/moviemachine/b7362f555340906684944957dfc8d5421530646.jpg)"
                    }}></div>
                    <div className="Movie-poster-bg" style={{backgroundImage:"url(//p0.meituan.net/71.100/moviemachine/b7362f555340906684944957dfc8d5421530646.jpg)"}}></div>
                    <div className="Movie-detail-context">
                        <div className="Movie-detail-context-poster">
                            <img src ={(movieDetail.img+"").replace(/w.h/,'')} alt=""/>
                        </div>
                        <div className="Movie-detail-context-content">
                                <div className="Movie-detail-context-content-title">{movieDetail.nm}</div>
                                <div className="Movie-title-en-name">{movieDetail.enm}</div>
                                <div className="Movie-score">{movieDetail.sc}<span className="Movie-score-snum">(15.4人评论)</span></div>
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
                        <li data-day="2019-09-16" className="Movie-showDay-chosen">今天09月16号</li>
                        <li data-day="2019-09-16" className="Movie-showDay-chosen">今天09月16号</li>
                        <li data-day="2019-09-16" className="Movie-showDay-chosen">今天09月16号</li>
                        <li data-day="2019-09-16" className="Movie-showDay-chosen">今天09月16号</li>
                        <li data-day="2019-09-16" className="Movie-showDay-chosen">今天09月16号</li>
                    </ul>
                </div>
            </div>  
            
        )
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