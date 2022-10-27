import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map from "./Map";
import Sidebar from "./Sidebar";
import Navbar from "./components/Navbar";
import LandingView from "./components/Landing";
import LandingViewMetaData from "./components/Metadata/index";
import Form from "./components/Formulario/index";
import Datos from "./components/Datos";
import Error from "./components/Error/error";
import { Provider } from "react-redux";
import store from "./store";
import "./styles.scss";



export default function App() {
  const [map, setMap] = useState(null);

  return (
    <Provider store={store}>
      <Router basename={"/sig"}> {/* subruta de la página */}
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <LandingView />
            </Route>
            <Route path="/mapa" exact>
              {map && <Sidebar map={map} />}
              <Map setMap={setMap} />
            </Route>
            <Route path="/metadata/:id">
              <LandingViewMetaData />
            </Route>
            <Route path="/datos" exact>
              {/* Mapa temático */}
              <Datos/>
            </Route>
            <Route path="/form" exact>
              <Form />
            </Route>
            {/* not match route */}
            <Route path="*">
              <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"75%"}}>
                <Error/>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
