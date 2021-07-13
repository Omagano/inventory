import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "./components/about/about";
import { Auth } from "./components/auth/auth";
import { Home } from "./components/home/home";
import { ItemEntry } from "./components/item-entry/item-entry";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/auth" component={Auth} exact/>
        <Route path="/items" component={ItemEntry} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
