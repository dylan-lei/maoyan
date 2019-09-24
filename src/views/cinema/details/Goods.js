import React from "react";
import '../../../assets/style/cinema/details/style.css'
import {
    connect
}from "react-redux"
import {
    bindActionCreators
} from "redux"
import actionCreate from "../../../store/actionCreate/cinemaDetails"
class Goods extends React.Component{
    render(){
        const dealList = this.props.goods.dealList || [] ;
        return(
            <div>
                <div className="tuan-wrap">
                    <div className="gap" style={{height:"10px",backgroundColor:"#f0f0f0"}}></div>
                    <div className="tuan-list" >
                        <div className="tuan-title mb-line-b">影院超值套餐</div>

                    {

                        dealList.map(v=>(
                            <div className="tuan-item mb-line-b" key={v.curNumberDesc}>
                            <img src={v.imageUrl.replace(/w.h/,"")} alt=""/>
                                <span className="hot-tag" style={
                                    {
                                        display:v.cardTag===null?"none":"block"
                                    }
                                }>{v.cardTag}</span>
                                    <div className="item-info">
                                    <div className="title">
                                    <span style={
                                        {
                                            display:v.recommendPersonNum===1?"null":"none"
                                        }
                                    }>单人</span>
                                        <span style={
                                            {
                                                display:v.recommendPersonNum===2?"null":"none"
                                            }
                                        }>双人</span>
                                        <span style={
                                            {
                                                display:v.recommendPersonNum===3?"null":"none"
                                            }
                                        }>多人</span>
                                    {v.title}
                                </div>
                                <div className="sell-num">{v.curNumberDesc}</div>
                                <div className="price">
                                <span className="sell-price">
                                    <span>￥</span>
                                    <span className="num">{v.price}</span>
                                </span>
                                </div>
                                    <div className="buy-btn">去购买</div>
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
        goods:state.cinema.cinemaDetails.dealList,
    }

}
function mapDispatchProps(dispatch){
    return bindActionCreators(actionCreate,dispatch)
}
export default connect(mapStateProps,mapDispatchProps)(Goods)
