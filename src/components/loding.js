import React from "react"
import {ActivityIndicator} from 'antd-mobile';

export default function loading(MyCom) {
    class Loading extends MyCom {
        render() {
            if (this.state.animating) {
                return (
                    <div className={"loding-container"}>
                        <ActivityIndicator animating={true} size="large"/>
                    </div>
                )

            } else {
                return super.render();
            }
        }

        componentDidMount() {
            setTimeout(async () => {
                if (this.props.location.pathname === "/nav/my") {
                    await this.axios.post("verifytoenk")
                        .then(({status}) => {
                            if (status !== 2) {
                                this.props.history.push({pathname: "/login"});
                            }
                        });
                }
                this.setState({animating: false});
            }, 200);
        }
    }

    return Loading;
}
