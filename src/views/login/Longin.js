import React from 'react';
import {Tabs, WhiteSpace, Badge} from 'antd-mobile';
import "../../assets/style/login/login.css"

const tabs = [
    {title: <Badge text={''}>美团账号登录</Badge>},
    {title: <Badge text={''}>手机验证登录</Badge>}
];


class Longin extends React.Component {
    constructor() {
        super();
        this.state = {
            valiPhone: false,//手机号验证状态
            mobile: "",//手机号码
            randomCode: "",//验证码
            num: 60,//倒计时
            disabled: false,//表单禁用状态
            timer: null,//定时器
        }
    }

    async getVerifyCode() {

        if (true) {
            this.state.disabled = true;
            this.setState({
                num: 60
            });
            this.state.timer = setInterval(() => {
                this.setState({
                    num: this.state.num - 1
                });
                if (this.state.num <= 0) {
                    this.setState({
                        disabled: false
                    });
                    window.clearInterval(this.state.timer);
                }
            }, 1000)
        }
    }

    render() {
        console.log(this.state.num)
        return (
            <div className="login">
                {/*顶部标题、返回*/}
                <header className="p-navbar">
                    <div className="p-nav-wrap-left" onClick={() => {
                        this.props.history.push("/nav");
                    }}>
                        <span className="iconfont mao-fanhui"></span>
                    </div>
                    <h1 className="p-nav-header">
                        猫眼电影
                    </h1>
                </header>

                {/*登录*/}
                <div>
                    <Tabs tabs={tabs}>
                        {/*美团账号登录*/}
                        <div id="normal-login-form">
                            <dl className="p-list p-list-in">
                                <dd>
                                    <dl className="p-input ">
                                        <dd className=" kv-line-r ">
                                            <input className="input-weak" type="text" placeholder="账户名/手机号/Email"/>
                                        </dd>
                                        <dd className="kv-line-r">
                                            <input className="input-weak" type="password" placeholder="请输入您的密码"/>
                                        </dd>
                                    </dl>
                                </dd>
                            </dl>
                            <div className="btn-wrapper">
                                <button className="login-btn">登录</button>
                            </div>
                        </div>
                        {/*手机登录验证*/}
                        <div id="normal-login-form">
                            <dl className="p-list p-list-in">
                                <dd>
                                    <dl className="p-input ">
                                        <dd className=" kv-line-r ">
                                            <input className="input-weak mobile-input" type="text"
                                                   placeholder="账户名/手机号/Email"/>
                                            <button disabled={this.state.disabled} className="p-btn btn-weak"
                                                    onClick={() => {
                                                        this.getVerifyCode()
                                                    }}>{this.state.disabled ? (this.state.num + "s") : "获取验证码"}
                                            </button>
                                        </dd>
                                        <dd className="kv-line-r">
                                            <input className="input-weak" type="password"
                                                   disabled={this.state.disabled ? false : true}
                                                   placeholder="请输入短信验证码"/>
                                        </dd>
                                    </dl>
                                </dd>
                            </dl>
                            <div className="btn-wrapper">
                                <button className="login-btn" disabled={this.state.disabled ? false : true}
                                        style={{
                                            backgroundColor: this.state.disabled ? "#df2d2d" : "#dcdcdc",
                                            color: this.state.disabled ? "#fff" : "#999"
                                        }}>登录
                                </button>
                            </div>
                        </div>
                    </Tabs>
                    <WhiteSpace/>
                </div>


                {/*登录*/}
                <ul className="subline">
                    <li>
                        <a href="##" className="subline-text-color">立即注册</a>
                    </li>
                    <li className="pull-right">
                        <a href="##" className="subline-text-color">找回密码</a>
                    </li>
                </ul>
                {/*页脚*/}
                <footer className="login-footer">
                    <div className="copyright">
                        <span className="copyright">© 猫眼电影 客服电话：<a href="##">400-670-5335</a></span>
                    </div>
                </footer>

            </div>
        );
    }
    componentDidMount() {
        const str ="https://p0.meituan.net/travelcube/ba8ffd9e91ba069f1d6cd352cd5b9e93803.png";
        if (this.props.location.pathname === "/login") {
            document.title = "猫眼电影";
            document.querySelector(".titl-logo").href=str;
        }
    }

}

export default Longin;
