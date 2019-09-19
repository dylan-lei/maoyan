import React from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import "../../assets/style/login/login.css"

const tabs = [
    { title: <Badge text={''}>美团账号登录</Badge> },
    { title: <Badge text={''}>手机验证登录</Badge> }
];
const TabExample = () => (
    <div>
        <Tabs tabs={tabs}
              initialPage={1}
              onChange={(tab, index) => { console.log('onChange', index, tab); }}
              onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
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
                                    <input className="input-weak mobile-input" type="text" placeholder="账户名/手机号/Email"/>
                                    <button className="p-btn btn-weak" disabled>获取验证码</button>
                                </dd>
                                <dd className="kv-line-r">
                                    <input className="input-weak" type="password" disabled   placeholder="请输入短信验证码"/>
                                </dd>
                            </dl>
                        </dd>
                    </dl>
                    <div className="btn-wrapper">
                        <button className="login-btn" disabled style={{backgroundColor: "#dcdcdc",color:"#999" }}>登录</button>
                    </div>
                </div>
        </Tabs>
        <WhiteSpace />
    </div>
);

class Longin extends React.Component{
    render(){
        return (
              <div className="login">
                  {/*顶部标题、返回*/}
                  <header className="p-navbar">
                      <div className="p-nav-wrap-left" onClick={()=>{
                          this.props.history.push("/nav");
                      }}>
                          <span className="iconfont mao-fanhui"></span>
                      </div>
                      <h1 className="p-nav-header">
                          猫眼电影
                      </h1>
                  </header>
                  {/*登录*/}
                  <TabExample/>

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
   
}

export default Longin;
