import React from 'react';
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
import Routers from "./routers"
class App extends React.Component{
    render(){
        return (
            <Router>

                <Switch>
                {
                    Routers.map((item,i)=>{
                    return   <Route key={item.path}  path={item.path} component={item.component}/>
                })}
                    <Redirect  from={"/"} to={"/nav"}/>

                </Switch>

            </Router>


        );
    }

}

export default App;
