//一级路由
import BootomNav from "../views/BootomNav"
import Login from "../views/login/Longin"
import City from "../views/common/City"


//底部导航栏的子路由（二级路由）
import My from "../views/my/My"
import Movie from "../views/movie/Movie"
import Cinema from "../views/cinema/Cinema"


//底部导航栏电影模块的子路由（三级路由）
import Hot from "../views/movie/children/Hot"
import About from "../views/movie/children/About"

export default [

    //一级路由，页面跳转
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
        path:"/",
        component:BootomNav,
        title:"底部导航栏",
        exact:true,
        children:[
            {
                path:"/my",
                component:My,
                title:"我的"
            },
            {
                path:"/cinema",
                component:Cinema,
                title:"影院"
            },
            {
                path:"/movie",
                component:Movie,
                exact:true,
                title:"电影",
                children:[
                    {
                        path:"/movie/about",
                        component:About,
                        title:"即将上映"
                    },
                    {
                        path:"/movie/hot",
                        component:Hot,
                        title:"正在热映",
                        exact:true
                    }
                ]
            },

        ]

    }


]