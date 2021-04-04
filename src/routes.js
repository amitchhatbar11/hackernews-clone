const { Switch, Route } = require("react-router-dom");
const { Home } = require("./components/home");

const Routes = () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export { Routes };
