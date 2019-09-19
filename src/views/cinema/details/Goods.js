import React from "react";
import axios from "axios";
import '../../../assets/style/cinema/details/style.css'
// import {
//     connect
// }from "react-redux"
// import {
//     bindActionCreators
// } from "redux"
// import actionCreate from "../../../store/actionCreate/cinemaDetails"
class Goods extends React.Component{
    render(){
        const {dealList} = this.state;
        console.log(dealList);
        return(
            dealList.dealList.map(v=>(
                <div className="tuan-wrap" key={v.cinemaId}>
                    <div className="gap" style={{height:"10px",backgroundColor:"#f0f0f0"}}></div>
                    <div className="tuan-list">
                        <div className="tuan-title mb-line-b">影院超值套餐</div>
                        <div className="tuan-item mb-line-b" >
                            <img src={v.dealList.imageUrl} alt=""/>
                            <span className="hot-tag">HOT</span>
                            <div className="item-info">
                                <div className="title">
                                    <span>{v.divideDealList.titleId}</span>
                                    {v.dealList.title}
                                </div>
                                <div className="sell-num">{v.dealList.curNumberDesc}</div>
                                <div className="price">
                                    <span className="sell-price">
                                        <span>￥</span>
                                        <span className="num">{v.dealList.price}</span>
                                    </span>
                                </div>
                                <div className="buy-btn">去购买</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))

        )
    }
    async listMore(){
        const {data} = await this.axios.get("cinemaDetail/?cinemaId="+107)
        console.log(data)
        this.setState({
            dealList:data.dealList,

        })

    }

    componentDidMount() {
        this.listMore();
    }
}
