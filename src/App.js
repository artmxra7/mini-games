import { Switch, Route, Router } from 'react-router-dom';
import browserHistory from './browserHistory';
import {GamingRoutes} from './routing';
import {AppDashboardPage} from './pages';

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        {GamingRoutes},
        <Route exact path="/" component={AppDashboardPage} />,
        <Route path="*">
            <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

const NoMatch = () => {
  return <h1>No match</h1>
}


export default App;
