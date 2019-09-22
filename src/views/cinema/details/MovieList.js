import React from "react";
import '../../../assets/style/cinema/details/style.css'

export default class MovieList extends React.Component{
    render(){
        const {ShowData,index} = this.props;
        return(
            <div className="nav-wrap">
                <div className="nav-block mb-line-t">
                 <div className="nav-bar mb-line-b ">
                  <div className="nav-bar-wrap ">
                {

                    ShowData[0].shows.map(v=>(
                        <div className="nav-item active" data-bid="dp_wx_cinema_show_date" data-id="2019-09-16">
                            <span className="date-title">{v.dateShow}</span>
                        </div>
                   ))

                }



                </div>
                 </div>
                </div>
            </div>
        )
    }
}
