import React from "react"
import "../../assets/style/movieSeek.css"
import {SearchBar, ActivityIndicator} from 'antd-mobile';
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import actionSeek from "../../store/actionCreate/common/seek"
import loding from  "../../components/loding"
class MovieSeek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            animating:true
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({ animating:false});
        },200)

    }
    render() {
        let recordList = this.props.searchRecordList.length > 0 ? this.props.searchRecordList : [];
        let movieList = this.props.searchMovie.movies ? this.props.searchMovie.movies : [];
        movieList = movieList.list && this.state.key.length > 0 ? movieList.list : [];
        return (
            <div className="p-cinema-search">

                {/*顶部导航*/}
                <header className="navbar">
                    <div className="nav-warp-left" onClick={() => {
                        this.props.history.go(-1)
                    }}>
                        <a href="##" className="back">
                            <i className="icon-back"></i>
                        </a>
                    </div>
                    <h1 className="nav-header">猫眼电影</h1>
                </header>
                {/*搜索*/}
                <div className="search-wrapper">
                    {/*搜索框*/}
                    <SearchBar
                        value={this.state.key}
                        placeholder="Search"
                        onCancel={() => this.clear()}
                        showCancelButton
                        onChange={this.onChange}
                    />

                    {/*搜索记录*/}
                    <div className="search-history" style={{display: (movieList.length <= 0 ? "block" : "none")}}>
                        {
                            recordList.map((v, i) => (
                                <div className="history-item" key={i} onClick={() => {
                                    this.setState({
                                        key: v
                                    })
                                }}>
                                    <span className="history-icon iconfont mao-daojishi"></span>
                                    <span className="word one-line">{v}</span>
                                    <div className="del-word iconfont mao-guanbi" onClick={() => {
                                        this.props.changeSearchRecord_props(i)
                                    }}></div>
                                </div>
                            ))
                        }

                    </div>
                    {/*搜索到的电影*/}

                    <div className="search-result" style={{display: (movieList.length > 0 ? "block" : "none")}}>
                        <div className="result-wrapper">
                            <div className="result">
                                <h3>电影/电视剧/综艺</h3>
                                {
                                    movieList.map(v => (
                                        <div className="search-result-list" key={v.id}>
                                            {/*搜索到的电影*/}
                                            <div className="movie cell">
                                                <img className="poster"
                                                     src={v.img.replace(/w.h/g, "")}
                                                     alt=""/>
                                                <div className="p-movie-info">

                                                    <div className="p-name-score">
                                                        <p className="p-name">
                                                            <span className="one-line">{v.nm}</span>
                                                        </p>
                                                        <span className="p-wish">
                                                        <span className="num">{v.wish}</span>
                                                        人想看
                                                    </span>
                                                    </div>
                                                    <div className="detail-section">
                                                        <div className="detail-items">
                                                            <p className="p-ename one-line">{v.enm}</p>
                                                            <p className="catogary">{v.cat}</p>
                                                            <p className="release">{v.rt}</p>
                                                        </div>
                                                        <div className="btn toggle-wish-btn">
                                                            <span className="fix">想看</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="search-history "
                                     style={{display: (movieList.length > 3 ? "block" : "none")}}>
                                    <div className={"history-item"} style={{
                                        textAlign: "center", justifyContent: "center", fontSize: "15px",
                                        color: "#ef4238"
                                    }}>
                                        查看全部{movieList.length}部影视剧
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    onChange = (value) => {
        this.setState({key: value});
        this.props.getMovieList(value);
        if (value.length >= 3) {
            this.props.changeSearchRecord_props(value)
        }
    };
    clear = () => {
        this.setState({key: ''});
    };

}

const mapStateToProps = (state, props) => {
    return {
        searchRecordList: state.common.seek.searchRecordList,
        searchMovie: state.common.seek.searchMovie

    }
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators(actionSeek, dispatch))(loding(MovieSeek))