import {Sidebar, SidebarNav, SidebarNavItem, SidebarControls, SidebarControlBtn} from 'global/jsx/sidebar_component';

import {Link, State, Navigation} from 'react-router';
import LoremIpsum from 'global/jsx/loremipsum';
import auth from 'services/auth';

class ApplicationSidebar extends React.Component {

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'>PAGES</div>
              <div className='sidebar-nav-container'>
                <SidebarNav style={{
                  marginBottom: 0
                }}>
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Dashboard' href='/app/dashboard'/>
                  <SidebarNavItem glyph='icon-dripicons-document' name={<span>General
                    <BLabel className='bg-darkgreen45 fg-white'>6</BLabel>
                  </span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-inbox' name='Overview' href='/app/merchants/overview'/>
                      <SidebarNavItem glyph='icon-outlined-mail-open' name='Information' href='/app/merchants/profileedit'/>
                      <SidebarNavItem glyph='icon-dripicons-message' name='Upload Documents' href='/app/mailbox/compose'/>
                      <SidebarNavItem glyph='icon-dripicons-message' name='Messages' href='/app/mailbox/compose'/>
                      <SidebarNavItem glyph='icon-dripicons-message' name='Manage Users' href='/app/mailbox/compose'/>
                      <SidebarNavItem glyph='icon-dripicons-message' name='Pricing' href='/app/mailbox/compose'/>
                    </SidebarNav>
                  </SidebarNavItem>
                  <hr style={{
                    borderColor: '#3B4648',
                    borderWidth: 2,
                    marginTop: 15,
                    marginBottom: 0,
                    width: 200
                  }}/>

                  <SidebarNavItem glyph='icon-simple-line-icons-users' name={<span>Products
                    <BLabel className='bg-darkblue fg-white'>2</BLabel>
                  </span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-inbox' name='Sites & Products' href='/app/mailbox/inbox'/>
                      <SidebarNavItem glyph='icon-outlined-mail-open' name='New Site' href='/app/mailbox/mail'/>
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-fontello-install' name={<span>Transactions
                    <BLabel className='bg-deepred fg-white'>3</BLabel>
                  </span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-dripicons-message' name='Search Transactions' href='/app/merchants/account'/>
                      <SidebarNavItem glyph='icon-dripicons-message' name='Activity Log' href='/app/mailbox/compose'/>
                      <SidebarNavItem glyph='icon-dripicons-message' name='Notifications' href='/app/mailbox/compose'/>
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-ikons-bar-chart-2' name={<span>Finance
                    <BLabel className='bg-brown50 fg-white'>5</BLabel>
                  </span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-inbox' name='Account Statement' href='/app/mailbox/inbox'/>
                      <SidebarNavItem glyph='icon-outlined-mail-open' name='Payout' href='/app/mailbox/mail'/>
                      <SidebarNavItem glyph='icon-dripicons-message' name='Account Balance' href='/app/mailbox/compose'/>
                      <SidebarNavItem glyph='icon-dripicons-message' name='Charge Back' href='/app/mailbox/compose'/>
                      <SidebarNavItem glyph='icon-dripicons-message' name='Request Payout' href='/app/mailbox/compose'/>
                    </SidebarNav>
                  </SidebarNavItem>
                  <hr style={{
                    borderColor: '#3B4648',
                    borderWidth: 2,
                    marginTop: 15,
                    marginBottom: 0,
                    width: 200
                  }}/>
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Toolbox' href='/app/dashboard'/>
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class DummySidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>DUMMY SIDEBAR</div>
            <LoremIpsum query='1p'/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

var SideBarProfile = React.createClass({
  mixins: [
    State, Navigation
  ],
  allTitleCase: function(inStr) {
    return inStr.replace(/\w\S*/g, function(tStr) {
      return tStr.charAt(0).toUpperCase() + tStr.substr(1).toLowerCase();
    });
  },

  componentDidMount: function() {},

  render: function() {

    if (auth.loggedIn()) {
      var user_detail = JSON.parse(auth.getUserDetail());
      return (
        <div style={{
          top: 23,
          fontSize: 16,
          lineHeight: 1,
          position: 'relative'
        }}>{this.allTitleCase(user_detail.FirstName)} {this.allTitleCase(user_detail.LastName)}</div>
      )
    } else {
      return (
        <div style={{
          top: 23,
          fontSize: 16,
          lineHeight: 1,
          position: 'relative'
        }}></div>
      )
    }

  }
})

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id='sidebar' {...this.props}>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src='/imgs/avatars/avatar0.png' width='40' height='40'/>
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <SideBarProfile/>
                <div>
                  <Progress id='demo-progress' value={30} min={0} max={100} color='#ffffff'/>
                  <Link to='/app/lock'><Icon id='demo-icon' bundle='fontello' glyph='lock-5'/></Link>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <SidebarControls>
          <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0}/>
          <SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1}/>
          <SidebarControlBtn bundle='fontello' glyph='chart-pie-2' sidebar={2}/>
          <SidebarControlBtn bundle='fontello' glyph='th-list-2' sidebar={3}/>
          <SidebarControlBtn bundle='fontello' glyph='bell-5' sidebar={4}/>
        </SidebarControls>
        <div id='sidebar-container'>
          <Sidebar sidebar={0} active>
            <ApplicationSidebar/>
          </Sidebar>
          <Sidebar sidebar={1}>
            <DummySidebar/>
          </Sidebar>
          <Sidebar sidebar={2}>
            <DummySidebar/>
          </Sidebar>
          <Sidebar sidebar={3}>
            <DummySidebar/>
          </Sidebar>
          <Sidebar sidebar={4}>
            <DummySidebar/>
          </Sidebar>
        </div>
      </div>
    );
  }
}
