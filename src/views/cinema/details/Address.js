import React from "react";
import '../../../assets/style/cinema/details/style.css'
import {
    withRouter
}from "react-router-dom"
import {
    connect
}from "react-redux"
import {
    bindActionCreators
} from "redux"

import actionCreate from "../../../store/actionCreate/cinemaDetails"

class Address extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        console.log(this.props);


        return(
            <div>
                <header className="navbars">
                    <div className="nav-wraps-left">
                        <a href="#" className="backs">
                            <i className="icon-backs">

                            </i>
                        </a>
                    </div>
                    <h1 className="nav-headers">猫眼电影</h1>
                </header>

                <div className="body" >
                    <div className="cinema-wrapper">
                        <div className="cinema-info">
                            <h2 className="names">中影国际影城（昌平永旺店）</h2>
                            <div className="contact">
                                <img className="map" src="" alt=""/>
                                    <div className="address">
                                        <p>昌平区北清路1号永旺国际商城3楼</p>
                                    </div>
                                    <a href="tel:010-88177970" className="phone">
                                        <img src="" alt=""/>
                                    </a>
                            </div>
                        </div>

                        <div className="cinema-features">
                            <h3>特色信息</h3>
                            <div className="feature-cell">
                                <span className="tag">3D眼镜</span>
                                <p className="desc">免押金，免费提供镜片擦拭纸</p>
                            </div>
                            <div className="feature-cell">
                                <span className="tag">儿童优惠</span>
                                <p className="desc">1.3米（含）以下儿童观看2D/3D/巨幕影片免费（无座），一名成人限带一名免票儿童，超过的儿童数量和身高超过1.3米的儿童，需等同成人购</p>
                            </div>
                            <div className="feature-cell">
                                <span className="tag">可停车</span>
                                <p className="desc">3000台免费停车位，商场三层室内停车场可直达影城大堂</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    componentDidMount() {
        // const idd = this.props.location.state.id;

        // console.log(idd)


        this.props.getCinemaData();
    }
}
function mapStateProps(state){
    return{
       Addr:state.cinema.cinemaDetails.addr
    }

}
function mapDispatchProps(dispatch){
    return bindActionCreators(actionCreate,dispatch)
}
export default withRouter(connect(mapStateProps,mapDispatchProps)(Address))
