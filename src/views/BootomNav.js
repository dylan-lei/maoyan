import React from 'react';
import {Route, NavLink, Switch, withRouter, Redirect} from 'react-router-dom'
import "../assets/style/nav.css"
import Routers from "../routers"
//import {TransitionGroup, CSSTransition} from 'react-transition-group'
import "../assets/style/transition.css"


class BootomNav extends React.Component {
    render() {
        const router = Routers[Routers.length - 1].children;
        return (
            <>
            <Switch>
                {
                    router.map((item, i) => {
                        return <Route key={i} path={item.path} component={item.component}/>
                    })
                }
                <Redirect from={"/nav"} to={"/nav/movie"}/>
            </Switch>
            <nav className="bottom-nav-bar">
                <NavLink to={"/nav/movie"} activeStyle={{color: "#f03d37"}} className="nav-icon-wrapper">
                    <span className="iconfont icon mao-movie-cl"></span>
                    <span className="nav-text">电影</span>
                </NavLink>
                <NavLink to={"/nav/cinema"} activeStyle={{color: "#f03d37"}} className="nav-icon-wrapper">
                    <span className="iconfont icon mao-yingyuan1 nav-mao-yingyuan1"></span>
                    <span className="nav-text">影院</span>
                </NavLink>
                <NavLink to={"/nav/my"} activeStyle={{color: "#f03d37"}} className="nav-icon-wrapper">
                    <span className="iconfont icon mao-wode1 nav-mao-wode1"></span>
                    <span className="nav-text">我的</span>
                </NavLink>
            </nav>
            </>

        );
    }

}

export default withRouter(BootomNav);




