import React, { Component } from 'react'
import '../../../../assets/style/movie/MovieMoney.css'
import '../../../../assets/js/flexble'
export default class MovieMon extends Component {
    render() {
        return (
            <div>
                <div className="movie-navbar-actor">
                    <nav className="nav-actor">
                        <div className="navbar-logo-actor">
                            <a href="##" className="navbar-back-actor">&nbsp;</a>
                        </div>
                        <div className="navbar-title-actor">名侦探柯南：绀青之拳</div>
                    </nav>
                </div>
                <section className="movie-header-actor">
                    <div className="movie-box">
                        <div className='movie-background-duan' style={{
                            backgroundImage:"url(http://p0.meituan.net/177.249/movie/d5bc40a51534c26acbafd49c1dc484e24634457.jpg)"
                        }}></div>
                        <div className="movie-background-actor"></div>
                        <div className="movie-filter-actor"></div>
                        <div className="movie-container-actor">
                            <div className="movie-cover-actor">
                                <img src='http://p1.meituan.net/movie/d5bc40a51534c26acbafd49c1dc484e24634457.jpg@177w_249h.webp' alt=''/>
                            </div>
                            <div className='movie-content-duan'>
                                <div className='movie-name-duan'>
                                    <span>决胜时刻</span>
                                </div>
                                <div className='movie-ename-duan'>Mao Zedong 1949</div>
                                <div className='movie-score-duan'>
                                    <div className='released-score-duan'>
                                        <div className='rating-duan'>
                                            <img className='noneBg-duan-one' src='http://s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png' alt=''/>
                                            <img className='noneBg-duan' src='http://s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png' alt=''/>
                                            <img className='noneBg-duan' src='http://s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png' alt=''/>
                                            <img className='noneBg-duan' src='http://s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png' alt=''/>
                                            <img className='noneBg-duan' src='http://s0.meituan.net/bs/?f=myfe/canary:/img/star-half-new.png' alt=''/>
                                            <span className='rating-span'>9.3</span>
                                        </div>
                                        <div className='score-num'>(12312人评分)</div>
                                    </div>
                                </div>
                                <div className='movie-category-duan'>
                                    <span className='movie-cat-duan'>传记/历史</span>
                                </div>
                                <div className='movie-content-row-duan'>
                                    <span>中国大陆/140/分钟</span>
                                </div>
                                <div className='movie-ugc-duan'>
                                    2019-09-20大陆上映
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-seperate-two'>
                    <a className='btn-block-btn-pay' href="##">特惠购票</a>
                    <div className='intro-duan'>
                        <div className='text-expander-content-duan'>
                            <p>1949年，党中央领导人进驻北京香山，在国共和谈破裂的千钧一发之际，全力筹划建立新中国。</p>
                        </div>
                    </div>
                    <div className='text-expander-duan'></div>
                </section>
            </div>
        )
    }
}