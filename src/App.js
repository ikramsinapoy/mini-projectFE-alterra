import Menu from "./components/Menu";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import DetailMakanan from "./components/DetailMakanan";
import Card from "./components/Card";
import Review from "./components/Review";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/detailmakanan/:id" exact component={DetailMakanan} />
          <Route path="/card" exact component={Card} />
          <Route path="/review" exact component={Review} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
