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
       //this.props.history.push({pathname:"/login"});

    }

}

export default withRouter(My);