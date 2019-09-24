import React from "react";
import '../../../assets/style/cinema/details/style.css'
import {
    connect
}from "react-redux"
import {
    bindActionCreators
} from "redux"
import actionCreate from "../../../store/actionCreate/cinemaDetails"
class VipTips extends React.Component{
    render(){
        const {VipInfo} = this.props;
        return(
           <div>
               {
                   VipInfo.map((v,i)=>(
                       <div className="discount-block" key={i}>
                           <div className="vip-tips">
                               <a href="#">
                                   <div className="label">{v.tag}</div>
                                   <div className="label-text line-ellipsis">{v.title}</div>
                                   <div className="process">
                                       {v.process}

                                   </div>
                               </a>
                           </div>
                       </div>
                   ))
               }
           </div>
        )
    }
    componentDidMount() {
        this.props.getCinemaData();

    }
}
function mapStateProps(state){
    return{
        VipInfo:state.cinema.cinemaDetails.vipInfo,
    }
}
function mapDispatchProps(dispatch){
    return bindActionCreators(actionCreate,dispatch)
}
export default connect(mapStateProps,mapDispatchProps)(VipTips)



