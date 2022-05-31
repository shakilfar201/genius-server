import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AUthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';
import ExploreHome from './pages/Explore/ExploreHome/ExploreHome';
import PlaceOrderHome from './pages/PlaceOrder/PlaceOrderHome/PlaceOrderHome';
import ExploreCarHome from './pages/ExploreCar/ExploreCarHome/ExploreCarHome';
import Invoice from './pages/DashBoard/Invoice/Invoice';



function App() {
  return (
    <div className="App">
      <AUthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/exploreInventory">
              <ExploreHome></ExploreHome>
            </Route>
            <Route path="/exploreCars">
              <ExploreCarHome></ExploreCarHome>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute exact path="/placeorder/:id">
              <PlaceOrderHome></PlaceOrderHome>
            </PrivateRoute>
            <Route  path="/invoice/:id">
              <Invoice></Invoice>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AUthProvider>
    </div>
  );
}

export default App;
