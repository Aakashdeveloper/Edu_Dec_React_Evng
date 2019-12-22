import React, {Component } from 'react';
import JSON from '../db.json';
import Header from './Header';
import NewsList from './NewsList';

class Home extends Component {
    constructor(){
        super()
        console.log('in constructor ')
        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(keywords){
        const output = this.state.news.filter((data) => {
            return (data.title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || data.feed.toLowerCase().indexOf(keywords.toLowerCase()) > -1)
        })
        console.log('in filterNews ')
        this.setState({filtered:output})
    }

    //a.filter((a)=>{return a%2==0})

    render(){
        console.log('in render')
        return(
            <div>
                <Header userText={(userInput) => this.filterNews(userInput)}/>
                <NewsList newsData={this.state.filtered}/>
            </div>
        )
    }
}

export default Home;