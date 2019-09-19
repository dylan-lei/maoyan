import React from "react"
import {ActivityIndicator} from 'antd-mobile';
export default function loading(MyCom) {
    class Loading extends MyCom{
        render(){
            if(this.state.animating){
                return (
                    <div className={"loding-container"}>
                        <ActivityIndicator animating={true} size="large"/>
                    </div>
                )

            }else{
                return super.render();
            }
        }
    }
    return Loading;
}
