import {
    CREATE_DISH, 
    GET_DISH,
    UPDATE_DISH, 
    DELETE_DISH, 
    SELECT_DISH, 
    CLEAR_DISH, 
    DELETE_SELECTED_DISH} from '../constant/types'



export const addDish = (dish)=>({
        type: CREATE_DISH,
        payload: dish
});

export const getDish = (id) => ({
    type: GET_DISH,
    payload: id,
})

export const updateDish = (dish) => ({
    type: UPDATE_DISH,
    payload: dish,
})

// delete a dish
export const deleteDish = (id) => ({
    type: DELETE_DISH,
    payload: id,
  });
  
  // select all dish
  export const selectAllDish = (id) => ({
    type: SELECT_DISH,
    payload: id,
  });
  
  // clear selected dish
  export const clearAllDish = () => ({
    type: CLEAR_DISH,
  });
  
  // delete selected dish
  export const deleteAllDish = () => ({
    type: DELETE_SELECTED_DISH,
  });

  