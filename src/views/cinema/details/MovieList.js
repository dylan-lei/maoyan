import React from "react";
import '../../../assets/style/cinema/details/style.css'
let Swiper = window.Swiper;
export default class MovieList extends React.Component{
    render(){
        const {ShowData,index} = this.props;
        console.log(ShowData[0].shows[0].plist)
        const data =ShowData[0].shows[0].plist || []
        return(
            <div className="seat-inner-wrap">
                <div className="seat-list">
                    <div id={'list-wrap'} className="list-wrap">

                      {
                          data.map((v,i)=>(
                              <div className="item-outer mb-line-b" data-bid="dp_wx_cinema_show_item" key={i}>
                                  <div className="item box-flex">
                                      <div className="time-block">
                                          <div className="begin">{v.tm}</div>
                                          <div className="end">

                                              <span className="tui">散场</span>
                                          </div>
                                      </div>
                                      <div className="info-block">
                                          <div className="lan">
                                              {v.lang}
                                              {v.tp}
                                          </div>
                                          <div className="hall">{v.th}</div>
                                      </div>
                                      <div className="price">
                                          <div className="sellPr">
                                              <span className="d">￥</span>
                                          <span className="stonefont"></span>

                                          </div>
                                          <div className="vipPrice">
                                              <span className="icons">{v.vipPriceName}</span>
                                              <span className="num">
                                               ￥
                                              {v.vipPrice}
                                             </span>
                                          </div>
                                          <div className="extraDesc">{v.extraDesc}</div>
                                      </div>
                                      <div className="button-block">
                                          <div className="button" data-bid="dp_wx_cinema_show_btn">购票</div>
                                      </div>
                                  </div>
                              </div>
                          ))

                      }

                    </div>
                </div>
            </div>

        )
    }
    componentDidMount() {
        this.Swiper = new Swiper('.swiper-container', {
            slidesPerView: '3',
            observer: true,
        });
    }
}
