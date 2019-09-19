import React from "react"
import "../../assets/style/movieSeek.css"
class MovieSeek extends React.Component{
    render(){
        return(
            <div className="p-cinema-search">
                {/*顶部导航*/}
                <header className="navbar">
                    <div className="nav-warp-left" onClick={()=>{this.props.history.go(-1)}}>
                        <a href='##' className="back">
                            <i className="icon-back"></i>
                        </a>
                    </div>
                    <h1 className="nav-header">猫眼电影</h1>
                </header>
                {/*搜索*/}
                <div className="search-wrapper">
                    {/*搜索框*/}
                    <div className="search-header">
                        <div className="input-wrapper">
                            <img className="search-icon" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png"
                                 alt=""/>
                                <input type="text" className={"search-input"} placeholder={"搜电影、搜影院"}/>
                        </div>
                        <div className="cancel"> 取消</div>
                    </div>
                    {/*搜索记录*/}
                    <div className="search-history" style={{display: "block"}}>
                        <div className="history-item">
                            <span className="history-icon iconfont mao-daojishi"></span>
                            <span className="word one-line">上的</span>
                            <div className="del-word iconfont mao-guanbi"></div>
                        </div>
                        <div className="history-item">
                            <span className="history-icon iconfont mao-daojishi"></span>
                            <span className="word one-line">上的</span>
                            <div className="del-word iconfont mao-guanbi"></div>
                        </div>
                    </div>
                    {/*搜索到的电影*/}
                    <div className="search-result">
                        <div className="result-wrapper">
                            <div className="result">
                                <h3>电影/电视剧/综艺</h3>
                                <div className="search-result-list">
                                    {/*搜索到的电影*/}
                                    <div className="movie cell">
                                        <img className="poster"
                                             src="https://p0.meituan.net/128.180/movie/c45ffee0356355ffb37aed513f74756a255437.jpg"
                                             alt=""/>
                                            <div className="p-movie-info">

                                                <div className="p-name-score">
                                                    <p className="p-name">
                                                        <span className="one-line">知晓天空之蓝的人啊</span>
                                                    </p>
                                                    <span className="p-wish">
                                                        <span className="num">270</span>
                                                        人想看
                                                    </span>
                                                </div>
                                                <div className="detail-section">
                                                    <div className="detail-items">
                                                        <p className="p-ename one-line">空の青さを知る人よ</p>
                                                        <p className="catogary">动画</p>
                                                        <p className="release">2019-10-11</p>
                                                    </div>
                                                    <div className="btn toggle-wish-btn">
                                                        <span className="fix">想看</span>
                                                    </div>
                                                </div>

                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieSeek