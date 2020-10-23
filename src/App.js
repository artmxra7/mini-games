import { Switch, Route, Router } from 'react-router-dom';
import browserHistory from './browserHistory';
import { GamingRoutes } from './routing';
import { AppDashboardPage } from './pages';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Switch>
          {GamingRoutes},
          <Route exact path="/" key="/" component={AppDashboardPage} />,
          <Route path="*" key="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

const NoMatch = () => {
  return <h1>No match</h1>
}


export default App;
