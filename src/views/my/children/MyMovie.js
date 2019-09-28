import React from 'react';
import '../../../assets/style/my/myMovie.css';
import loding from '../../../components/loding'
class MyMovie extends React.Component{
    constructor() {
        super();
        this.state = {
            animating: true
        }
    }
    render(){
        return (
            <div>
                <header className="navbar">
                    <div className="nav-warp-left" onClick={() => {
                        this.props.history.push('/nav/my')
                    }}>
                        <a href="##" className="back">
                            <i className="icon-back"></i>
                        </a>
                    </div>
                    <h1 className="nav-header">我的电影订单</h1>
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
    componentDidMount() {
        setTimeout(()=>{
            this.setState({animating: false});
        },300)
        if (this.props.location.pathname === "/mymovie") {
            document.title = "我的电影订单"
        }
    }
}

export default loding(MyMovie);