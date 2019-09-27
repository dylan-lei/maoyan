import React,{Component}from 'react'
import weeks from './tools' //导入周的方法
import axios from 'axios'
import { Tabs } from 'antd-mobile';
import Up from '../views/cinema/index/up'
import MovieDetailsUp from '../views/movie/children/duan/MovieDetailsUp'
export default class Week extends Component{
  constructor(props){
    super(props)
    this.state={
      results:null
    }
  }
    renderContent = tab =>
    (<div><MovieDetailsUp {...this.state.results}></MovieDetailsUp></div>);
  render() {
    const datetime = new Date().toLocaleDateString().replace(/\/+/g,"-") //转换2019-1-1方式
    const old_time = new Date(datetime.replace(/-/g, "/")); //
    const tabs = []
    for(let i=0;i< weeks.getWeek(13).length;i++){
        tabs.push({"title":weeks.getWeek(13)[i]+this.weekDate(new Date((new Date(old_time.valueOf() + i * 24 * 60 * 60 * 1000))))})
    }
    const movieDetailsId = this.props.movieId //该详情页面的ID
    // console.log(tabs)
    return (
      <div>
        <Tabs onTabClick={async (index,number)=>{
            let Mytime = (index.title).substr(2,6) //获取标题 
            let yearTime = ("2019-"+(Mytime.replace(/\D/g,"-")))
                yearTime = yearTime.substr(0,yearTime.length-1) //改成2019-09-20,用来获取数据
                const data =await axios.post('forceUpdate',{
                  movieId: movieDetailsId,//热映的电影id
                  day: yearTime//日期
                })
                this.setState({results:data})
                console.log(data)
        }} tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
          {this.renderContent}
        </Tabs>
      </div>
    );
  }
    weeksTime(i){
        const datetime = new Date().toLocaleDateString().replace(/\/+/g,"-") //转换2019-1-1方式
        const old_time = new Date(datetime.replace(/-/g, "/")); //再换位2019/1/1格式  js不支持2019-1-1
        return (new Date(old_time.valueOf() + i * 24 * 60 * 60 * 1000)).toLocaleDateString().replace(/\/+/g,"-")
    }
    weekDate(date,i){ //这个方法实现遍历内容 列如：9月19号
        var mymonth = date.getMonth()+1;
        var myweekday = date.getDate();
        if(mymonth < 10){
            mymonth = "0" + mymonth;
        }
        if(myweekday < 10){
            myweekday = "0" + myweekday;
        }
        return (mymonth + "月" + myweekday+"日");   
    }
    componentDidUpdate(){
      console.log(this.props.movieId)
    }
}