import React, {Fragment} from "react";
import "../../assets/style/city.css";
import loding from "../../components/loding"

class City extends React.Component {
    constructor() {
        super();
        this.state = {
            animating:true,
            //城市列表
            cityList:{},
            position: {}
        }
    }

    render() {
        const hotCity = this.state.cityList.hot_city_List || [];
        let cityList = [];
        const position = this.state.position;
        if (hotCity.length > 0) {
            Object.keys(this.state.cityList.cityList).forEach(key => cityList.push(this.state.cityList.cityList[key]));
        }
    console.log(hotCity,this.state.cityList)
        return (
            <div id="city-list" className="city-list-container" ref={"cityList"}>
                <section>
                    <div id="locate" className="city-title">
                        定位城市
                    </div>
                    <div className="city-list city-list-inline clearfix">
                        <div className="location-city">
                            {position.city ? position.city : "定位失败，请点击重试"}
                        </div>
                    </div>
                </section>


                <section className="history-city-list">
                    <div className="city-title">
                        最近访问城市
                    </div>
                    <div className="city-list city-list-inline clearfix">
                        <div className="city-item">
                            北京
                        </div>
                        <div className="city-item">
                            天津
                        </div>
                        <div className="city-item">
                            安溪
                        </div>
                    </div>
                </section>

                <section>
                    <div className="city-title">
                        热门城市
                    </div>
                    <div className="city-list city-list-inline clearfix">
                        {
                            hotCity.map((v => (
                                <div className="city-item" key={v.id}>
                                    {v.name}
                                </div>
                            )))
                        }

                    </div>
                </section>

                <section>
                    {
                        cityList.map((v, i) => (
                            <Fragment key={v.id}>
                                <div className="city-title city-title-letter" ref={v.id} key={i}>{v.id}</div>
                                {
                                    v.list.map(m => (
                                        <div className="city-list city-list-block" key={m.name}>
                                            <div className="city-item" key={m.id}>
                                                {m.name}
                                            </div>
                                        </div>
                                    ))
                                }
                            </Fragment>
                        ))
                    }
                </section>

                <section className="nav">
                    <div className="nav-item">
                        定位
                    </div>
                    <div className="nav-item">
                        最近
                    </div>
                    <div className="nav-item">
                        热门
                    </div>

                    {cityList.map(v => (
                        <div className="nav-item nav-letter" key={v.id} onClick={this.cityScrollTop.bind(this, v)}>
                            {v.id}
                        </div>
                    ))}
                </section>
            </div>
        )
    }

    //获取当前地址
    position() {
        if (!window.localStorage.position) {
            this.axios.get("https://restapi.amap.com/v3/ip?output=JSON&ip=114.247.50.2&key=22f0b6bee27905fa6a1aa3c528d6cbd7")
                .then(res => {
                    window.localStorage.position = JSON.stringify(res);
                    this.setState({
                        position: res
                    });
                })
        }

    }

    cityScrollTop(v, e) {
        this.refs.cityList.scrollTop = this.refs[v.id].offsetTop;
    }

    async getCityList() {
        if (!window.localStorage.cityList) {
            const cityList = await this.axios.get("getCityList");
            window.localStorage.cityList = JSON.stringify(cityList.city);
            this.setState({
                cityList: cityList.city,
                animating: false
            });
        }else {
            this.setState({
                cityList:localStorage.cityList ? JSON.parse(localStorage.cityList) : {},
                position:localStorage.position ? JSON.parse(localStorage.position) : {}
            })
        }
    }

    async componentDidMount() {
        await this.getCityList();
        await this.position();
        this.setState({animating: false})

    }
}

export default loding(City);