import React, { Component } from "react";
import "../../../../assets/style/movie/release/MovieMoney.css";
import "../../../../assets/js/flexble";
import axios from "axios";
// import PubSub  from 'pubsub-js'
export default class MovieMon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {
        movie: {
          img: "",
          photos: []
        },
        celebrities: [],
        comments: {
          hotComments: [],
          total: 0
        },
        relatedFilm: []
      }
    };
  }
  async UNSAFE_componentWillMount() {
    const { data } = await axios.get(
      "getComingDetailsList/?comingId=" + this.props.location.state.moneyId
    );
    this.setState({
      results: data
    });
  }
  render() {
    const { results } = this.state;
    const { movie} = results;
    console.log(movie,results);
    return (
      <div>
        <div className="movie-navbar-actor">
          <nav className="nav-actor">
            <div className="navbar-logo-actor">
              <a
                href="##"
                onClick={() => this.props.history.go(-1)}
                className="navbar-back-actor"
              >
                &nbsp;
              </a>
            </div>
            <div className="navbar-title-actor">{results.$title}</div>
          </nav>
        </div>
        <section className="movie-header-actor">
          <div className="movie-box">
            <div
              className="movie-background-duan"
              style={{
                backgroundImage: "url(" + movie.img.replace(/\/w.h/, "") + ")"
              }}
            ></div>
            <div className="movie-background-actor"></div>
            <div className="movie-filter-actor"></div>
            <div className="movie-container-actor">
              <div className="movie-cover-actor">
                <img src={movie.img.replace(/\/w.h/, "")} alt="" />
              </div>
              <div className="movie-content-duan">
                <div className="movie-name-duan">
                  <span>{movie.nm}</span>
                </div>
                <div className="movie-ename-duan">{movie.enm}</div>
                <div className="movie-score">
                  <div className="noreleased-noscore">
                    <div className="wish-num">
                      <span className="number">{movie.wish}</span>
                      <span>人想看</span>
                    </div>
                  </div>
                </div>
                <div className="movie-score-duan">
                  <div className="released-score-duan">
                    <div className="score-num">{movie.cat}</div>
                  </div>
                </div>
                <div className="movie-content-row-duan">
                  <span>
                    {movie.src} / {movie.dur} 分钟
                  </span>
                </div>
                <div className="movie-ugc-duan">{movie.pubDesc}</div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-seperate-two">
          <a className="btn-block-btn-pay" href="##">
            特惠购票
          </a>
          <div className="intro-duan">
            <div className="text-expander-content-duan">
              <p>{movie.dra}</p>
            </div>
          </div>
          <div className="text-expander-duan"></div>
        </section>
        <section className="section-seperate-three">
          <ul className="movie-celebrities">
            {results.celebrities.map((v, i) => (
              <li className="movie-celebrities-li" key={i}>
                <a href="##" className="link-duan">
                  <img
                    className="noneBg-duan-two"
                    src={v.avatar.replace(/w.h/, "")}
                    alt=""
                  />
                  <span className="span-one-duan">{v.cnm}</span>
                  <span className="span-two-duan">
                    {v.desc.replace(/饰:/, "")}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a href="##" className="all-actor-duan">
            <h4 className="icon-chevron-left">全体演职人员</h4>
            <i className="iconfont mao-fanhui1 icon-chevron-right"></i>
          </a>
        </section>
        <section className="section-media-duan">
          <h3 className="movie-page-h3">媒体库</h3>
          <ul className="movie-stages-ul-duan">
            {movie.photos.map((v, i) => (
              <li className="stage-img-container-duan-li" key={i}>
                <a href="##" className="video-a-duan">
                  <img
                    src={v.replace(/w.h/, "")}
                    className="movie-page-mig"
                    alt=""
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="link-group-duan">
            <a href="##" className="link-more-d">
              <h4 className="size-h4">
                <span className="data-video">视屏</span>
                <i className="iconfont mao-fanhui1 fanhui"></i>
                <span className="link-num-duan"></span>
                <span className="link-num-two">{movie.photos.length}</span>
              </h4>
            </a>
            <a href="##" className="link-more-d-two">
              <h4 className="size-h4-two">
                <span className="data-video-two">剧照</span>
                <i className="iconfont mao-fanhui1 fanhui"></i>
                <span className="link-num-two">{movie.pn}</span>
              </h4>
            </a>
          </div>
        </section>
        <section className="movie-news">
          <div className="panel-title-duan">
            <h2 className="movie-news-duan-zx">资讯</h2>
          </div>
          <div className="panel-content">
            <a className="panel-content-a" href="##">
              <img
                className="panel-content-a-img noneBg-jz"
                src="http://p0.meituan.net/movie/cc55767077c11d4b26530cec3db032942256352.jpg@200w_150h_1e_1c.webp"
                alt=""
              />
              <i className="iconfont mao-fanhui1 fanhui-right"></i>
              <div className="news-wrapper">
                <div className="news-content">
                  《决胜时刻》发布口碑特辑，震撼燃泪正能量触动人心》
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className="section-seperate-main">
          <h3 className="clearfix">讨论</h3>
          <div className="title-text-left">精选</div>
          <ul className="list-view">
            {results.comments.hotComments.map((v, i) => (
              <li className="list-view-item" key={i}>
                <div className="comment">
                  <div className="comment-left">
                    <img className="avatar-img" src={v.avatarUrl} alt="" />
                  </div>
                  <div className="comment-right">
                    <header>
                      <div className="mid-wrapper">
                        <em className="ellipsis">{v.nick}</em>
                        <div className="nick-level"></div>
                      </div>
                      <div className="comment-score">
                        给这部作品打了{v.score}分
                      </div>
                    </header>
                    <section className="tack-two">
                      <p className="content">{v.content}</p>
                    </section>
                    <footer>
                      <time className="timeago">{v.userLevel}天前</time>
                      <div className="pull-right">
                        <a href="##" className="comment-like">
                          <i className="iconfont mao-zan"></i>
                          {v.upCount}
                        </a>
                        <a href="##" className="comment-like">
                          <i className="iconfont mao-pinglun"></i>
                          {v.replyCount}
                        </a>
                      </div>
                    </footer>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <a href="##" className="comments-link-a">
            <h4>查看全部{results.comments.total}条讨论 </h4>
          </a>
        </section>
        <section className="section-related-section-seperate">
          <h3>相关电影</h3>
          <ul className="movie-celebrities-two">
            {results.relatedFilm.map((v, i) => (
              <li key={i}>
                <a href="##" className="movie-celebrities-link">
                  <img src={v.img.replace(/w.h/, "")} alt="" />
                  <span>{v.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <div className="load-wrapper-duan">下载猫眼电影，查看更多电影信息</div>
        <footer className="footer-duan">
          <p>© 猫眼电影 客服电话: 1010-5335</p>
          <p>京ICP备16022489号-1&nbsp;京公网安备11010502030881号</p>
          <p>北京猫眼文化传媒有限公司</p>
        </footer>
      </div>
    );
  }
}
