import React,{Component} from 'react';
import { connect } from 'react-redux';
import { selectedNews, clearSelectedNews} from '../actions';
import PropTypes from 'prop-types';
import LikeCounter  from './LikeCounter';

class NewsDetails extends Component {

    componentDidMount(){
        this.props.dispatch(selectedNews(this.props.match.params.id))
    }
    renderDetails = ({selected}) => {
        if(selected){
            return selected.map((data) => {
                return(
                    <div key={data.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {data.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {data.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {data.likes[1]}
                            </span>
                        </div>
                        <div className="top">
                            <h2>{data.title}</h2>
                            <span>Article By:{data.author}

                            </span>
                              
                            <img src={`/images/articles/${data.img}`}/>
                            <div className="body_news">
                                {data.body}
                            </div>
                        </div>
                        <div>
                            <LikeCounter
                            articleId={data.id}
                            likes={data.likes[0]}
                            dislikes={data.likes[1]}
                            />
                        </div>
                    </div>
                )
            })
        }
    }
    
    render(){
        return(
            <div className="news_container">
                {this.renderDetails(this.props.articledetails)}
            </div>
        )
    }

    componentWillUnmount(){
       this.props.dispatch(clearSelectedNews())
    }
}

//Will recive state
function mapStateToprops(state){
    console.log(state)
    return{
        articledetails: state.articles
    }
}

//Will dispatch action binding
NewsDetails.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToprops)(NewsDetails)