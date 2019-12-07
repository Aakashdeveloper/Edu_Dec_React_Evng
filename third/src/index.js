import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import NewsList from './component/NewsList';
import JSON from './db.json';

class App extends Component {
    constructor(){
        super()

        this.state={
            news: JSON,
            filtered: JSON
        }
    }

    filterNews(userInput){
        let output = this.state.news.filter((item) => {
            return (item.title.toLowerCase().indexOf(userInput) > -1 || 
                    item.feed.toLowerCase().indexOf(userInput) > -1)
        })

        this.setState({filtered:output})
    }



    render(){
        return(
            <React.Fragment>
                <Header newsSearch={(data) => {this.filterNews(data)}}/>
                <NewsList newsdata={this.state.filtered}></NewsList>
            </React.Fragment>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))

/*
Form parent to child we have to pass as props
From child to parent we have to pass thorugh function(callback function)*/