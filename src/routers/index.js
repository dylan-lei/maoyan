//一级路由
import BootomNav from "../views/BootomNav"
import Login from "../views/login/Longin"
import City from "../views/common/City"
import Details from '../views/movie/children/duan/MovieDetails'
import Head from '../views/cinema/details/Head'
import Search from '../views/cinema/index/Search'
//底部导航栏的子路由（二级路由）
import My from "../views/my/My"
import Movie from "../views/movie/Movie"
import Cinema from "../views/cinema/index/Cinema"


//底部导航栏电影模块的子路由（三级路由）
import Hot from "../views/movie/children/Hot"
import About from "../views/movie/children/About"

export default [
    //一级路由，页面跳转
    {
        path:"/details",
        component:Details,
        title:"正在热映电影详情",
    },
    {
        path:"/zdetails",
        component:Head,
        title:"影院详情页",
    },
    {
        path:"/cinemasearch",
        component:Search,
        title:"影院搜索",
    },
    {
        path:"/city",
        component:City,
        title:"城市信息",
    },
    {
        path:"/login",
        component:Login,
        title:"登录注册"
    },
    {
        path:"/nav",
        component:BootomNav,
        title:"底部导航栏",
        exact:true,
        children:[
            {
                path:"/nav/my",
                component:My,
                title:"我的"
            },
            {
                path:"/nav/cinema",
                component:Cinema,
                title:"影院"
            },
            {
                path:"/nav/movie",
                component:Movie,
                exact:true,
                title:"电影",
                children:[
                    {
                        path:"/nav/movie/about",
                        component:About,
                        title:"即将上映"
                    },
                    {
                        path:"/nav/movie/hot",
                        component:Hot,
                        title:"正在热映",
                        exact:true
                    }
                ]
            },

        ]

    }


]
