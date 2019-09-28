import React from "react";
let Swiper = window.Swiper;
class MostExpected extends React.Component {
  constructor() {
    super();
    this.state = {
      wishst: '0'
    }
  }
  changeWishst() {
    this.setState({
      wishst: '1'
    })
  }
  jumpPreview(history, id) {
    window.localStorage.moneyId = id;
    history.push({
      pathname: "/nav/movie/about/moviemoney"
    })
  }
  render() {
    const { releaseExpectedList, history} = this.props;
    return (
      <div className="App">
        <div className="most-expected">
          <p className="title">近期最受期待</p>
          <div className="most-expected-list">
            {
              releaseExpectedList.map(v => {
                return (
                  <div className="expected-item swiper-slide" key={v.id} onClick={() => {
                    this.jumpPreview(history, v.id);
                  }}>
                    <div className="poster default-img-bg">
                      <span className="wish">
                        <span className="wish-num">{v.wish}</span>
                        人想看
                          </span>
                      <span className="wish-bg"></span>
                      <img
                        src={v.img.replace(/w.h/, '')}
                        alt=""
                      />
                      <div className="toggle-wish" data-wishst={this.state.wishst} onClick={
                        () => {
                          this.changeWishst()
                        }
                      }>
                        <span></span>
                      </div>
                    </div>
                    <h5 className="z-name line-ellipsis">{v.nm}</h5>
                    <p className="date">{v.releaseExpectedListTitle}</p>
                  </div>
                )
              })
            }
            {/* <div className="swiper-container">
              <div className="swiper-wrapper" style={{
                transform: 'translate3d(0px, 0px, 0px)'
              }}>
                {
                  releaseExpectedList.map(v=>{
                    return (
                      <div className="expected-item swiper-slide" key={v.id} onClick={() => {
                        this.jumpPreview(history, v.id);
                      }}>
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
                          <div className="toggle-wish" data-wishst={this.state.wishst} onClick={
                            () => {
                              this.changeWishst()
                            }
                          }>
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
            </div> */}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.gitReleaseExpectedList();
    this.Swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      observer: true,
    });
  }
}

export default MostExpected;