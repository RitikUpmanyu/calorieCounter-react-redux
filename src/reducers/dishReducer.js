import {CREATE_DISH, GET_DISH, UPDATE_DISH, DELETE_DISH, SELECT_DISH, DELETE_SELECTED_DISH, CLEAR_DISH} from '../constant/types'


const initalState = {
    Dishes: [ 
        ],
    Dish: null,
    selectedDishes: [],
};


export const dishReducer = (state = initalState, action)=> {
    switch(action.type){
        case CREATE_DISH:
            return {
                ...state,
                Dishes: [action.payload, ...state.Dishes],
            }
        case GET_DISH:
            let arr = state.Dishes.filter((dish) => dish.id == action.payload);
            arr = arr.values();
            
            for (let val of arr) {
                arr = val;
            }

            return {
                ...state,
                Dish: arr,
            } 
        case UPDATE_DISH:
            return {
                ...state,
                Dishes: state.Dishes.map(dish => dish.id == action.payload.id ? action.payload : dish
                    ) ,
            }
         case DELETE_DISH:
            return {
              ...state,
              Dishes: state.Dishes.filter(
                (dish) => dish.id != action.payload
              ),
            }
          case DELETE_SELECTED_DISH:
            return {
              ...state,
              Dishes: [],
            }
          case SELECT_DISH:
            return {
              ...state,
              selectedDishes: action.payload,
            }
      
          case CLEAR_DISH:
            return {
              ...state,
              selectedDishes: [],
            }
          default:
            return state;
        }
};

