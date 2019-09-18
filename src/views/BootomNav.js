import React from 'react';
import {BrowserRouter as Router,Route, NavLink,Switch,withRouter} from 'react-router-dom'
import "../assets/style/nav.css"
import Routers from "../routers/bootomnav/index"
class BootomNav extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    {
                        Routers.map((item,i)=>{
                            console.log(item)
                            return   <Route key={i} path={item.path} exact={item.exact} component={item.component}/>
                        })
                    }
                </Switch>
                <nav className="bottom-nav-bar">
                    <NavLink to={"/"} activeStyle={{color: "#f03d37"}} exact className="nav-icon-wrapper">
                        <span className="iconfont icon mao-movie-cl"></span>
                        <span className="nav-text">电影</span>
                    </NavLink>
                    <NavLink to={"/cinema"} activeStyle={{color: "#f03d37"}} exact className="nav-icon-wrapper">
                        <span className="iconfont icon mao-yingyuan1 nav-mao-yingyuan1"></span>
                        <span className="nav-text">影院</span>
                    </NavLink>
                    <NavLink to={"/my"} activeStyle={{color: "#f03d37"}} exact className="nav-icon-wrapper">
                        <span className="iconfont icon mao-wode1 nav-mao-wode1"></span>
                        <span className="nav-text">我的</span>
                    </NavLink>
                </nav>
            </Router>

        );
    }

}

export default BootomNav;
