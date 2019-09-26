import "../../../assets/style/cinema/index.css"
import React from "react"
import { Tabs } from 'antd-mobile';

import {
    connect
} from "react-redux";
import {
    bindActionCreators
}from "redux"
import actionCreate from '../../../store/actionCreate/cinema';



class ExactSelect extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isShow : false
        }
    }
    show(){
        this.setState({
            isShow:!this.state.isShow
        })
        console.log(this.state.isShow)
    }
    render() {
        console.log(this.props,77777)
        const brand = this.props.cityDetailList.brand.subItems;
        const service = this.props.cityDetailList.service.subItems;
        const hallType = this.props.cityDetailList.hallType.subItems;
        console.log(2222222,hallType)
        const tabs = [
            { title: '商区' },
            { title: '地铁' }
        ];
        const tab = [
            {title:'全城'},
            {title:'品牌'},
            {title:'特色'}
        ]
        return (
            <div className={"backcolor"}>
                <div className={"wrap"}>
                    <Tabs tabs={tab} onTabClick={this.show.bind(this)} animated={false} useOnPan={false}>
                        <div style={{ backgroundColor: '#fff'}}>
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
                                <div style={{ display: 'flex', height: '402.5px', backgroundColor: '#fff' }}>
                                    <div>分工会尽快</div>
                                    <div>dgjfgjfdh</div>
                                </div>
                            </Tabs>
                        </div>
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
                    </Tabs>
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
export default connect(mapStateToProps,mapDispatchToProps)(ExactSelect)