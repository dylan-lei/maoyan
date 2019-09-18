import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import Routers from "../../routers/movie"

class Movie extends React.Component {
    render() {
        return (
            <div>
                我是电影
                <nav>
                    <NavLink to={"/movie/hot"}>热映</NavLink>/
                    <NavLink to={"/movie/about"}>即将上映</NavLink>
                </nav>
                <Switch>
                    {
                        Routers.map((item, i) => {
                            console.log(item)
                            return <Route key={i} path={item.path} exact={item.exact} component={item.component}/>
                        })
                    }
                </Switch>
            </div>
        );
    }
}

export default Movie;