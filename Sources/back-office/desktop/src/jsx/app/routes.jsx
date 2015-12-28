import { Route, Router } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';

import Blank from 'routes/blank';
import Login from 'routes/login';
import Dashboard from 'routes/dashboard';
import Lock from 'routes/lock';
import Accounts from 'routes/merchants/accounts';
import Overview from 'routes/merchants/overview';
import ProfileEdit from 'routes/merchants/profileedit';

export default (withHistory, onUpdate) => {
  const history = withHistory?
                  (Modernizr.history ?
                    new BrowserHistory
                  : new HashHistory)
                : null;
  return (
    <Router history={history} onUpdate={onUpdate}>
      <Route path='/' component={Dashboard} />
      <Route path='/app/login' component={Login} />
      <Route path='/app/dashboard' component={Dashboard} />
      <Route path='/app/merchants/account' component={Accounts} />
      <Route path='/app/lock' component={Lock} />
      <Route path='/app/merchants/overview' component={Overview} />
      <Route path='/app/merchants/profileedit' component={ProfileEdit} />
    </Router>
  );
};
