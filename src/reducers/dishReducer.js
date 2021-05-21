import {CREATE_DISH, GET_DISH, UPDATE_DISH, DELETE_DISH, SELECT_DISH, DELETE_SELECTED_DISH, CLEAR_DISH} from '../constant/types'


const initalState = {
    Dishes: [ {
      id: 'EeGs5-jGi',
      name: 'Spinach',
      proteins: '8',
      carbs: '3',
      fats: '1',
      calories: 53
    },
    {
      id: 'DYXU0jzNs',
      name: 'Milk ',
      proteins: '8',
      carbs: '5',
      fats: '2',
      calories: 70
    },
    {
      id: 'w2KQz1BR0',
      name: 'curd',
      proteins: '6',
      carbs: '5',
      fats: '4',
      calories: 80
    },
    {
      id: 'MfPossKlt',
      name: 'Mango',
      proteins: '3',
      carbs: '7',
      fats: '5',
      calories: 85
    },
    {
      id: 'Tn7ZEuLX6',
      name: 'Biscuits',
      proteins: '1',
      carbs: '7',
      fats: '8',
      calories: 104
    },
    {
      id: 'UA_iHd2zT',
      name: 'Roti',
      proteins: '3',
      carbs: '4',
      fats: '1',
      calories: 37
    },
    {
      id: '7H1dqiXEA',
      name: 'Egg',
      proteins: '3',
      carbs: '6',
      fats: '2',
      calories: 54
    },
    {
      id: 'Td4lZeji9',
      name: 'Potato',
      proteins: '2',
      carbs: '3',
      fats: '4',
      calories: 56
    }
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

