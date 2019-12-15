import React,{Component} from 'react';
import { connect } from 'react-redux';
import {latestNews,articleNews,galleryNews} from '../actions';
import PropTypes from 'prop-types'

import ArticleNews from '../component/Home/ArticleNews';
import LatestNews from '../component/Home/LatestNews';
import GalleryNews from '../component/Home/GalleryNews';

class Home extends Component {
    
    // invoking
    componentDidMount(){
        this.props.dispatch(latestNews());
        this.props.dispatch(articleNews());
        this.props.dispatch(galleryNews());
        
    }

    render(){
        return(
            <div>
                <LatestNews latestdata={this.props.articledata.latest}/>
                <ArticleNews articleda={this.props.articledata.artdata}/>
                <GalleryNews galleryda={this.props.gallerydata.galdata}/>
            </div>
        )
    }
}

//Will recive state
function mapStateToprops(state){
    console.log(state)
    return{
        articledata: state.articles,
        gallerydata: state.gallery
    }
}

//Will dispatch action binding
Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToprops)(Home);