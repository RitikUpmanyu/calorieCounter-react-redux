import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Dish from './Dish';
import {selectAllDish, clearAllDish, deleteAllDish} from "../../actions/dishAction"

const Dishes = () => {
    const dispatch = useDispatch();

    const [selectAll, setSelectAll] = useState(false);
    const dishes=useSelector((state) => state.Dish.Dishes);
    const selectedDishes= useSelector((state) => state.Dish.selectedDishes);
    useEffect(() => {
      if(selectAll){
        dispatch(selectAllDish(dishes.map((dish)=>dish.id)))
      } else {
        dispatch(clearAllDish())
      }
    }, [selectAll])

    return (
    <div> 
      {
        selectedDishes.length > 0 ? (
          <button className="btn btn-danger mb-3" onClick={()=>(dispatch(deleteAllDish()))}>Delete All</button>
        ) : null
      }
        <table id="adminTable" class="table shadow table-striped caption-top">
  <caption>List of dishes</caption>
  <thead className="bg-danger text-white">
    <tr>
      <th > 
            <div className="custom-control custom-checkbox">
                <input
                    id="selectAll"
                    type="checkbox"
                    className="custom-control-input"
                    value={selectAll}
                    onClick={()=>setSelectAll(!selectAll)}
                />
                <label 
                htmlFor="selectAll"
                className="custom-control-label"></label>
            </div>
        </th>
      <th >No.</th>
      <th >Name</th>
      <th >Proteins</th>
      <th >Carbs</th>
      <th >Fats</th>
      <th >Calories</th>
      <th >Actions</th>
    </tr>
  </thead>
  <tbody>
      {
          dishes.map((dish, index) => (
           <Dish dish={dish} index={index} key={dish.id} selectAll={selectAll} />
          ))
      }
  </tbody>
</table>
         </div>)
};

export default Dishes;
