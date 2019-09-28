import "../../../assets/style/cinema/index.css"
import React from "react"
import {Tabs} from "antd-mobile";
import {bindActionCreators} from "redux";
import actionCreate from "../../../store/actionCreate/cinema";
import {connect} from "react-redux";

class Try extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isCityShow:false,
            isBrandShow:false,
            isFeatureShow:false
        }
    }
    cityShow(){
        this.setState({
            isCityShow:!this.state.isCityShow,
            isBrandShow:false,
            isFeatureShow:false
        })
        console.log(this.state.isShow)
    }
    brandShow(){
        this.setState({
            isCityShow:false,
            isBrandShow:!this.state.isBrandShow,
            isFeatureShow:false
        })
        console.log(this.state.isShow)
    }
    featureShow(){
        this.setState({
            isCityShow:false,
            isBrandShow:false,
            isFeatureShow:! this.state.isFeatureShow
        })
        console.log(this.state.isShow)
    }
    render() {
        console.log(this.props)
        const tabs = [
            { title: '商区' },
            { title: '地铁' }
        ];
        const brand = this.props.cityDetailList.brand.subItems;
        const service = this.props.cityDetailList.service.subItems;
        const hallType = this.props.cityDetailList.hallType.subItems;
        return(
            <div>
                <div className={"tabs-top line"}>
                    <div onClick={this.cityShow.bind(this)}>全城<i className='city-entry-arrow lv-lala'></i></div>
                    <p style={{marginTop:"10px",borderRight:"1px solid #e8e8e8",height:"20px",width:"0 !important"}}></p>
                    <div onClick={this.brandShow.bind(this)} >品牌<i className='city-entry-arrow lv-lala'></i></div>
                    <p style={{marginTop:"10px",borderRight:"1px solid #e8e8e8",height:"20px",width:"0 !important"}}></p>
                    <div onClick={this.featureShow.bind(this)}>特色<i className='city-entry-arrow lv-lala'></i></div>
                </div>
                <div style={{width:"358px", backgroundColor: '#fff',display:this.state.isCityShow ? "block" : "none"}}>
                    <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
                        <div className={"llllllllllll"} style={{ display: 'flex', height: '402.5px', backgroundColor: '#fff'}}>
                            <div className={"district"}>

                                <div className={"district-details"}>全部(253)</div>
                                <div className={"district-details"}>全部(253)</div>
                                <div className={"district-details"}>全部(253)</div>
                                <div className={"district-details"}>全部(253)</div>
                                <div className={"district-details"}>全部(253)</div>
                                <div className={"district-details"}>全部(253)</div>
                                <div className={"district-details"}>全部(253)</div>
                                <div className={"district-details"}>全部(253)</div>
                                <div className={"district-details"}>全部(253)</div>
                                <div className={"district-details"}>全部(253)</div>
                                <div className={"district-details"}>全部(253)</div>
                            </div>

                            <div className={"district-details-dev"}>
                                <div className={"district-details-dev-d"}>全部</div>
                            </div>
                        </div>
                        q                    <div style={{ display: 'flex', height: '402.5px', backgroundColor: '#fff' }}>
                        <div>分工会尽快</div>
                        <div>dgjfgjfdh</div>
                    </div>
                    </Tabs>
                </div>
                <div style={{display:this.state.isBrandShow ? "block" : "none"}}>
                    <div style={{ display: 'flex',flexDirection: 'column',overflow: 'auto',  height: '345px', backgroundColor: '#fff' }}>
                        {
                            brand.map(v=>(
                                <div key={v.id} className={"lv-brand-child"}>
                                    <span>{v.name}</span>
                                    <span className={"lv-brand-child-02"}>{v.count}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div style={{display:this.state.isFeatureShow ? "block" : "none"}}>
                    <div style={{ height: '343px',backgroundColor: '#fff'}}>
                        <div className={"lv-feature-top"}>
                            <div className={"lv-feature-top-build"} >
                                特色功能
                            </div>
                            <div className={"lv-feature-top-one"}>
                                {
                                    service.map(v=>(
                                        <div key={v.id} className={"lv-feature-top-button"}>{v.name}</div>
                                    ))
                                }
                            </div>
                            <div className={"lv-feature-top-build"} >
                                特殊厅
                            </div>
                            <div className={"lv-feature-top-one"} style={{height:'192px'}}>
                                {
                                    hallType.map(v=>(
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
            </div>
        )
    }
    componentDidMount() {
        this.props.getCityDetailList()
    }
}

function mapStateToProps(state) {
    return{
        cityDetailList:state.cinema.cinemaIndex.cityDetailList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreate,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Try)