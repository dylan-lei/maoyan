import React from "react";
import '../../../assets/style/cinema/details/style.css'
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import actionCreate from "../../../store/actionCreate/cinemaDetails"
import VipTips from "./VipTips";

let Swiper = window.Swiper;

class Cinema extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // imgIndex:[]
        }


    }



    componentDidUpdate() {
        // if (this.state.imgIndex === 0) {
            new Swiper('.swiper-container', {
                effect: 'slide',
                slidesPerView: 4,
                spaceBetween: 30,
                centeredSlides: true,
                simulateTouch: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },


                // on: {
                //     slideChangeTransitionEnd:
                //         () => {
                //             this.setState({
                //                 imgIndex: mySwiper.activeIndex
                //             })
                //         }
                // }
            });
        }
        // }

            //  new Swiper('.swiper-container',{
            //     slidesPerView :6,
            //     spaceBetween : 20,
            //      simulateTouch : false,//禁止鼠标模拟
            //     //spaceBetween : '10%',按container的百分比
            // })


            // let mySwiper = new Swiper('.swiper-container', {
            //     effect: 'slide',
            //     slidesPerView: 4,
            //     spaceBetween: 30,
            //     centeredSlides: true,
            //     simulateTouch: true,
            //     // loop: true,
            //     // pagination: {
            //     //     el: '.swiper-pagination',
            //     //     clickable: true,
            //     //        },
            //     on: {
            //         slideChangeTransitionEnd:
            //             () => {
            //                 this.setState({
            //                     imgIndex: mySwiper.activeIndex
            //                 })
            //             }
            //     }
            // })





    render(){
        const {ShowData} = this.props;
        const data =ShowData[0].shows[0].plist || []
        // let {imgIndex} = this.state;


        if (JSON.stringify(ShowData) === "{}") {
            return (
                null
            )
        } else {
            return (
                <div>
                    <div className=" swiper-container ">
                    <div className="post-bg"></div>
                    <div className="post-bg-filter"></div>
                    <div className="swiper-wrapper">
                        {ShowData.map((v,i)=>{
                            return(
                                <div className="swiper-slide post" key={i}>
                                <img src={v.img.replace(/w.h/, "")} alt=""/>
                                </div>
                            )

                        })}
                    </div>
                    </div>

            <div className="movie-info">
                <div className="movie-title line-ellipsis">
                    <span className="title">{ShowData[0].nm}</span>
                    <span className="grade">
                        <span>
                            {ShowData[0].sc}
                            <span className="small">分</span>
                        </span>
                  </span>
                </div>
                <div className="movie-desc">{ShowData[0].desc}</div>
            </div>



        <div className="nav-wrap">
            <div className="nav-block mb-line-t">
                <div className="nav-bar mb-line-b ">
                    <div className="nav-bar-wrap ">
                        <div className="nav-item active">

                                {ShowData[0].shows[0].dateShow}

                            </div>
                    </div>
                </div>
            </div>
        </div>

            <VipTips></VipTips>

            <div className="seat-inner-wrap">
                <div className="seat-list">
                    <div id={'list-wrap'} className="list-wrap">
                    {
                       data.map((v,i)=>{
                           return(
                               <div className="item-outer mb-line-b" data-bid="dp_wx_cinema_show_item">
                                   <div className="item box-flex">
                                       <div className="time-block" key={i}>
                                           <div className="begin">{v.tm}</div>
                                           <div className="end">
                                               <span className="tui">散场</span>
                                           </div>
                                       </div>
                                       <div className="info-block">
                                           <div className="lan">
                                               {v.lang}
                                               {v.tp}
                                           </div>
                                           <div className="hall">{v.th}</div>
                                       </div>
                                       <div className="price">
                                           <div className="sellPr">
                                               <span className="d">￥</span>
                                               <span className="stonefont">{v.vipPrice?v.vipPrice/1+5:39}</span>

                                           </div>
                                           <div className="vipPrice">
                                               <span className="icons">{v.vipPriceName}</span>
                                               <span className="num">
                                                    ￥
                                                   {v.vipPrice}
                                            </span>
                                           </div>
                                           <div className="extraDesc">{v.extraDesc}</div>
                                       </div>
                                       <div className="button-blocks">
                                           <div className="button" data-bid="dp_wx_cinema_show_btn">购票</div>
                                       </div>
                                   </div>
                               </div>
                           )

                       })

                    }
                    </div>
                </div>
            </div>

                </div>


            )
        }


    }

    componentDidMount() {
        this.props.getCinemaData();
        //     this.Swiper = new Swiper('.swiper-container', {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //         centeredSlides: true,
        //         loop: true,
        //         pagination: {
        //             el: '.swiper-pagination',
        //             clickable: true,
        //         },
        //
        // })
    }
}

function mapStateProps(state) {
    return {
        ShowData: state.cinema.cinemaDetails.showData,
    }
}

function mapDispatchProps(dispatch) {
    return bindActionCreators(actionCreate, dispatch)
}

export default connect(mapStateProps, mapDispatchProps)(Cinema)
