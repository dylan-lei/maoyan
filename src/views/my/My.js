import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../assets/style/my/my.css';
class My extends React.Component{
    render(){
        return (
            <div>
                <header className="navbar">
                    <div></div>
                    <h1 className="nav-header">我的</h1>
                </header>
                <div className="body">
                    <div className="my-center">
                        <div className="header">
                            <img src="https://img.meituan.net/maoyanuser/9526baab5c5d69e613cb870976ad337811752.png" className="head-icon" alt="" />
                            <div className="name"></div>
                        </div>
                        <div className="container">
                            <div className="group">
                                <div className="mb-outline-tb">
                                    <div className="orders">
                                        <div className="title">我的订单</div>
                                        <div className="md-outline-b title-line"></div>
                                        <div className="z-list list-two">
                                            < div className = "order-item movie"
                                            onClick = {
                                                () => {this.props.history.push('/mymovie')}
                                            } >
                                                < a href = '##'>
                                                    <p>电影</p>
                                                </a>
                                            </div>
                                            < div className = "order-item store"
                                            onClick = {
                                                () => {
                                                    this.props.history.push('/myshop')
                                                }
                                            } >
                                                <a href="##">
                                                    <p>商城</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                < div className = "mb-outline-tb"
                                onClick = {
                                    () => {
                                        this.props.history.push('/myonline')
                                    }
                                } >
                                    <div className="coupon item mb-line-b">
                                        <span>在线观影</span>
                                    </div>
                                </div>
                                < div className = "mb-outline-tb"
                                onClick = {
                                    () => {
                                        this.props.history.push('/myonsale')
                                    }
                                } >
                                    <div className="coupon item mb-line-b">
                                        <span>优惠券</span>
                                    </div>
                                </div>
                                < div className = "mb-outline-tb"
                                onClick = {
                                    () => {
                                        this.props.history.push('/mydiscount')
                                    }
                                } >
                                    <div className="coupon item mb-line-b">
                                        <span>折扣卡</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    UNSAFE_componentWillMount(){
        // if(!window.localStorage.longin){
        //     this.props.history.push({pathname:"/login"});
        // }


    }

}

export default withRouter(My);