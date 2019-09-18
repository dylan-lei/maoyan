import React from 'react';
import { withRouter } from 'react-router-dom';
class My extends React.Component{
    render(){
        return (
            <div>
                我的啊实打实
            </div>
        );
    }
    UNSAFE_componentWillMount(){
        if(!window.localStorage.longin){
            this.props.history.push({pathname:"/login"});
        }


    }

}

export default withRouter(My);