import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDish } from "../../actions/dishAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddDish = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [proteins, setProteins] = useState("");
  const [fats, setFats] = useState("");
  const [carbs, setCarbs] = useState("");

  const createDish = (e) => {
    e.preventDefault();
    const new_dish = {
      id: shortid.generate(),
      name: name,
      proteins: proteins,
      carbs: carbs,
      fats: fats,
      calories: 4*proteins+4*carbs+9*fats
    };
    dispatch(addDish(new_dish));
    history.push("/admin");
  };

  return (
    <div className="card addDish border-0 shadow">
      <div className="card-header">Add a Dish</div>
      <div className="card-body">
        <form onSubmit={(e) => createDish(e)}>
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
          <button id="addDish-btn" className="btn btn-primary" type="submit">
            Create Dish
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDish
