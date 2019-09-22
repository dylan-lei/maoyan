import React from "react";
import '../../../assets/style/cinema/details/style.css'

export default class VipTips extends React.Component{
    render(){
        const {ShowData,index} = this.props;
        return(
            <div className="discount-block">
                <div className="vip-tips">
                    <a href="#">
                        <div className="label">{ShowData.tag}</div>
                        <div className="label-text line-ellipsis">{ShowData.title}</div>
                        <div className="process">
                            {ShowData.process}

                        </div>
                    </a>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getCinemaData();

    }
}



