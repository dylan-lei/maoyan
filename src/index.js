import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/style/reset.css'
import store from "./store"
import App from './App';
import {
    Provider
} from 'react-redux'
React.Component.prototype.axios = axios;

//请求地址信息不携带token
const cityUrl= "https://restapi.amap.com/v3/ip?output=JSON&ip=114.247.50.2&key=22f0b6bee27905fa6a1aa3c528d6cbd7";


//axios请求拦截
axios.interceptors.request.use(config => {
    if (window.localStorage.token && config.url !==cityUrl) {
        config.headers = {
            authorization: localStorage.token
        }
    }

    if (config.url.includes("https://") || config.url.includes("http://")) {
        return config;
    } else {
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
