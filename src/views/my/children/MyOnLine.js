import React from 'react';
import '../../../assets/style/my/myOnLine.css';
class MyOnLine extends React.Component{
    render(){
        return (
            <div>
                <header className="navbar">
                    < div className = "nav-warp-left"
                    onClick = {
                        () => {
                            this.props.history.push('/nav/my')
                        }
                    } >
                        <a href="##" className="back">
                            <i className="icon-back"></i>
                        </a>
                    </div>
                    <h1 className="nav-header">猫眼电影</h1>
                </header>
                <div className="body">
                    <div className="order-content">
                        <div className="no-data">
                            <div className="wrapper">
                                <div className="tip-text">您最近还没有新订单，赶快去下一单吧</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyOnLine;