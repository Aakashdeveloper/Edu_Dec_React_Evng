import React,{useState,useEffect} from 'react';
import DisplayComponent from './displayComponent';

const url = "http://localhost:8900/news";

function HookComponent(){
    const [title] = useState('Developer Funnel');
    const [data] = useState('Second State')
    const [click, setClick] = useState(0);
    const [news,setNews] = useState(0)
    

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then((res) => {
            setNews(res)
        })
    },[news])


    return(
        <div className="jumbotron">
            <h1>{title}</h1>
            <h2>{data}</h2>
            <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
            <div onClick={()=>{setClick(click+1)}}>Click</div>
            <h2>Count:{click}</h2>
            <DisplayComponent newss={news}/>
        </div>
    )
}

export default HookComponent;