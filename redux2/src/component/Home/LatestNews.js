import React from 'react';
import { Link } from 'react-router-dom';

const LatestNews = (props) => {

    const LatestRender = ({latestdata}) => {
        if(latestdata){
            return latestdata.map((data) => {
                return(
                    <Link to="" className="item">
                        <div className="image_cover"
                            style={{background:`url(/images/articles/${data.img})`}}>
                                <div className="description">
                                    <span>{data.category}</span>
                                    <div>{data.title}</div>
                                </div>

                        </div>
                    </Link>
                )
            })
        }

    }

    return(
        <div className="home-latest">
            {LatestRender(props)}
        </div>
    )
}

export default LatestNews;