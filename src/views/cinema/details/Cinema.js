import React from "react";
import '../../../assets/style/cinema/details/style.css'
import {
    connect
}from "react-redux"
import {
    bindActionCreators
} from "redux"
import actionCreate from "../../../store/actionCreate/cinemaDetails"
 class Cinema extends React.Component{
    render(){
        const {ShowData} = this.props;
        return(
         <div>


            <div className="cinema-nav swiper-container swiper-container-horizontal" >
               <div className="post-bg"></div>
               <div className="post-bg-filter"></div>
               <div className="swiper-wrapper">
                   {
                       ShowData.map(v=>(
                           <div key={v.id}>

                           <div className="swiper-slide swiper-slide-prev"  >
                           <div className="post">
                               <img src={v.img.replace(/w.h/,"")} alt=""/>
                           </div>

                               <div className="movie-info">
                                   <div className="movie-title line-ellipsis">
                                       <span className="title">{v.nm}</span>
                                       <span className="grade">
                                <span>
                                    {v.sc}
                                <span className="small">分</span>
                                </span>
                          </span>
                                   </div>
                                   <div className="movie-desc">{v.desc}</div>
                               </div>
                           </div>

                                </div>








                       ))
                   }

           </div>

            </div>








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
