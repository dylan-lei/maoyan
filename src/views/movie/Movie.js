import React from 'react';
import { NavLink, Route, Switch,Redirect,Link} from 'react-router-dom'
import Routers from "../../routers"

class Movie extends React.Component {
    render() {
        const router=Routers[Routers.length-1].children[Routers[Routers.length-1].children.length-1].children;
        return (

            <div>
                我是电影
                <nav>

                    <NavLink to={"/movie/hot"}>热映</NavLink>/
                    <NavLink to={"/movie/about"}>即将上映</NavLink>
                </nav>
                <Redirect from={"/movie"} to={"/movie/hot"}/>

                <Switch>
                    {
                        router.map((item, i) => {
                            return <Route key={i} path={item.path} exact={item.exact} component={item.component}/>
                        })
                    }
                </Switch>
            </div>
        );
    }
}

export default Movie;