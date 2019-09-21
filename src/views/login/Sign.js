import React from 'react';
import "../../assets/style/login/login.css"
import {Toast, Button, Steps, WingBlank, WhiteSpace} from 'antd-mobile';


const Step = Steps.Step;
const steps = [{
    title: '输入手机号',
}, {
    title: '输入验证码',
}, {
    title: '设置密码',
}].map((s, i) => <Step key={i} title={s.title}/>);


class Sign extends React.Component {
    constructor() {
        super();
        this.state = {
            valiPhone: false,//手机号验证状态
            mobile: "",//手机号码
            randomCode: "",//验证码
            regMobile: true,//手机号正则验证
            loading: false,
            checked: false,
            num: 0,//步骤条状态
            phone: 0,//手机号保存
        }
    }


    render() {
        return (
            <div className="login">
                {/*顶部标题、返回*/}
                <header className="p-navbar">
                    <div className="p-nav-wrap-left" onClick={() => {
                        this.props.history.push("/login");
                    }}>
                        <span className="iconfont mao-fanhui"></span>
                    </div>
                    <h1 className="p-nav-header">
                        猫眼电影
                    </h1>
                </header>
                {/*步骤条*/}
                <WingBlank className="stepsExample">
                    <WhiteSpace/>
                    <Steps current={this.state.num} direction="horizontal">{steps}</Steps>
                </WingBlank>

                {/*表单*/}
                <div className={"dd-padding-p"}>
                    <input className={"input-weak-p"} type="text"
                           placeholder={this.state.num === 0 ? "请输入手机号" : this.state.num === 1 ? "请输入验证码" : this.state.num === 2 ? "请输入账号" : ""}
                           onInput={this.regMobile.bind(this)}
                           ref={"regMobile"}/>
                    <input className={"input-weak-p"}
                           style={{display: this.state.num === 2 ? "block" : "none", marginTop: "5px"}}
                           type="password"
                           onInput={this.regMobile.bind(this)}
                           placeholder={"请输入密码"}
                           ref={"password"}/>
                </div>
                <p className={"btn-wrapper-pl"} style={{display: this.state.num === 0 ? "block" : "none"}}>
                    <label name="terms" id={"p-label"}>
                        <input type="checkbox" onClick={this.checkbox.bind(this)} ref={"checkbox"} name={"terms"}
                               className={"p-mt"}/>
                        我已阅读并同意
                        <a href="##">《美团网用户协议》</a>
                    </label>

                </p>
                <div style={{padding: "0 10px"}}>
                    <Button type="warning"
                            disabled={this.state.regMobile === false && this.state.checked ? false : true}
                            loading={this.state.loading}
                            onClick={this.getCode.bind(this)}
                    >
                        {this.state.num === 0 ? "获取验证码" : ""}
                        {this.state.num === 1 ? "提交验证码" : ""}
                        {this.state.num === 2 ? "注册" : ""}
                    </Button>
                    <WhiteSpace/>
                </div>
                {/*页脚*/}
                <footer className="login-footer">
                    <div className="copyright">
                        <span className="copyright">© 猫眼电影 客服电话：<a href="##">400-670-5335</a></span>
                    </div>
                </footer>
                <WhiteSpace/>
            </div>
        );
    }

    //获取验证码
    async getCode() {
        switch (this.state.num) {
            case 0://获取验证码
                await this.axios.get("getCode/" + this.refs.regMobile.value)
                    .then(({status, msg}) => {
                    console.log(msg)
                        if (status === 2) {
                            this.setState({
                                loading: true,
                                num: this.state.num + 1,
                                checked: false,
                                phone: this.refs.regMobile.value
                            });
                        } else if (status) {
                            Toast.offline('该手机号以经注册过 !!!', 1);
                        }
                    });
                break;

            case 1://提交验证码
                await this.axios.post("pushcode", {
                    randomCode: this.refs.regMobile.value
                }).then(({status, msg}) => {
                    if (status === 2) {
                        this.setState({
                            loading: true,
                            num: this.state.num + 1,
                            checked: false,

                        });
                    }else if (status === 4) {
                        Toast.offline(msg+"!!!", 1);
                    }
                });
                break;

            case 2://注册
                await  this.axios.post("register", {
                    account: this.refs.regMobile.value,
                    password: this.refs.password.value,
                    mobile: this.state.phone
                }).then(({status, msg}) => {
                    console.log(msg);
                    if(status===2){
                        Toast.success('恭喜你注册成功 !!!', 1);
                        setTimeout(() => {
                            this.props.history.push("/login");
                        }, 500);
                    }else if(status===4){
                        Toast.offline("注册失败!!!", 1);
                        setTimeout(() => {
                            this.props.history.push("/login");
                        }, 500);

                    }
                });
                break;
            default:
                return
        }

        this.refs.regMobile.value = "";
        setTimeout(() => {
            this.setState({loading: false, regMobile: true})
        }, 200)
    }

    //正则
    regMobile() {
        switch (this.state.num) {
            case 0:
                if ((/^1[3456789]\d{9}$/.test(this.refs.regMobile.value))) {
                    this.setState({
                        regMobile: false
                    });
                } else {
                    this.setState({
                        regMobile: true
                    });
                }
                break;
            case 1:
                if ((/^[1234567890]\d{4}$/.test(this.refs.regMobile.value))) {
                    this.setState({
                        regMobile: false,
                        checked: true

                    });
                } else {
                    this.setState({
                        regMobile: true
                    });
                }
                break;
            case 2:
                if (( /^[a-zA-Z0-9_-]{5,16}$/.test(this.refs.regMobile.value))&&( /^[a-zA-Z0-9_-]{6,16}$/.test(this.refs.password.value))) {
                    this.setState({
                        regMobile: false,
                        checked: true

                    });
                } else {
                    this.setState({
                        regMobile: true
                    });
                }
                break;
                break;
        }

    }

    //复选框状态修改
    checkbox() {
        this.setState({
            checked: this.refs.checkbox.checked
        });
    }

    //修改站标
    componentDidMount() {
        if (this.props.location.pathname === "/sign") {
            document.title = "美团网账号注册-手机美团官网";
        }
    }


}

export default Sign;
