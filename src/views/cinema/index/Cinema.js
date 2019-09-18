import React from "react"
import "../../../assets/style/cinema/index.css"
import ExactSelect from "./exactSelect"
import {
    connect
} from "react-redux";
import {
    bindActionCreators
}from "redux"
import actionCreate from '../../../store/actionCreate/cinema';
class Cinemahome extends React.Component {
    render() {
        const {cinemaList} = this.props;
        console.log(cinemaList)
        return (
            <div className={"cinema-home"}>
                <header>
                    <div className={"headers"}>
                        <h1>影院</h1>
                    </div>
                </header>
                <section>
                    <div className={"topbar"}>
                        <div className={"city"}>
                            <span>北京</span>
                        </div>
                        <div className={"search"}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII=" alt=""/>
                            <span onClick={()=>{
                                this.props.history.push("")
                            }}>搜影院</span>
                        </div>
                    </div>
                </section>
                <section className={"line"}>
                    <ExactSelect></ExactSelect>
                    <section style={{background:"#fff"}}>
                        <div className={"cinema-list"}>
                            {
                                cinemaList.map((v,i) => (
                                    <div className={"item line"} key={v.id}>
                                        <div className={"title"}>
                                            <span>{v.nm}</span>
                                            <span className={"price-block"}>
                            <span className={"price"}>{v.sellPrice}</span>
                            <span className={"q"}>元起</span>
                        </span>
                                        </div>
                                        <div className={"location"}>
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
                                ))
                            }
                        </div>
                    </section>
                </section>


            </div>

        )
    }

    componentDidMount() {
        this.props.getCinemaList()
        //console.log(this.props.cinemaList)
    }
}
function mapStateToProps(state) {
    console.log(state.cinema.cinemaIndex.cinemaList)
    return{
         cinemaList:state.cinema.cinemaIndex.cinemaList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreate,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Cinemahome)