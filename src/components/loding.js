import React from "react"
import {ActivityIndicator} from 'antd-mobile';

export default function loading(MyCom) {
    class Loading extends MyCom {
        render() {
            if (this.state.animating) {
                return (
                    <div className={"loding-container"}>
                        {/*<ActivityIndicator animating={true} size="large"/>*/}
                        {/*<img src="http://img.zcool.cn/community/01bcea57075db16ac7257948927c5c.gif" alt=""/>*/}
                        <img src="http://img.zcool.cn/community/0133a2554b93ee000001bf72944893.jpg" style={{
                            width: "100px"
                        }} alt=""/>
                    </div>
                )

            } else {
                return super.render();
            }
        }

    }

    return Loading;
}
