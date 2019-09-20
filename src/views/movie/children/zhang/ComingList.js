import React from "react";
export default class MostExpected extends React.Component {
  render() {
    const releaseList = this.props.releaseList;
    return (
      <div className="coming-list">
        {
          releaseList.map((v, i) => {
            let bol = true;
            for (let n = 0; n < releaseList.length; n++){
              if (v.comingTitle === releaseList[n].comingTitle) {
                bol = true;
                if (i === 0 && n === 0) {
                  bol = !bol;
                  break;
                }
              } else {
                bol = false;
                break;
              }
            }
            return (
              <div key={v.id}>
                <p className="group-date" style={
                  {
                  display: bol ? "none" : 'block'
                  }
                }>{v.comingTitle}</p>
                <div className="item">
                  <div className="main-block">
                    <div className="avatar">
                      <div className="default-img-bg">
                        <img src={v.img.replace(/w.h/, "")} alt="" />
                      </div>
                    </div>
                    <div className="mb-outline-b content-wrapper">
                      <div className="column content">
                        <div className="box-flex movie-title">
                          <div className="title line-ellipsis v3d_title">
                            {v.nm}
                          </div>
                          <span className={v.version}></span>
                        </div>
                        <div className="detail column">
                          <div className="wantsee line-ellipsis">
                            <span className="person">{v.wish}</span>
                            <span className="p-suffix">人想看</span>
                          </div>
                          <div className="actor line-ellipsis">
                            主演: {v.star}
                          </div>
                          <div className="actor line-ellipsis">{v.rt}上映</div>
                        </div>
                      </div>
                      <div className="button-block">
                        < div className = {
                          v.showst === 4 ? 'btn pre' : 'btn y-pre'
                        } >
                          <span className="fix">{v.showst===4?'预售':'想看'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
  componentDidMount() {
    this.props.gitReleaseList();
  }
}