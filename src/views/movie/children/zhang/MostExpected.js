import React from "react";
export default class MostExpected extends React.Component {
  render() {
    const releaseExpectedList = this.props.releaseExpectedList;
    return (
      <div className="most-expected">
        <p className="title">近期最受期待</p>
        <div className="most-expected-list">
          {
            releaseExpectedList.map(v=>{
              return (
                <div className="expected-item" key={v.id}>
                  <div className="poster default-img-bg">
                    <span className="wish">
                      <span className="wish-num">{v.wish}</span>
                      人想看
                    </span>
                    <span className="wish-bg"></span>
                    <img
                      src={v.img.replace(/w.h/,'')}
                      alt=""
                    />
                    <div className="toggle-wish">
                      <span></span>
                    </div>
                  </div>
                  <h5 className="z-name line-ellipsis">{v.nm}</h5>
                  <p className="date">{v.releaseExpectedListTitle}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.gitReleaseExpectedList();
  }
}
