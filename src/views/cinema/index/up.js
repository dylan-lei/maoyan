import React from "react"
import ReactDOM from 'react-dom'
import {  ListView } from 'antd-mobile';
import "../../../assets/style/cinema/index.css"
import {
    connect
} from "react-redux";
import {
    bindActionCreators
}from "redux"
import actionCreate, {changeCinemaList} from '../../../store/actionCreate/cinema';
import axios from "axios"
const NUM_ROWS = 20;
let pageIndex = 0;

class Up extends React.Component{
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            cinemas:[],
            offset:-20,
            dataSource,
            refreshing: false,
            isLoading: true,
            height: document.documentElement.clientHeight,
            useBodyScroll: false,
        };
    }
    async componentDidMount() {
        this.props.getCinemaList()

        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        const data = await axios.get("cinemaList?offset="+(this.state.offset ||0));
        // console.log(data);
        console.log(this.props.cinemaList,66666666666)
        this.state.cinemas = [...this.state.cinemas,...data.cinemas]
        console.log(this.state.cinemas,333333)

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.cinemaList),
            height: hei,
            refreshing: false,
            isLoading: false,
        });
    }
    onEndReached = async (event) => {
        // if(this.state.offset < 253){
        // this.props.getCinemaList.call(this)
        if ((this.state.isLoading && !this.state.hasMore) || this.state.offset > 50) {
            console.log(333333333333,this.lv)
            this.setState({
                refreshing:false
            })
        }else{
            this.state.offset += 20;
            const data = await axios.get("cinemaList?offset="+(this.state.offset ||0))
            this.state.cinemas = [...this.state.cinemas,...data.cinemas]
            this.setState({ isLoading: true });
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.props.cinemaList),
                isLoading: false,
            });
        }

        // }

    };
    render(){
        console.log(this.props,7777777777)
        const data=this.props.cinemaList || []
        const row = (rowData, sectionID, rowID) => {
            console.log(rowData)
            const v =rowData;// data[rowID];
            return (
                <div key={rowID}
                     style={{
                         backgroundColor: 'white',
                         border:0
                     }}
                     className={"cinema-list"}
                >
                    <div className={"item line"} >
                        <div className={"title"}>
                            <span>{v.nm}</span>
                            <span className={"price-block"}>
                            <span className={"price"}>{v.sellPrice}</span>
                            <span className={"q"}>元起</span>
                        </span>
                        </div>
                        <div className={"locationindex"}>
                            <div className={"location-item"}>{v.addr}</div>
                            <div className={"distance"}>{v.distance}</div>
                        </div>
                        <div className={"label-block"}>
                            <div style={{display:v.tag.allowRefund === 1 ? null:"none"}} className={"allowRefund"}>退</div>
                            <div style={{display:v.tag.endorse === 1 ? null:"none"}} className={"endorse"}>改签</div>
                            <div style={{display:v.tag.snack === 1 ? null:"none"}} className={"snack"}>小吃</div>
                            <div style={{display:v.tag.vipTag ? null:"none"}} className={"vipTag"}>折扣卡</div>

                            {v.tag.hallTypeVOList.map((n,i)=>(
                                <div key={i}>
                                    {n.name}
                                </div>
                            ))}
                        </div>
                        <div className={"discount"}
                             style={{display: v.promotion.cardPromotionTag ? "block" : "none"}}>
                            <div className={"card"}>
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                                    alt=""/>
                                <div className={"discont-text"}>
                                    {v.promotion.cardPromotionTag}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
        return (<div>

            <ListView
                key={this.state.useBodyScroll ? '0' : '1'}
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? '正在加载...' : ''}
                </div>)}
                refreshing={this.state.refreshing}
                renderRow={row}
                useBodyScroll={this.state.useBodyScroll}
                style={this.state.useBodyScroll ? {} : {
                    height: this.state.height,
                    margin: '5px 0',
                }}
                onEndReached={this.onEndReached}
                pageSize={5}
            />
        </div>);
    }

}


function mapStateToProps(state) {
    return{
        cinemaList:state.cinema.cinemaIndex.cinemaList,
        offset:state.cinema.cinemaIndex.offset
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreate,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Up)