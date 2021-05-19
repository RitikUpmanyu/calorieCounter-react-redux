import Dishes from './components/dishes/Dishes';
import Navbar from './components/elements/Navbar';
import {provider, Provider} from "react-redux"; 
import './styles/App.scss';
import {store, persistor} from './store'
import Landing from './components/users/Landing'
import Login from './components/login/Login'
import NotFound from './components/errors/NotFound'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AddDish from './components/dishes/AddDish';
import EditDish from './components/dishes/EditDish';
import {useSelector} from "react-redux";
import {VerifyAuth} from './VerifyAuth'
import {Logout} from "./components/login/Logout"

function App() {
  return (
    <Provider store={store}> 
      <Router basename="/">
        <div className="App">
          <Navbar/>
          <div className="container">
            <div className="py-3">
              <Switch> 
                <Route exact path="/admin" >
                  <VerifyAuth>
                    <Dishes/>
                  </VerifyAuth>
                </Route>
                <Route exact path="/admin/add" >
                <VerifyAuth>
                    <AddDish/>
                  </VerifyAuth>
                </Route>
                <Route exact path="/admin/edit/:id">
                <VerifyAuth>
                    <EditDish/>
                  </VerifyAuth>
                </Route>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route exact component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
