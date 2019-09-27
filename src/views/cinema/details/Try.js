import React from "react";
import '../../../assets/style/cinema/details/style.css'
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import actionCreate from "../../../store/actionCreate/cinemaDetails/try"

class Try extends React.Component{

    render(){
        const {Try} = this.props;
        console.log(Try)
        return(

            <div>


                    <div className="cinema-nav swiper-container swiper-container-horizontal">
                        <div className="post-bg" style={{backgroundImage:"url(http://p0.meituan.net/148.208/movie/2918a5e403dde6e4254941968d7719ce3942369.jpg)"}}></div>
                        <div className="post-bg-filter"></div>
                        <div className="swiper-wrapper" >
                            <div className="swiper-slide">
                                <div className="post" data-bid="dp_wx_cinema_movie_pic_click">
                                    <img src="" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>




                {/*    <div className="movie-info">*/}
                {/*        <div className="movie-title line-ellipsis">*/}
                {/*            <span className="title">罗小黑战记</span>*/}
                {/*            <span className="grade">*/}
                {/*            <span>*/}
                {/*             9.4*/}
                {/*            <span className="small">分</span>*/}
                {/*            </span>*/}
                {/*        </span>*/}
                {/*        </div>*/}
                {/*        <div className="movie-desc">101分钟 | 动画 | 山新，郝祥海，皇贞季</div>*/}
                {/*    </div>*/}

                {/*    <div className="nav-wrap">*/}
                {/*        <div className="nav-block mb-line-t">*/}
                {/*            <div className="nav-bar mb-line-b ">*/}
                {/*                <div className="nav-bar-wrap ">*/}
                {/*                    <div className="nav-item active" data-bid="dp_wx_cinema_show_date"*/}
                {/*                         data-id="2019-09-16">*/}
                {/*                        <span className="date-title">今天9月16日</span>*/}
                {/*                    </div>*/}
                {/*                    <div className="nav-item" data-bid="dp_wx_cinema_show_date" data-id="2019-09-17">*/}
                {/*                        <span className="date-title">明天9月17日</span>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}


                {/*<div className="seat-inner-wrap">*/}
                {/*    <div className="seat-list">*/}
                {/*        <div className="list-wrap">*/}
                {/*            <div className="item-outer mb-line-b" data-bid="dp_wx_cinema_show_item">*/}
                {/*                <div className="item box-flex">*/}
                {/*                    <div className="time-block">*/}
                {/*                        <div className="begin">11:00</div>*/}
                {/*                        <div className="end">*/}
                {/*                            12:41*/}
                {/*                            <span className="tui">散场</span>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="info-block">*/}
                {/*                        <div className="lan">*/}
                {/*                            国语*/}
                {/*                            2D*/}
                {/*                        </div>*/}
                {/*                        <div className="hall">2号厅</div>*/}
                {/*                    </div>*/}
                {/*                    <div className="price">*/}
                {/*                        <div className="sellPr">*/}
                {/*                            <span className="d">￥</span>*/}
                {/*                            <span>*/}
                {/*                <span className="stonefont"></span>*/}
                {/*            </span>*/}
                {/*            </div>*/}
                {/*            <div className="vipPrice">*/}
                {/*            <span className="icons">折扣卡</span>*/}
                {/*            <span className="num">*/}
                {/*                ￥*/}
                {/*                33*/}
                {/*            </span>*/}
                {/*            </div>*/}
                {/*            <div className="extraDesc">折扣卡首单特惠</div>*/}
                {/*            </div>*/}
                {/*            <div className="button-block">*/}
                {/*                <div className="button" data-bid="dp_wx_cinema_show_btn">购票</div>*/}
                {/*            </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        )
    }
    componentDidMount() {
        this.props.getTryData();
    }
}
function mapStateProps(state) {
    return {
        Try: state.cinema.cinemaDetails.try,
    }
}

function mapDispatchProps(dispatch) {
    return bindActionCreators(actionCreate, dispatch)
}

export default connect(mapStateProps, mapDispatchProps)(Try)
