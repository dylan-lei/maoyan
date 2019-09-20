import React from "react";
import "../../../assets/style/my/myOnSale.css";
import { SearchBar, WhiteSpace } from "antd-mobile";
class MyOnSale extends React.Component {
  render() {
    return (
      <div>
        <header className="navbar">
          <div
            className="nav-warp-left"
            onClick={() => {
              this.props.history.push("/nav/my");
            }}
          >
            <a href="##" className="back">
              <i className="icon-back"></i>
            </a>
          </div>
          <h1 className="nav-header">我的优惠券</h1>
        </header>
        <div className="body">
          <SearchBar
            placeholder="请输入优惠券密码"
            ref={ref => (this.autoFocusInst = ref)}
            cancelText="添加"
          />
          <WhiteSpace />
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
  componentDidMount() {
    this.autoFocusInst.focus();
    if (this.props.location.pathname === "/login") {
       document.title = "我的优惠券"
     }
  }
}

export default MyOnSale;
