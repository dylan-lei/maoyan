import "../../../assets/style/cinema/index.css"
import React from "react"
import {Tabs} from 'antd-mobile';

import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux"
import actionCreate from '../../../store/actionCreate/cinema';

import PubSub from 'pubsub-js'
class ExactSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCityShow: false,
            isBrandShow: false,
            isFeatureShow: false,
            isZindex:true,

            subWay:[],
            subItems:[],
            brandId:-1
        }
    }

    cityShow() {
        this.setState({
            isCityShow: !this.state.isCityShow,
            isBrandShow: false,
            isFeatureShow: false,
            isZindx:!this.state.isZindex
        })


        if(this.state.isCityShow){
            PubSub.publish("lala",false)
        }else {
            PubSub.publish("lala",true)
        }
    }

    brandShow() {
        this.setState({
            isCityShow: false,
            isBrandShow: !this.state.isBrandShow,
            isFeatureShow: false
        })
        if(this.state.isBrandShow){
            PubSub.publish("lala",false)
        }else {
            PubSub.publish("lala",true)
        }
    }

    featureShow() {
        this.setState({
            isCityShow: false,
            isBrandShow: false,
            isFeatureShow: !this.state.isFeatureShow
        })
        if(this.state.isFeatureShow){
            PubSub.publish("lala",false)
        }else {
            PubSub.publish("lala",true)
        }
    }

    render() {
        const brand = this.props.cityDetailList.brand.subItems;
        const service = this.props.cityDetailList.service.subItems;
        const hallType = this.props.cityDetailList.hallType.subItems;
        const district = this.props.cityDetailList.district.subItems;
        const subway = this.props.cityDetailList.subway.subItems;
        const tabs = [
            {title: '商区'},
            {title: '地铁'}
        ];
        return (
            <div className={"backcolor"}>
                <div className={"lv-left"}></div>
                <div className={"lv-right"}></div>
                <div className={"wrap"}>
                    <div className={"tabs-top line"}>
                        <div style={{color:this.state.isCityShow ? "#e54847" : "#777"}} onClick={this.cityShow.bind(this)}>全城
                            <i style={{ color:this.state.isCityShow ? "#e54847" : "#777",transform:this.state.isCityShow?"rotate(180deg)":"rotate(0deg)",marginBottom:this.state.isCityShow?"4px":"0"}} className='city-entry-arrow lv-lala'></i>
                        </div>
                        <p style={{
                            marginTop: "10px",
                            borderRight: "1px solid #e8e8e8",
                            height: "20px",
                            width: "0 !important"
                        }}></p>
                        <div style={{color:this.state.isBrandShow ? "#e54847" : "#777"}} onClick={this.brandShow.bind(this)}>品牌
                            <i style={{transform:this.state.isBrandShow?"rotate(180deg)":"rotate(0deg)",marginBottom:this.state.isBrandShow?"4px":"0"}} className='city-entry-arrow lv-lala'></i>
                        </div>
                        <p style={{
                            marginTop: "10px",
                            borderRight: "1px solid #e8e8e8",
                            height: "20px",
                            width: "0 !important"
                        }}></p>
                        <div style={{color:this.state.isFeatureShow ? "#e54847" : "#777"}} onClick={this.featureShow.bind(this)}>特色
                            <i style={{transform:this.state.isFeatureShow?"rotate(180deg)":"rotate(0deg)",marginBottom:this.state.isFeatureShow?"4px":"0"}} className='city-entry-arrow lv-lala'></i>
                        </div>
                    </div>
                    <div style={{backgroundColor: '#fff', display: this.state.isCityShow ? "block" : "none"}}>
                        <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
                            <div className={"llllllllllll"}
                                 style={{display: 'flex', height: '402.5px', backgroundColor: '#fff'}}>
                                <div className={"district"}>
                                    {
                                        district.map(v=>(
                                            <div className={"district-details"} onClick={()=>{
                                                this.setState({
                                                    subItems:v.subItems || []
                                                })
                                            }} key={v.id}>
                                                {v.name}({v.count})
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className={"district-details-dev"}>
                                    {
                                        this.state.subItems.map(v=>(
                                            <div key={v.id} onClick={this.cityShow.bind(this)} className={"district-details-dev-d"}>
                                                <span>{v.name}</span>
                                                <span>{v.count}</span>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                            <div style={{display: 'flex', height: '402.5px', backgroundColor: '#fff'}}>
                                <div className={"district"}>
                                    {
                                        subway.map(v=>(
                                            <div className={"district-details"} onClick={()=>{
                                                this.setState({
                                                    subWay:v.subItems || []
                                                })
                                            }} key={v.id}>{v.name}({v.count})</div>
                                        ))
                                    }
                                </div>

                                <div className={"district-details-dev"}>
                                    {
                                        this.state.subWay.map(v=>(
                                            <div  key={v.id} className={"district-details-dev-d"}>
                                                <span>{v.name}</span>
                                                <span>{v.count}</span>
                                            </div>
                                        ))
                                    }

                                </div>
                        </div>
                        </Tabs>
                    </div>
                    <div style={{display: this.state.isBrandShow ? "block" : "none"}}>
                        <div style={{overflow: 'auto', height: '345px', backgroundColor: '#fff'}}>
                            {
                                brand.map(v => (
                                    <div onClick={()=>{
                                        this.setState({
                                            brandId:v.id
                                        })
                                        console.log(this.state.brandId,6666666666)
                                    }} key={v.id} className={"lv-brand-child"}>
                                        <span>{v.name}</span>
                                        <span className={"lv-brand-child-02"}>{v.count}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div style={{display: this.state.isFeatureShow ? "block" : "none"}}>
                        <div style={{height: '343px', backgroundColor: '#fff'}}>
                            <div className={"lv-feature-top"}>
                                <div className={"lv-feature-top-build"}>
                                    特色功能
                                </div>
                                <div className={"lv-feature-top-one"}>
                                    {
                                        service.map(v => (
                                            <div key={v.id} className={"lv-feature-top-button"}>{v.name}</div>
                                        ))
                                    }
                                </div>
                                <div className={"lv-feature-top-build"}>
                                    特殊厅
                                </div>
                                <div className={"lv-feature-top-one"} style={{height: '192px'}}>
                                    {
                                        hallType.map(v => (
                                            <div key={v.id} className={"lv-feature-top-button"}>{v.name}</div>
                                        ))
                                    }


                                </div>
                            </div>
                            <div className={"lv-feature-bottom"}>
                                <div className={"lv-feature-bottom-left"}>重置</div>
                                <div className={"lv-feature-bottom-right"}>确定</div>
                            </div>
                        </div>
                    </div>

                    {/*</Tabs>*/}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getCityDetailList()
        PubSub.subscribe("xixi",function (msg,data) {
            this.setState({
                isCityShow: data.isCityShow,
                isBrandShow: data.isBrandShow,
                isFeatureShow: data.isFeatureShow,
            })
        }.bind(this))
    }
}

function mapStateToProps(state) {
    return {
        cityDetailList: state.cinema.cinemaIndex.cityDetailList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreate, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExactSelect)