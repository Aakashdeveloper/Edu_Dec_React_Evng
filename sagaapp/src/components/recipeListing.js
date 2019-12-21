import React from 'react';
import './recipeListing.css'

const Recipe = (props) => {
    console.log("in recipe>>>>",props)
    const listing = ({foodData}) => {
        if(foodData){
            return foodData.map((item) => {
                return(
                    <div class="panel-group">
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            <center>
                                <h4 class="panel-title">
                                <a>{item.name}</a>
                                <br/><br/>
                                <img src={item.imageURL} className="image"/>
                                </h4>
                                <br/>
                                <a data-toggle="collapse" href={`#${item.id}`}
                                className="btn btn-info">Details</a>
                            </center>

                            
                            
                        </div>
                        <div id={`${item.id}`} class="panel-collapse collapse">
                            <h3>Steps to cook</h3>
                            <p>{item.steps}</p>
                            <h3>Ingredients</h3>
                            <p>{item.ingredients[0].name}</p>
                            <p>Quntity: {item.ingredients[0].quantity}</p>
                            <div class="panel-footer">Footer</div>
                        </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <br/>
            {listing(props)}
            
        </div>
    )
}

export default Recipe;