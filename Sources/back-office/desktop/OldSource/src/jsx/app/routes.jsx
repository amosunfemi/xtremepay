import {
  Route,
  Router,
  Link,
  History,
  State,
  Navigation,
  browserHistory
} from 'react-router';
import {
  LinkedStateMixin
} from 'react-addons/lib/LinkedStateMixin';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';



import Blank from 'routes/blank';
import Login from 'routes/login';

import Dashboard from 'routes/dashboard';
import MerchantDetails from 'routes/merchants/details';
import MerchantList from 'routes/merchants/list';
import auth from 'services/auth';
//import {requireAuthentication} from 'components/AuthenticatedComponent';
//import NavigatableMixin from 'react-router-component';


const App = React.createClass({
  mixins: [
    State, Navigation, LinkedStateMixin
  ],
  getInitialState () {
    return {loggedIn: auth.loggedIn()}
  },

  updateAuth (loggedIn) {
    this.setState({loggedIn: loggedIn})
  },

  componentWillMount () {
    auth.onChange = this.updateAuth;
    auth.login();
  },

  componentDidMount: function() {
    this.transitionTo('/app/login');
  },

  render () {
    return (
      <div>
        <ul>
          <li>
            {this.state.loggedIn
              ? (
                <Link to="/logout">Log out</Link>
              )
              : (
                <Link to="/login">Sign in</Link>
              )}
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/app/dashboard">Dashboard</Link>
            (authenticated)</li>
        </ul>
        {this.props.children || <p>You are
          {!this.state.loggedIn && 'not'}
          logged in.</p>}
      </div>
    )
  }
})
function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn()) {
    Navigation.transitionTo('/app/login');
    //replaceState({nextPathname: nextState.location.pathname}, '/app/login')
  }

}
export default(withHistory, onUpdate) => {
  //mixins: [ Navigatable ],

  function requireAuth1(nextState, replaceState) {
    /*if (!auth.loggedIn()){
      console.log(this);
      this.transitionTo('/app/login');
      //this.navigate('/app/login');
      //history.replaceState({
      //  nextPathname: nextState.location.pathname
      //}, '/app/login')
    }*/}



  const history = withHistory
    ? (Modernizr.history
      ? new BrowserHistory
      : new HashHistory)
      : null;
    return (
      <Router history={history} onUpdate={onUpdate}>
        <Route path='/' component={App}/>
        <Route path='/app/login' component={Login}/>
        <Route path='/app/dashboard' component={Dashboard}/> //onEnter={requireAuth}
        <Route path='/app/merchants/details/:accountNo' component={MerchantDetails}/>
        <Route path='/app/merchants/list' component={MerchantList} onEnter={requireAuth}/>
      </Router>
    );

  let jwt = localStorage.getItem('jwt');
  if (jwt) {
    LoginActions.loginUser(jwt);
  }

};
