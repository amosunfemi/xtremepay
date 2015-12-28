import classNames from 'classnames';

import {
  Link
} from 'react-router';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import LoremIpsum from 'global/jsx/loremipsum';

class UserPricingMgtPanel extends React.Component{
  render() {
    return (
      <PanelContainer>
        <Panel horizontal className='force-collapse'>
          <PanelLeft noRadius className='panel-sm-4'>
            <UserMgtPanel/>
          </PanelLeft>
          <PanelRight className='panel-sm-4'>
            <PricingPanel/>
          </PanelRight>
        </Panel>
      </PanelContainer>
    )
  }
}
class UserMgtPanel extends React.Component{
  render(){
    return (
      <Grid>
        <Row>
          <Col xs={12} style={{padding: 50, paddingTop: 12.5, paddingBottom: 25 }} className='text-left'>
            <h3 className='fg-black50'>ADD USERS.</h3>
            <hr/>
            Provide credentials for the users to whom you want to grant access to your merchant interface.
            <br/>
            <Button bsStyle='darkgreen45'>Add New User +</Button>
            <br/>
          </Col>
        </Row>
        <Row>
          <Col xs={9} style={{padding: 50, paddingTop: 12.5, paddingBottom: 25 }} className='text-left'>
            <Table >
              <tbody>
                <tr>

                  <td>
                    <strong>ANNA SANCHEZ</strong>
                    <p>anna.sanchez@maxmart.com. <strong>Administrator</strong></p>
                  </td>
                  <td width='75'><Link to='/app/user/settings'><Icon glyph='icon-fontello-cog'/></Link></td>
                  <td width='75'><Link to='/app/user/add'><Icon glyph='icon-fontello-trash'/></Link></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    )
  }
}

class PricingPanel extends React.Component{
  render(){
    return (
      <Grid>
        <Row>
          <Col xs={12} style={{padding: 50, paddingTop: 12.5, paddingBottom: 25 }} className='text-left'>
            <h3 className='fg-black50'>PRICING AND FEES.</h3>
            <hr/>
            Choose a payment type and see how much you can earn for each price point. Also you can filter by country, payment solution and export results to CSV/XML
            <br/>
            <Button bsStyle='darkgreen45'>See Princing and Fees</Button>
            <br/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

class InfoKnob extends React.Component {
  componentDidMount () {
    $('.dial').knob();
    $('.knob').knob({
      draw: function() {
        // 'tron' case
        if (this.$.data('skin') == 'tron') {
          var a = this.angle(this.cv), // Angle
            sa = this.startAngle, // Previous start angle
            sat = this.startAngle, // Start angle
            ea, // Previous end angle
            eat = sat + a, // End angle
            r = true;

          this.g.lineWidth = this.lineWidth;

          this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);

          if (this.o.displayPrevious) {
            ea = this.startAngle + this.angle(this.value);
            this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
            this.g.beginPath();
            this.g.strokeStyle = this.previousColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
            this.g.stroke();
          }

          this.g.beginPath();
          this.g.strokeStyle = r
            ? this.o.fgColor
            : this.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
          this.g.stroke();

          this.g.lineWidth = 2;
          this.g.beginPath();
          this.g.strokeStyle = this.o.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
          this.g.stroke();

          return false;
        }
      }
    });

    function clock() {
      var $s = $('.second'),
        $m = $('.minute'),
        $h = $('.hour'),
        d = new Date(),
        s = d.getSeconds(),
        m = d.getMinutes(),
        h = d.getHours();
      $s.val(s).trigger('change');
      $m.val(m).trigger('change');
      $h.val(h).trigger('change');
      setTimeout(clock, 1000);
    }
    clock();
  }

  render () {
    return (
        <Row>
          <Col xs={2} className='text-center'>
            <input type='text' defaultValue='75' className='dial autosize' data-width='30%' data-fgcolor='#F09FA6'/>
            <p>INFORMATION COMPLETED</p>
          </Col>
          <Col xs={2} className='text-left'>
            <p>In order to complete your profile, please provide us with the information required.</p>
            <p>
              <Button bsStyle='darkgreen45'>Complete Your Details</Button>
            </p>
          </Col>
          <Col xs={1} className='text-center'></Col>
          <Col xs={2} className='text-center'>
            <input type='text' defaultValue='50' className='dial autosize' data-width='30%' data-displayprevious='true' data-fgcolor='#B4A1DD'/>
            <p>DOCUMENT UPLOADED</p>
          </Col>
          <Col xs={2} className='text-center'>
            <p>Please upload supporting documentations.</p>
            <br/>
            <p>
              <Button bsStyle='darkgreen45'>Upload Your Documents</Button>
            </p>
          </Col>
        </Row>
    );
  }
}

class ContactPanel extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12} style={{padding: 50, paddingTop: 12.5, paddingBottom: 25}} className='text-center'>
            <h3 className='fg-black50'>Contact Info.</h3>
            <hr/>
            ANNA SANCHEZ
            <br/>
            MAXMART MALL, 37, Indepence Road Accra
            <br/>
            024567120, anna.sanchez@maxmart.com
          </Col>
        </Row>
      </Grid>
    );
  }
}

class LegalPanel extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12} style={{
          padding: 50, paddingTop: 12.5, paddingBottom: 25
          }} className='text-center'>
            <h3 className='fg-black50'>Legal</h3>
            <hr/>
            Test
            <br/>
            Test
            <br/>
            Test
          </Col>
        </Row>
      </Grid>
    );
  }
}

class AccountDetailPanel extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12} style={{
          padding: 50, paddingTop: 12.5, paddingBottom: 25
          }} className='text-center'>
            <h3 className='fg-black50'>Account Details</h3>
            <hr/>
            Test
            <br/>
            Test
            <br/>
            Test
          </Col>
        </Row>
      </Grid>
    );
  }
}

class CompanyPanel extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12} style={{padding: 50, paddingTop: 12.5, paddingBottom: 25}} className='text-center'>
            <h3 className='fg-black50'>Company Info.</h3>
            <hr/>
            Test
            <br/>
            Test
            <br/>
            Test
          </Col>
        </Row>
      </Grid>
    );
  }
}

class BeneficiaryPanel extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12} style={{
          padding: 50, paddingTop: 12.5, paddingBottom: 25
          }} className='text-center'>
            <h3 className='fg-black50'>Beneficiary</h3>
            <hr/>
            Test
            <br/>
            Test
            <br/>
            Test
          </Col>
        </Row>
      </Grid>
    );
  }
}

class Body extends React.Component {
  render () {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <h3>ACCOUNT</h3>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={20} smCollapseRight>
              <PanelContainer>
                <Panel horizontal className='force-collapse'>
                  <PanelLeft noRadius className='panel-sm-4'>
                    <ContactPanel/>
                  </PanelLeft>
                  <PanelBody className='panel-sm-4' style={{padding: 0}}>
                    <BeneficiaryPanel/>
                  </PanelBody>
                  <PanelRight noRadius className='panel-sm-4'>
                    <LegalPanel/>
                  </PanelRight>
                  <PanelRight className='panel-sm-4'>
                    <AccountDetailPanel/>
                  </PanelRight>
                  <PanelRight className='panel-sm-4'>
                    <CompanyPanel/>
                  </PanelRight>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>

        <InfoKnob/>
          <Grid>
            <Row>
              <Col sm={20} smCollapseRight>
                <UserPricingMgtPanel/>
              </Col>
            </Row>
        </Grid>

      </Container>
    );
  }
}

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
