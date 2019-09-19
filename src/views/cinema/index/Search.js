import React from "react"

class CinemaSearch extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <header className="navbar">
                    <div onClick={()=>{
                        this.props.history.go(-1)
                    }} className="nav-warp-left">
                        <a href="#" className="back">
                            <i className="icon-back">
                            </i>
                        </a>
                    </div>
                    <h1 className="nav-header">猫眼电影</h1>
                </header>
            </div>
        )
    }
}
export default CinemaSearch