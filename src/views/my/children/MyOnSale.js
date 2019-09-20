import React from 'react';
import '../../../assets/style/my/myOnSale.css';
class MyOnSale extends React.Component{
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
                    <h1 className="nav-header">我的优惠券</h1>
                </header>
                <div className="body">
                    <div className="z-coupon">
                        <div className="input-wrapper">
                            <input type="text" placeholder="请输入优惠券密码" className="coupon-psw"/>
                        </div>
                        <a href={'##'} className="add-coupon">添加</a>
                    </div>
                    <div className="container list-null">
                        <div className="no-data">
                            <div className="wrapper">
                                <div className="tip-text">你还没有优惠券</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyOnSale;