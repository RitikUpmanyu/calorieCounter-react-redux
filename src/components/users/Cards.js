import React from 'react'
import Card from './Card'
import Search from './Search'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react"

const Cards = () => {
    
    const dishes=useSelector((state) => state.Dish.Dishes);
    const [searchWord, setSearch]=useState("");
    const callback = (term ) => {
        setSearch(term)
      }
    const filterIt = (dish, searchTerm) => {
        console.log(dish.includes(searchTerm))
        console.log(dish, searchTerm)
        return dish.toLowerCase().includes(searchTerm.toLowerCase())
        
        } 
   
    return (
        <div>
        
        <Search callback={callback}/>
          <div class="centered">

            <section class="cards cards-container">

                {
                   searchWord ?
                      dishes.filter((dish)=>filterIt(dish.name, searchWord)).map((dish) =>(
                        console.log(dish, "hello"),
                        <Card dish={dish} index="0" key={dish.id}/> ))
                      :
                            dishes.map((dish, index) => (
                                console.log("nah"),
                                <Card dish={dish} index={index} key={dish.id} />
                                ))
                        
                    
                }
        
            </section>
            </div>
        </div>
    )
}

export default Cards
