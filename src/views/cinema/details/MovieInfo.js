import React from "react";
import '../../../assets/style/cinema/details/style.css'
export default class MovieInfo extends React.Component{
    render(){
        const {ShowData,index} = this.props;
        return(
            <div className="movie-info">
                <div className="movie-title line-ellipsis">
                    <span className="title">{ShowData[index].nm}</span>
                    <span className="grade">
                                <span>
                                    {ShowData[index].sc}
                                <span className="small">分</span>
                                </span>
                          </span>
                </div>
                <div className="movie-desc">{ShowData[index].desc}</div>
            </div>


        )
    }

}

