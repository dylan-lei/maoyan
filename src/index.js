import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/style/reset.css'
import store from "./store"
import App from './App';
import{
    Provider
} from 'react-redux'
React.Component.prototype.axios=axios;

//axios请求拦截
axios.interceptors.request.use(config => {
    if (config.url.includes("https://" || "http: //")){
        return config;
    }else{
        config.url = "http://47.94.99.226/" + config.url;
        return config;
    }

});
//axios响应拦截
axios.interceptors.response.use(({data}) => {
    return data;
});


//ReactDOM.render(<City/>, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
