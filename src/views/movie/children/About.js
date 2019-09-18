import React from "react";
import '../../../assets/style/Movie/Release/release.css';
import MostExpected from "../children/zhang/MostExpected";
import ComingList from '../children/zhang/ComingList';

class Release extends React.Component {
    render() {
        return (
            <div className="page-wrap">
                <div className="tab-block">
                    <div className="page f-hot active">
                        <div className="list-wrap">
                            <MostExpected></MostExpected>
                            <ComingList></ComingList>
                        </div>
                        <div className="coming-list"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Release;