import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import { useSelector } from "react-redux";
function App() {
  let user = useSelector((state) => state.user);

  const ProtectedRoute = (props) => {
    if (user.isAuthenticated === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  return (
    <div>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Jobs} />
        <ProtectedRoute
          path="/job/:id"
          render={(props) => <Details {...props} />}
        />
        <Route path="/edit/:id" exact component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
