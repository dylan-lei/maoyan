import React from "react"
import Pubsub from 'pubsub-js'
import axios from "axios";
import {
    withRouter
}from 'react-router-dom'
class Up extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            movieDetailsList:[]
        }
    }
    render(){
        const movieLength = this.state.movieDetailsList
            return (
                <div
                    style={{background:"white"}}
                     className={"cinema-list"}
                >
                    {
                        movieLength.map((v,i)=>(
                            <div style={{background:"white"}} key={i}  className={"item line"} onClick={() => {
                                this.props.history.push({pathname:'/zdetails', state:{id:v.id}})
                            }} >
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
                        ))
                    }

                </div >
            );
    };
    async componentDidMount(){
        const time = ((new Date().toLocaleDateString().replace(/\/+/g, "-")).substr(0, 5) + "0" + ((new Date().toLocaleDateString().replace(/\/+/g, "-")).slice(-4)))
        const {data} =await axios.post('forceUpdate',{
            movieId: this.props.movieDetailsId,//热映的电影id
            day: time//日期
        })
        this.setState({
            movieDetailsList:data.cinemas
        })
        Pubsub.subscribe('movieDetailsListTwo',(eventNames,{data})=>{
            this.setState({
                movieDetailsList:data.cinemas
            })
        })
    }

}
export default withRouter(Up)