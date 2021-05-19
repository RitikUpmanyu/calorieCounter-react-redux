import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDish, updateDish } from "../../actions/dishAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import {useParams} from "react-router-dom";

const EditDish = () => {
  let {id} = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const dish = useSelector((state) => state.Dish.Dish)
  const [name, setName] = useState("");
  const [proteins, setProteins] = useState("");
  const [fats, setFats] = useState("");
  const [carbs, setCarbs] = useState("");

 

  useEffect(()=>{
      if(dish != null) {
          setName(dish.name)
          setProteins(dish.proteins)
          setCarbs(dish.carbs)
          setFats(dish.fats)
      }
    dispatch(getDish(id))
  }, [dish])

  const onUpdateDish=(e) =>{
    e.preventDefault();

    const update_dish = Object.assign(dish, { 
        name: name,
        proteins: proteins,
        carbs: carbs,
        fats: fats,
        calories: 4*proteins+4*carbs+9*fats})
    dispatch(updateDish(update_dish))
    history.push("/admin")
  }
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Dish</div>
      <div className="card-body">
        <form onSubmit={e=>onUpdateDish(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Dish Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Proteins"
              value={proteins}
              onChange={(e) => setProteins(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Carbs"
              value={carbs}
              onChange={(e) => setCarbs(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Fats"
              value={fats}
              onChange={(e) => setFats(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update Dish
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditDish
