import { useEffect } from "react";
import article from "./components/article";
import Page404 from "./components/Page404";
import { checkUserLoggedin } from "./utils/common";
const { Switch, Route, Redirect } = require("react-router-dom");
const { Home } = require("./components/home");
const { default: login } = require("./components/login");

/* This will authenticate the loading of pages which can only be viewed after user login */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkUserLoggedin() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )
    }
  />
);

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
        <PrivateRoute exact path="/submit" component={article} />
        <Route exact path="/404" component={Page404} />
        <Redirect from="*" to="/404" />
      </Switch>
    </div>
  );
};

export { Routes };
