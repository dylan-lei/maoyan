import React from "react";
import {
  scrollBootom
} from '../../../../tools/index'

export default class MostExpected extends React.Component {
  constructor() {
    super();
    this.index = 0;
  }
  jumpPreview(history, id) {
    history.push({
      pathname: "/nav/movie/about/moviemoney",
      state: {
        // previewId: id
        moneyId: id
      }
    })
  }
  render() {
    const {releaseList,history} = this.props;
    return (
      <div className="coming-list">
        {
          releaseList.map((v, i) => {
            return (
              <div key={i}>
                <p className="group-date">{v.comingTitle}</p>
                <div className="z-item" onClick={() => {
                  this.jumpPreview(history,v.id);
                }}>
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
                      <div className="z-button-block">
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
    scrollBootom(() => {
      this.props.gitReleaseList(this.index++);
    })
  }
  componentWillUnmount() {
    scrollBootom();
  }
}