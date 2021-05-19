import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteDish } from '../../actions/dishAction'

const Dish = ({dish, index, selectAll}) => {
    const dispatch = useDispatch()
    const {proteins, carbs, fats, calories, id}=dish;
    return (
             <tr>
              <th > 
            <div className="custom-control custom-checkbox">
                <input 
                    checked={selectAll}
                    type="checkbox"
                    className="custom-control-input"
                />
                <label className="custom-control-label"></label>
            </div>
        </th>
            <th scope="row">{index+1}</th>
            <td>{dish.name}</td>
            <td>{proteins}</td>
            <td>{carbs}</td>
            <td>{fats}</td>
            <td>{calories}</td>
            <td className="actions">
                <Link to={`/admin/edit/${id}`}>
                    <span className="material-icons">edit</span>
                </Link>
                <button class="deleteDish">
                    <span className="material-icons text-danger" onClick={()=> dispatch(deleteDish(id))}>remove_circle</span>
                </button>
            </td>
          </tr>
    )
}

export default Dish
