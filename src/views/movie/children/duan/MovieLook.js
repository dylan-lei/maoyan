import React,{Component} from 'react'
import '../../../../assets/style/movie/movieLook.css'
import axios from 'axios'
import {scrollBootom} from '../../../../tools/index'
import { ActivityIndicator } from 'antd-mobile';
export default class Comment extends Component{
    constructor(){
        super()
        this.state = {
            movieDetailList:[],
            index:0
        }
    }
    render(){
        const {movieDetailList} = this.state || []
        // const movieDetailList = 
        return(
            <div>
                <div className='navbar-nav-duan'>
                    <nav>
                        <div className='navbar-logo-duan1'>
                            <a onClick={()=>{
                                this.props.history.go(-1)
                            }} href='##' className='navbar-back-duan1'></a>
                        </div>
                        <div className='navbar-title-duan1'>精选讨论 - 我和我的祖国</div>
                    </nav>
                </div>
                <div className='boxMain'>
                    <div className='pg-comments-title-duan'>
                        <span>讨论</span>
                        <span></span>
                    </div>
                    <div className='main-duan1'>
                        <h4>最热</h4>
                        <ul className='list-view'>
                        {
                            movieDetailList.map((v,i)=>(
                                <li key={i} className='list-view-item'>
                                    <div className='comment'>
                                        <div className='comment-left'>
                                            <img className='avatar-img' src={v.avatarUrl.replace(/w.h/,"")} alt=''/>
                                        </div>
                                        <div className='comment-right'>
                                            <header>
                                                <div className='mid-wrapper'>
                                                    <em className='ellipsis'>{v.nick}</em>
                                                    <div className='nick-level'></div>
                                                </div>
                                                <div className='comment-score'>给这部作品打了{v.score}分</div>
                                            </header>
                                            <section className='tack-two'>
                                                <p className='content'>
                                                    {v.content}
                                                </p>
                                            </section>
                                            <footer>
                                                <time className='timeago'>
                                                    {v.userLevel}天前
                                                </time>
                                                <div className='pull-right'>
                                                    <a href='##' className='iconfont mao-zan comment-like'>{v.upCount}</a>
                                                    <a href='##' className='iconfont mao-pinglun comment-like'>{v.replyCount}</a>
                                                </div>
                                            </footer>
                                        </div>
                                    </div>
                                </li>
                           ))
                        }
                        <div style={{
                            width: "20px",
                            margin: "0 auto",
                            textAlign:"center",
                        }}>
                        < ActivityIndicator animating />
                         </div>
                      
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
    async getLook(){
        const id = window.localStorage.movieDetailId
        console.log(id)
        this.setState({ 
            index:this.state.index+=15
        })
        const {lookList} = await axios.get('movieLook?movieId='+id+"&offset="+(this.state.index))
        // console.log(this.state.movieDetailList,lookList.data.hotComments)
        console.log(lookList.data.comments)
        this.setState({
            movieDetailList:[...this.state.movieDetailList,...lookList.data.comments]
        })
   
    }
    async componentDidMount(){
        const id = window.localStorage.movieDetailId
        const {data} = await axios.get('getComingDetailsList?comingId='+id)
        this.setState({
            movieDetailList:data.comments.hotComments
        })
        scrollBootom(()=>{
            this.getLook()
        })
        // console.log(data.comments.hotComments)
    }
    componentWillUnmount(){
        scrollBootom()
    }
}