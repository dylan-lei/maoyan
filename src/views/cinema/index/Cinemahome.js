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
import Up from "./up"
import {Link} from "react-router-dom";
class Cinemahome extends React.Component {
    render() {
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
                            <Link to={'/city'} className='white-bg-city-name'>北京</Link>
                            <i className='city-entry-arrow'></i>
                        </div>
                        <div onClick={()=>{
                            this.props.history.push("/cinemasearch")
                        }} className={"search"}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII=" alt=""/>
                            <span>搜影院</span>
                        </div>
                    </div>

                </section>
                <ExactSelect></ExactSelect>
                <Up></Up>

            </div>

        )
    }

    componentDidMount() {
        this.props.getCinemaList();
        //修改站标
        const str ="http://s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/icon/faviconmy.ico";
        if(this.props.location.pathname==="/nav/cinema"){
            document.title="影院";
            document.querySelector(".titl-logo").href=str;
        }
    }
}
function mapStateToProps(state) {
    return{
         cinemaList:state.cinema.cinemaIndex.cinemaList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreate,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Cinemahome)