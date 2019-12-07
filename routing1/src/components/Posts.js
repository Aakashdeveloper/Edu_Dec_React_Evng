import React,{Component} from 'react'
import PostView from './PostView';

const url = "http://localhost:8900/languages"

class Posts extends Component {
    constructor(){
        super()
        console.log("constructor")
        this.state={
            topics:''
        }
    }

    componentDidMount(){
        console.log("componentDidMount")
        fetch(url, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                topics:data 
            })
        })
    }

    render(){
        console.log("render")
        return(
            <div className="panel panel-success">
                <div className="panel-heading">Panel Posts Header</div>
                <div className="panel-body">
                    <div className="jumbotron">
                        <PostView topicdata={this.state.topics}></PostView>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts;