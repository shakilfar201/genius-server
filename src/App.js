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
import VehicalHome from './pages/VehicalExplore/VehicalHome/VehicalHome';
import SuperAceHome from './pages/VehicalExplore/SuperAce/SuperAceHome';
import MegaXlHome from './pages/VehicalExplore/MegaXl/MegaXlHome';
import IntraV10Home from './pages/VehicalExplore/INTRAV10&20/IntraV10Home';
import DiRxHome from './pages/VehicalExplore/207DI&RX/DiRxHome';
import XenonHome from './pages/VehicalExplore/XENON30.L/XenonHome';
import Lpt407Home from './pages/VehicalExplore/LPT407LPT709/Lpt407Home';
import Lpt909Home from './pages/VehicalExplore/LPT909LPK909/Lpt909Home';
import Lpk912crHome from './pages/VehicalExplore/LPK912CR/Lpk912crHome';
import UltraHome from './pages/VehicalExplore/ULTRA/UltraHome';
import Cr1212Home from './pages/VehicalExplore/1212CR/Cr1212Home';
import Tc1613Home from './pages/VehicalExplore/1613TC&BS3/Tc1613Home';
import Lpt1615Home from './pages/VehicalExplore/LPT&LPK1615/Lpt1615Home';
import Lpt2516Home from './pages/VehicalExplore/LPT&LPK2516/Lpt2516Home';
import Lpt2518Home from './pages/VehicalExplore/LPT&LPK2518/Lpt2518Home';




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
            {/* Vehicle Start */}
            <PrivateRoute exact path="/ace">
              <VehicalHome></VehicalHome>
            </PrivateRoute>
            <PrivateRoute exact path="/superace">
              <SuperAceHome></SuperAceHome>
            </PrivateRoute>
            <PrivateRoute exact path="/megaXl">
              <MegaXlHome></MegaXlHome>
            </PrivateRoute>
            <PrivateRoute exact path="/IntraV1020">
              <IntraV10Home></IntraV10Home>
            </PrivateRoute>
            <PrivateRoute exact path="/207dI&rx">
              <DiRxHome></DiRxHome>
            </PrivateRoute>
            <PrivateRoute exact path="/xenon30.l">
              <XenonHome></XenonHome>
            </PrivateRoute>
            <PrivateRoute exact path="/lpt407&709">
              <Lpt407Home></Lpt407Home>
            </PrivateRoute>
            <PrivateRoute exact path="/lpt909lpk909">
              <Lpt909Home></Lpt909Home>
            </PrivateRoute>
            <PrivateRoute exact path="/lpk912cr">
              <Lpk912crHome></Lpk912crHome>
            </PrivateRoute>
            <PrivateRoute exact path="/ultra">
              <UltraHome></UltraHome>
            </PrivateRoute>
            <PrivateRoute exact path="/1212cr">
              <Cr1212Home></Cr1212Home>
            </PrivateRoute>
            <PrivateRoute exact path="/1613tc&bs3">
              <Tc1613Home></Tc1613Home>
            </PrivateRoute>
            <PrivateRoute exact path="/lpt&lpk1615">
              <Lpt1615Home></Lpt1615Home>
            </PrivateRoute>
            <PrivateRoute exact path="/lpt&lpk2516">
              <Lpt2516Home></Lpt2516Home>
            </PrivateRoute>
            <PrivateRoute exact path="/lpt&lpk2518">
              <Lpt2518Home></Lpt2518Home>
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
