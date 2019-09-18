import My from "../../views/my/My"
import Movie from "../../views/movie/Movie"

export default [
    {
        path:"/my",
        component:My,
        title:"我的"
    },
    {
        path:"/",
        component:Movie,
        exact:true,
        title:"电影",
    },


]
