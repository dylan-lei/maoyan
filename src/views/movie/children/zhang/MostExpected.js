import React from "react";
export default class MostExpected extends React.Component {
  constructor() {
    super();
    this.state = {
      coming: [],
      paging: {
        hasMore: true,
        limit: 10,
        offset: 0,
        total: 0,
      }
    }
  }
  render() {
    const { coming } = this.state;
    return (
      <div className="most-expected">
        <p className="title">近期最受期待</p>
        <div className="most-expected-list">
          {
            coming.map(v=>{
              // console.log(v);
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
                  <h5 className="name line-ellipsis">{v.nm}</h5>
                  <p className="date">{v.comingTitle}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
  async gitRelease() {
    const {
      data
    } = await this.axios.get('mostExpected');
    this.setState({
      coming: data.coming,
      paging:data.paging
    })
  }
  componentDidMount() {
    this.gitRelease();
  }
}
