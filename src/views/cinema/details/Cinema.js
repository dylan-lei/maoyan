import React from "react";
import '../../../assets/style/cinema/details/style.css'
export default class Cinema extends React.Component{
    constructor(){
        super();
        this.state = {
            showData:[]

        }
    }

    render(){
        const {showData} = this.state;
        console.log(showData);
        return(

            <div>
                {

                    <div className="cinema-nav swiper-container swiper-container-horizontal">
                        <div className="post-bg">{showData.cinemaId}</div>
                        <div className="post-bg-filter"></div>
                        <div className="swiper-wrapper" >
                            <div className="swiper-slide swiper-slide-prev" data-obj={showData.movies}>
                                <div className="post" >
                                    <img src={showData.img} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>




                }

            </div>
        )
    }

    async listMore(){
        const {data} = await this.axios.get("cinemaDetail/?cinemaId="+26195)
        console.log(data)
        this.setState({
            showData:data.showData.movies,

        })

    }

    componentDidMount() {
        this.listMore();
    }
}
