import { useEffect } from "react";
import article from "./components/article";
const { Switch, Route } = require("react-router-dom");
const { Home } = require("./components/home");
const { default: login } = require("./components/login");

const Routes = () => {
  useEffect(() => {
    if (localStorage.getItem("username") === "") {
      localStorage.setItem("loggedin", false);
    }
  }, []);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={login} />
        <Route exact path="/submit" component={article} />1
      </Switch>
    </div>
  );
};

export { Routes };
