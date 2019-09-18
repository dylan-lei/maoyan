import React from 'react';
import { NavLink, Route, Switch,Redirect,Link} from 'react-router-dom'
import Routers from "../../routers"
import '../../assets/style/movie/nowhot.css'
class Movie extends React.Component {
    render() {
        const router=Routers[Routers.length-1].children[Routers[Routers.length-1].children.length-1].children;
        return (
            <div>
                 <div className='header_box'>
                    <header className="navbar">
                        <h1 className="nav-header">猫眼电影</h1>
                    </header>
                </div>
                <div className="white-bg">
                    <div className='white-bg-city-entry'>
                        <Link to={'/city'} className='white-bg-city-name'>北京</Link>
                        <i className='city-entry-arrow'></i>
                    </div>
                    <nav className='index-switch-hot'>
                        <NavLink activeStyle={{color:"#ef4238",borderBottom:"2px solid #ef4238"}} className='nav-index-title' exact={true} to={'/nav/movie/hot'}>正在热映</NavLink>
                        <NavLink activeStyle={{color:"#ef4238",borderBottom:"2px solid #ef4238"}} className='nav-index-title' to={'/nav/movie/about'}>即将上映</NavLink>
                    </nav>
                    <div className='iconfont mao-sousuo index-search-entry'></div>
                </div>
                <div className='Occupying'></div>
                <Redirect from={"/nav/movie"} to={"/nav/movie/hot"}/>
                 <Switch>
                     {
                         router.map((item, i) => {
                             return <Route key={i} path={item.path} exact={item.exact} component={item.component}/>
                         })
                     }
                 </Switch>  
                <div className='bottom-Occupying'></div>
            </div>
            // <div>
            //     我是电影
            //     <nav>

            //         <NavLink to={"/nav/movie/hot"}>热映</NavLink>/
            //         <NavLink to={"/nav/movie/about"}>即将上映</NavLink>
            //     </nav>

            //     <Redirect from={"/nav/movie"} to={"/nav/movie/hot"}/>
            //     <Switch>
            //         {
            //             router.map((item, i) => {
            //                 return <Route key={i} path={item.path} exact={item.exact} component={item.component}/>
            //             })
            //         }
            //     </Switch>
            // </div>
        );
    }
}

export default Movie;