import React from "react";
import {Container} from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Productscreen from "./screens/Productscreen";

function App() {
  return (
    <Router>
    <div>
    <Header />
    <main>
      <Container>
        <Switch>
          <Route exact path="/">
            <Homescreen />
          </Route>
          <Route path="/product/:id" >
            <Productscreen />
          </Route>
        </Switch>
      </Container >
    </main>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
