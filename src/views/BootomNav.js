import React from 'react';
import {Route, NavLink,Switch,Redirect} from 'react-router-dom'
import "../assets/style/nav.css"
import Routers from "../routers"

class BootomNav extends React.Component {
    render() {
        const router=Routers[Routers.length-1].children;
        return (
            <>
            <Redirect  from={"/nav"} to={"/nav/movie"}/>
                <Switch>
                    {
                        router.map((item,i)=>{
                            return   <Route key={i} path={item.path}  component={item.component}/>
                        })
                    }
                </Switch>
                <nav className="bottom-nav-bar">
                    <NavLink to={"/nav/movie/hot"} activeStyle={{color: "#f03d37"}} className="nav-icon-wrapper">
                        <span className="iconfont icon mao-movie-cl"></span>
                        <span className="nav-text">电影</span>
                    </NavLink>
                    <NavLink to={"/nav/cinema"} activeStyle={{color: "#f03d37"}} exact className="nav-icon-wrapper">
                        <span className="iconfont icon mao-yingyuan1 nav-mao-yingyuan1"></span>
                        <span className="nav-text">影院</span>
                    </NavLink>
                    <NavLink to={"/nav/my"} activeStyle={{color: "#f03d37"}} exact className="nav-icon-wrapper">
                        <span className="iconfont icon mao-wode1 nav-mao-wode1"></span>
                        <span className="nav-text">我的</span>
                    </NavLink>
                </nav>
            </>

        );
    }

}

export default BootomNav;
