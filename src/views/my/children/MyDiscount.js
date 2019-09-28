import React from 'react';
import '../../../assets/style/my/myDiscount.css';
import loding from '../../../components/loding'
class MyDiscount extends React.Component {
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
                    <h1 className="nav-header">我的折扣卡</h1>
                </header>
                <div className="list">
                    <div className="no-card">
                        <img src="http://s0.meituan.net/bs/?f=myfe/canary:/img/card.png" alt="" />
                        <div>暂无影院会员卡</div>
                        <div className="add-card-box">
                            <a href="##" className="link z-btn">
                                <i className="iconfont mao-guanbi-"></i>
                                <span>查看本城市全部会员卡</span>
                            </a>
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
        if (this.props.location.pathname === "/mydiscount") {
            document.title = "我的折扣卡"
        }
    }
}

export default loding(MyDiscount);