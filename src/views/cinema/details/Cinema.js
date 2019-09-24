import React from "react";
import '../../../assets/style/cinema/details/style.css'
import MovieInfo from "./MovieInfo"
import MovieTime from "./MovieTime"
import MovieList from "./MovieList"
import {
    connect
}from "react-redux"
import {
    bindActionCreators
} from "redux"
import actionCreate from "../../../store/actionCreate/cinemaDetails"
import VipTips from "./VipTips";
 class Cinema extends React.Component{
    render(){
        const {ShowData} = this.props;
        return(
            <div>
                <div className="cinema-nav swiper-container swiper-container-horizontal" >
                    <div className="post-bg"></div>
                    <div className="post-bg-filter"></div>
                    <div className="swiper-wrapper" style={{transform: "translate3d(137.5px, 0px, 0px)",transitionDuration: "0ms"}}>
                        {
                                ShowData.map((v,i)=>{
                                    let show= true
                                    for(let m=0;m<ShowData.length;m++) {
                                        if (v.nm === ShowData[0].nm) {
                                            show = true;
                                            if (i === 0 && m === 0) {
                                                show = !show;
                                                break;
                                            } else {
                                                show = false;
                                                break;
                                            }
                                        }
                                    }

                                    return(
                                        <div key={i}>
                                            <div className="swiper-slide" key={v.id}>
                                                <div className="post" >
                                                    <img src={v.img.replace(/w.h/, "")} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                    </div>
                </div>
                <MovieInfo {...this.props} index={0}></MovieInfo>
                <MovieTime {...this.props} index={0}></MovieTime>
                <VipTips></VipTips>
                <MovieList {...this.props} index={0}></MovieList>

            </div>




        )
    }
    componentDidMount() {
        this.props.getCinemaData();

    }
}

function mapStateProps(state){
    return{
        ShowData:state.cinema.cinemaDetails.showData,
    }
}
function mapDispatchProps(dispatch){
    return bindActionCreators(actionCreate,dispatch)
}
export default connect(mapStateProps,mapDispatchProps)(Cinema)
