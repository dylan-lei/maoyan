import BootomNav from "../views/BootomNav"
import Login from "../views/login/Longin"
export default [
    {
        path:"/login",
        component:Login,
        title:"登录注册"
    },
    {
        path:"/",
        component:BootomNav,
        title:"底部导航栏",
        exact:true
    }
]