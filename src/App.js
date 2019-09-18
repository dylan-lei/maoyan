import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Routers from "./routers"
class App extends React.Component{
    render(){
        return (
            <Router>
                {
                    Routers.map((item,i)=>{
                    return   <Route key={item.path} path={item.path} component={item.component}/>
                })}
            </Router>


        );
    }

}

export default App;
