import {combineReducers} from 'redux'
import {dishReducer} from "./dishReducer"
import {authReducer} from "./authReducer"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['Dish', 'Auth']
}

const rootReducer = combineReducers({
    Dish: dishReducer,
    Auth: authReducer
})



export default persistReducer(persistConfig, rootReducer)