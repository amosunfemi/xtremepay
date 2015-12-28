import {
  Link,
  State,
  Navigation,browserHistory
} from 'react-router';


//import LinkedStateMixin from 'react-addons';
//import Auth from '../services/AuthService'
import LinkedStateMixin from 'react-addons/lib/LinkedStateMixin';
import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';


import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import auth from 'services/auth';

var Body = React.createClass({
  mixins: [
    State, Navigation, LinkedStateMixin
  ],
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  back: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.transitionTo('/app/dashboard');
  },
  getInitialState: function() {
    //this.onChange = this.onChange.bind(this)
    //return {user: '', password: ''};
    return {
      error: false
    }
  },
  componentDidMount: function() {
    $('html').addClass('authentication');
  },

  componentWillUnmount: function() {
    $('html').removeClass('authentication');
  },
  login: function(e) {
    e.preventDefault();
    console.log(this.state);
  },


  handleSubmit: function(event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })
      else {
        this.transitionTo('/app/dashboard');
      }
      /*const { location } = this.props;

      if (location.state && location.state.nextPathname) {
        this.history.replaceState(null, location.state.nextPathname)
      } else {
        this.history.replaceState(null, '/')
      }*/

    })
  },

  render: function() {

       // a partial valueLink binding which can be sent (as props) to child components that understand only a sub portion of the data structure
    //var partial = link('list');

    return (
      <Container id='auth-container' className='login'>
        <Container id='auth-row'>
          <Container id='auth-cell'>
            <Grid>
              <Row>
                <Col sm={12}>
                  <PanelContainer noControls>
                    <Panel>
                      <PanelBody style={{
                      padding: 0
                      }}>
                        <div className='text-center bg-darkblue fg-white'>
                          <h3 style={{
                          margin: 0, padding: 25
                          }}>Sign in to XtremePay</h3>
                        </div>
                        <div className='bg-hoverblue fg-black50 text-center' style={{
                        padding: 12.5
                        }}>
                          <div>You need to sign in for those awesome features</div>
                          <div style={{
                          marginTop: 12.5, marginBottom: 12.5
                          }}>
                            <Button id='facebook-btn' lg bsStyle='darkblue' type='submit' onClick={this.back}>
                              <Icon glyph='icon-fontello-facebook'/>
                              <span>Sign in
                                <span className='hidden-xs'>with facebook</span>
                              </span>
                            </Button>
                          </div>
                          <div>
                            <a id='twitter-link' href='#' onClick={this.back}><Icon glyph='icon-fontello-twitter'/>
                              <span>
                                or with twitter</span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className='text-center' style={{
                          padding: 12.5
                          }}>
                            or use your XtremePay account
                          </div>
                          <div style={{
                          padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25
                          }}>
                            <Form onSubmit={this.handleSubmit}>
                              <FormGroup>
                                <InputGroup lg>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-mail'/>
                                  </InputGroupAddon>
                                  <Input autoFocus type='email' ref="email" valueLink={this.linkState('user')}  id='emailaddress' className='border-focus-blue' placeholder='sunday.amosun@xtremepayafr.com'/>
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup lg>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-key'/>
                                  </InputGroupAddon>
                                  <Input type='password'  ref="pass" id='password' valueLink={this.linkState('password')}  className='border-focus-blue' placeholder='password'/>
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <Grid>
                                  <Row>
                                    <Col xs={6} collapseLeft collapseRight style={{
                                    paddingTop: 10
                                    }}>
                                      <Link to='/app/signup'>Create an XtremePay account</Link>
                                    </Col>
                                    <Col xs={6} collapseLeft collapseRight className='text-right'>
                                      <Button outlined lg type='submit' bsStyle='blue'>Login</Button>
                                    </Col>
                                  </Row>
                                </Grid>
                              </FormGroup>
                            </Form>
                          </div>
                        </div>
                      </PanelBody>
                    </Panel>
                  </PanelContainer>
                </Col>
              </Row>
            </Grid>
          </Container>
        </Container>
      </Container>
    );
  }
});

@SidebarMixin
export default class extends React.Component {

  render () {
    var classes = classNames({'container-open': this.props.open});

    return (
      <Container id='container' className={classes}>
        <Sidebar/>
        <Header/>
        <Body/>
        <Footer/>
      </Container>
    );
  }
}
