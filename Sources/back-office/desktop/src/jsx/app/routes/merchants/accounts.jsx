import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import { IonTabContainer,
         IonTabHead,
         IonTabBody,
         IonTab,
         IonTabItem } from 'global/jsx/ion';
import LoremIpsum from 'global/jsx/loremipsum';

import colors from 'routes/colors';

class Body extends React.Component {
  render() {
    return (
      <Container id='body'>

        <Grid>
          <Row>
            <Col sm={12} collapseRight>
              <PanelContainer controlStyles='bg-lightred fg-white'>
                <PanelHeader className='bg-lightred fg-white'>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <h3>Account Details</h3>
                        <TabContainer id='tab-3'>
                          <TabList justified bsStyle='red'>
                            <Tab active>Overview</Tab>
                            <Tab>My Profile</Tab>
                            <TabDropdown title='Dropdown' menu-props={{bsStyle: 'red'}}>
                              <Tab>
                                @fat
                              </Tab>
                              <Tab>
                                @mdo
                              </Tab>
                            </TabDropdown>
                          </TabList>
                        </TabContainer>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12} style={{paddingTop: 12.5}}>
                        <TabContent tabContainerID='tab-3'>
                          <TabPane active>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                          <TabPane>
                            <p><LoremIpsum query='2s' /></p>
                            <p><LoremIpsum query='2s' /></p>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>








      </Container>
    );
  }
}

@SidebarMixin
export default class extends React.Component {
  render() {
    var classes = classNames({
      'container-open': this.props.open
    });

    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}
