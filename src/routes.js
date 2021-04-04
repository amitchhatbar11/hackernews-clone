import { useEffect } from "react";
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
      </Switch>
    </div>
  );
};

export { Routes };
