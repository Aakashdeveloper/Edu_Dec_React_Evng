import React from 'react';

const NewsList = (props) => {
    console.log(props)
    const mynews = props.newsdata.map((data) => {
        return(
            <div key={data.id}>
                <h3>{data.title}</h3>
                <div>
                    {data.feed}
                </div>
            </div>
        )
    })

    return(
        <div>
           {mynews}
        </div>
    )
}

export default NewsList;