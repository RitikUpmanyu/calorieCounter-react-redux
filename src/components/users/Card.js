
import ProgressBar from "./Progress";
import axios from 'axios';
import React, {useState, useEffect} from 'react';


const Card = ({dish, index}) => {
    const {proteins, carbs, fats, calories, id}=dish
    
    const [clientId, setClientId]=useState('O1ubEmW8eXvuVaxkrinN-GwpbPyq_0dtEFTsNmZoluU')
    const [result, setResult]=useState([]);
    const [imgUrl, setUrl]=useState("");
    const [count, setCount]=useState(0);
    const clickEvent=(e)=>{
        setCount(count+1)
        console.log(count)
    }
    const url="https://api.unsplash.com/search/photos?page=2&per_page=10&query="+
    dish.name+"&client_id="+clientId
    
    console.log(dish.name)
    const foodabstract = "https://scontent.fdel7-1.fna.fbcdn.net/v/t1.6435-1/p200x200/90145698_2595641050763168_4837813439516639232_n.jpg?_nc_cat=100&_nc_map=test-rt&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=-fI6p4E3PLoAX9BEfwA&_nc_ht=scontent.fdel7-1.fna&tp=6&oh=146559549a6d9cc5abad03b30012fcc2&oe=60CA8043"
    useEffect(() => {
        axios.get(url).then((response)=>{
            setResult(response.data.results);
            console.log(result)
            if(result[count]!=undefined){
                setUrl(result[count].urls.small);
                console.log(count)  
            }
            else{
                setUrl(foodabstract);
                setCount(0)
            }
        })
    },[count]);

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
                <section class="cards1">
                <div class="property-card1">
                
                    <div class="property-image1">
                        <div class="property-image-title">
                        <h5>Proteins</h5>
                        </div>
                    </div>

                </div>
                <ProgressBar key={id} bgcolor="#6b5b95" completed={proteins} type="Proteins" cal={proteins*4} total={calories} />
                </section>
                <section class="cards1">
                <div class="property-card1">
                
                    <div class="property-image1">
                        <div class="property-image-title">
                        <h5>Carbs</h5>
                        </div>
                    </div>

                </div>
                <ProgressBar key={id} bgcolor="#feb236" completed={carbs} type="Carbs" cal={carbs*4} total={calories} />
                </section>
                <section class="cards1">
                <div class="property-card1">
                
                    <div class="property-image1">
                        <div class="property-image-title">
                        <h5>Fats</h5>
                        </div>
                    </div>

                </div>
                <ProgressBar key={id} bgcolor="#d64161" completed={fats} type="Fats" cal={fats*4} total={calories}/>
                </section>
                <section class="cards1">
                <div class="property-card1">
                
                    <div class="property-image1">
                        <div class="property-image-title">
                        <h5>Calories</h5>
                        </div>
                    </div>

                </div>
                <ProgressBar key={id} bgcolor="#ff7b25" completed={calories} type="Calories" cal={calories} total={calories} />
                </section>
                </div>
                
            </div>
            
            
 


            </div>
        </div>
    )
}

export default Card


