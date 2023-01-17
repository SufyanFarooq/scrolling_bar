import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";

const RoutsProvider = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/" component={App} />
    </Switch>
  </Router>
);

export default RoutsProvider;
