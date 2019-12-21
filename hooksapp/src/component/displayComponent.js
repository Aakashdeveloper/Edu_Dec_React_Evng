import React from 'react';

function DisplayComponent(props){


    const renderList = ({newss}) => {
        if(newss){
            return newss.map((item) => {
                return(
                <div>
                    <h1>{item.title}</h1>
                </div>
                )
                
            })
        }
    }
    return(
        <div>
            News Details
            {renderList(props)}
        </div>
    )
}

export default DisplayComponent;