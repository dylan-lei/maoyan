import React from "react";
export default class MostExpected extends React.Component {
  constructor() {
    super();
    this.state = {
      coming: []
    }
  }
  render() {
    const { coming } = this.state;
    return (
      <div className="coming-list">
        {
          coming.map((v, i) => {
            i = (i<1?i+1:i-1);
            return (
              <div key={v.id}>
                <p className="group-date" style={
                  {
                  display:v.comingTitle === coming[i].comingTitle?"none":'block'
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
                        <div className="btn pre">
                          <span className="fix">预售</span>
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
  async gitRelease() {
    const { data } = await this.axios.get('comingList');
    this.setState({
      coming:data.coming
    })
  }
  componentDidMount() {
    this.gitRelease();
  }
}