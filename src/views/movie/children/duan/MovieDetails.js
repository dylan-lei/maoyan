import React,{Component}from 'react'
export default class MovieDetails extends Component{
    render(){
        return(
            <div>
                <header className="Movie-navbar">
                    <div className="Movie-nav-header-left">
                        <a href="##" className="Movie-nav-header-back">
                            <i className="iconfont mao-zuofanhui1"></i>
                        </a>
                    </div>
                    <h1 className="Movie-nav-header-name">名侦探柯南：绀青之拳</h1>
                </header>
                <div className="Movie-detail">
                    <div className="Movie-filter"></div>
                    <div className="Movie-poster-bg" style={{
                        backgroundImage: "url( //p0.meituan.net/71.100/moviemachine/b7362f555340906684944957dfc8d5421530646.jpg)"
                    }}></div>
                    <div className="Movie-detail-context">
                        <div className="Movie-detail-context-poster">
                            <img src="http://p0.meituan.net/148.208/moviemachine/b7362f555340906684944957dfc8d5421530646.jpg" alt=""/>
                        </div>
                        <div className="Movie-detail-context-content">
                                <div className="Movie-detail-context-content-title">名侦探柯南：绀青之拳</div>
                                <div className="Movie-title-en-name">名探偵コナン 紺青の拳</div>
                                <div className="Movie-score">8.9<span className="Movie-score-snum">(15.4人评论)</span></div>
                                <div className="Movie-detail-type">
                                    <span>动画,悬疑,动作</span>
                                </div>
                                <div className="Movie-detail-time">日本/110分钟</div>
                                <div className="Movie-detail-pubDesc">2019-09-13大陆上映</div>
                            </div>
                    </div>
                    <div className="Movie-arrow-g">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC" alt=""/>
                    </div>
                </div>
                <div className="Movie-showDays">
                    <ul className="Movie-timeline">
                        <li data-day="2019-09-16" className="Movie-showDay-chosen">今天09月16号</li>
                        <li data-day="2019-09-16" className="Movie-showDay-chosen">今天09月16号</li>
                        <li data-day="2019-09-16" className="Movie-showDay-chosen">今天09月16号</li>
                        <li data-day="2019-09-16" className="Movie-showDay-chosen">今天09月16号</li>
                        <li data-day="2019-09-16" className="Movie-showDay-chosen">今天09月16号</li>
                    </ul>
                </div>
            </div>  
            
        )
    }
}