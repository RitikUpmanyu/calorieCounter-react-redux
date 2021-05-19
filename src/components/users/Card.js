
import ProgressBar from "./Progress";
import axios from 'axios';
import React, {useState, useEffect} from 'react';


const Card = ({dish, index}) => {
    const {proteins, carbs, fats, calories, id}=dish
    
    const [clientId, setClientId]=useState('O1ubEmW8eXvuVaxkrinN-GwpbPyq_0dtEFTsNmZoluU')
    const [result, setResult]=useState([]);
    const [imgUrl, setUrl]=useState("");
    const [update, setUpdate]=useState([]);
    const clickEvent=(e)=>{
        setUpdate(e)
        setUpdate("")
    }
    const url="https://api.unsplash.com/search/photos?page=1&per_page=1&query="+
    dish.name+"&client_id="+clientId
 
    console.log(dish.name)
    const foodabstract = "https://images.unsplash.com/photo-1618502913824-e45c41e932d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzIyMTZ8MHwxfHNlYXJjaHwxfHxkaWV0JTIwZm9vZCUyMGdyYXBoaWN8ZW58MHx8fHwxNjIxNDM4NzI4&ixlib=rb-1.2.1&q=80&w=400"
    useEffect(() => {
        axios.get(url).then((response)=>{
            setResult(response.data.results);
            console.log(result)
            if(result[0]!=undefined){
                setUrl(result[0].urls.small);
                console.log(result[0].urls.small)  
            }
            else{
                setUrl(foodabstract);
            }
        })
    },[update]);

    console.log(imgUrl+"this")
    var divStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize:"cover",
        backgroundSepeat:"no-repeat",
        "&:hover":{
            height:"18em"
        }
    }
    return (
        <div>
            <div class="center" onClick={clickEvent}>
            <div class="property-card" style={divStyle} >
                <a href="#">
                <div class="property-image">
                    <div class="property-image-title">
                    </div>
                </div></a>
                <div class="property-description">
                <h5> {dish.name} </h5>
                <section class="cards">
                <div class="property-card1">
                
                    <div class="property-image1">
                        <div class="property-image-title">
                        <h5>Proteins</h5>
                        </div>
                    </div>

                </div>
                <ProgressBar key={id} bgcolor="green" completed={proteins} type="Proteins" cal={proteins*4} total={calories} />
                </section>
                <section class="cards">
                <div class="property-card1">
                
                    <div class="property-image1">
                        <div class="property-image-title">
                        <h5>Carbs</h5>
                        </div>
                    </div>

                </div>
                <ProgressBar key={id} bgcolor="yellow" completed={carbs} type="Carbs" cal={carbs*4} total={calories} />
                </section>
                <section class="cards">
                <div class="property-card1">
                
                    <div class="property-image1">
                        <div class="property-image-title">
                        <h5>Fats</h5>
                        </div>
                    </div>

                </div>
                <ProgressBar key={id} bgcolor="red" completed={fats} type="Fats" cal={fats*4} total={calories}/>
                </section>
                <section class="cards">
                <div class="property-card1">
                
                    <div class="property-image1">
                        <div class="property-image-title">
                        <h5>Calories</h5>
                        </div>
                    </div>

                </div>
                <ProgressBar key={id} bgcolor="blue" completed={calories} type="Calories" cal={calories} total={calories} />
                </section>
                </div>
                
            </div>
            
            
 


            </div>
        </div>
    )
}

export default Card


