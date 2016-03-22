import classNames from 'classnames';
import {Link} from 'react-router';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import LoremIpsum from 'global/jsx/loremipsum';

class BeneficiaryForm extends React.Component {
  componentDidMount() {
    $('#bendateofbirth').datetimepicker({format: 'DD/MM/YYYY'});
    $('#bencntryres').select2({placeholder: "Select a Country", allowClear: true});
    $('#bennationality').select2({placeholder: "Select a Country", allowClear: true});
  }
  render() {
    //const {date, format, mode, inputFormat} = this.state;
    return (
      <Form id='beneficiary-form'>
        <Grid>
          <Row>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight>
              <FormGroup>
                <Label>Title</Label>
                <div>
                  <Radio inline value='MR' defaultChecked name='inline-radio-options'>
                    Mr.
                  </Radio>
                  <Radio inline value='MRS' name='inline-radio-options'>
                    Mrs.
                  </Radio>
                  <Radio inline value='MS' name='inline-radio-options'>
                    Ms.
                  </Radio>
                  <Radio inline value='OTHERS' name='inline-radio-options'>
                    Others
                  </Radio>
                </div>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='firstname'>First Name *</Label>
                <Input type='text' id='firstname' placeholder='First Name' className='required'/>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='middlename'>Middle Name</Label>
                <Input type='text' id='middlename' placeholder='Middle Name'/>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='lastname'>Last Name *</Label>
                <Input type='text' id='lastname' placeholder='Last Name' className='required'/>
              </FormGroup>
            </Col>
            <Col sm={4} xs={6} collapseLeft className='form-border'>
              <FormGroup>
                <Label>Gender</Label>
                <div>
                  <Radio inline value='MALE' defaultChecked name='radio-gender'>
                    Male
                  </Radio>
                  <Radio inline value='FEMALE' name='radio-gender'>
                    Female
                  </Radio>
                </div>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='bendateofbirth'>Date Of Birth *</Label>
                <Input type='text' id='bendateofbirth' placeholder='Date Of Birth' className='datepicker required'/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='bencntryres'>Country Of Residence *</Label>
                <Select id='bencntryres' placeholder='Select a Country' className='required'>
                  <option value='1'>NIGERIA</option>
                  <option value='2'>GHANA</option>
                  <option value='3'>UNITED KINGDOM</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='bennationality'>Nationality *</Label>
                <Select id='bennationality' placeholder='Select a Country' className='required'>
                  <option value='1'>NIGERIA</option>
                  <option value='2'>GHANA</option>
                  <option value='3'>UNITED KINGDOM</option>
                </Select>
              </FormGroup>
            </Col>
          </Row>
          <hr style={{
            borderColor: '#D3D3D3',
            borderWidth: 2,
            marginTop: 15,
            marginBottom: 0,
            width: 100000
          }} className='pull-right'/>
          <br/>
          <Row>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight>
              <Button>Cancel</Button>
            </Col>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight></Col>
            <Col sm={4} xs={6} collapseLeft className='form-border'>
              <Button bsStyle='darkgreen45'>Add New Beneficiary</Button>
            </Col>
          </Row>
        </Grid>
      </Form>
    )
  }
}

class BeneficiaryDetail extends React.Component {

  showBeneficiaryForm() {
    $("#form_id").show("slow");
  }

  render() {
    return (
      <Grid>
        <h4>LIST OF BENEFICIARIES</h4>
        <Row>
          <Table >
            <tbody>
              <tr>
                <td>
                  <strong>ANNA SANCHEZ</strong>
                  <p>anna.sanchez@maxmart.com.
                    <strong>Administrator</strong>
                  </p>
                </td>
                <td width='75'>
                  <Link to='/app/user/settings'><Icon glyph='icon-fontello-cog'/></Link>
                </td>
                <td width='75'>
                  <Link to='/app/user/add'><Icon glyph='icon-fontello-trash'/></Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <Row>
          <Button bsStyle='darkgreen45' onClick={this.showBeneficiaryForm}>Add New Beneficiary</Button>
        </Row>
        <br/>
        <Row>
          <div id="form_id" style={{
            display: "none"
          }}><BeneficiaryForm/></div>
        </Row>
      </Grid>
    )
  }
}

class LegalDetail extends React.Component {

  componentDidMount() {
    $('#idexpirydate').datetimepicker({format: 'DD/MM/YYYY'});
    $('#idtype').select2({placeholder: "Select a Country", allowClear: true});
    $('#cntryaddress').select2({placeholder: "Select a Country", allowClear: true});
  }
  render() {
    //const {date, format, mode, inputFormat} = this.state;
    return (

      <Form id='legal-form'>
        <Grid>
          <Row>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight>
              <FormGroup>
                <Label>Title</Label>
                <div>
                  <Radio inline value='MR' defaultChecked name='inline-radio-options'>
                    Mr.
                  </Radio>
                  <Radio inline value='MRS' name='inline-radio-options'>
                    Mrs.
                  </Radio>
                  <Radio inline value='MS' name='inline-radio-options'>
                    Ms.
                  </Radio>
                  <Radio inline value='OTHERS' name='inline-radio-options'>
                    Others
                  </Radio>
                </div>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='firstname'>Name</Label>
                <Input disabled type='text' id='name' placeholder='Name' className='required'/>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='email'>Email</Label>
                <Input disabled type='email' id='email' placeholder='Email'/>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='houseno'>House No*</Label>
                <Input id='text' id='houseno' placeholder='House No' className='required'/>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='street'>Street*</Label>
                <Input id='text' id='street' placeholder='Street' className='required'/>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='town'>Town/City*</Label>
                <Input id='text' id='town' placeholder='Town' className='required'/>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='stateregion'>State/Region*</Label>
                <Input id='text' id='stateregion' placeholder='State or Region' className='required'/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='cntryaddress'>Country *</Label>
                <Select id='cntryaddress' placeholder='Select a Country'>
                  <option value='1'>NIGERIA</option>
                  <option value='2'>GHANA</option>
                  <option value='3'>UNITED KINGDOM</option>
                </Select>
              </FormGroup>
            </Col>
            <Col sm={4} xs={6} collapseLeft className='form-border'>
              <FormGroup>
                <Label>Address Verification</Label>
                <div>
                  <Radio inline value='YES' name='inline-radio-options'>
                    Yes
                  </Radio>
                  <Radio inline value='NO' name='inline-radio-options'>
                    No
                  </Radio>
                </div>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='phoneno'>Phone Number *</Label>
                <Input type='text' id='phoneno' placeholder='Phone Number' className='required'/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='cntryres'>Type Of ID Document *</Label>
                <Select id='idtype' placeholder='Select a ID Type'>
                  <option value='1'>INTERNATIONAL PASSPORT</option>
                  <option value='2'>VOTER'S CARD</option>
                  <option value='3'>NATIONAL ID</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='documentno'>Document Number *</Label>
                <Input type='text' id='documentno' placeholder='Document Number' className='required'/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='idexpirydate'>Expiry Date *</Label>
                <Input type='text' id='idexpirydate' placeholder='ID Document Expiry Date' className='datepicker required'/>
              </FormGroup>
              <FormGroup>
                <Button bsStyle='darkgreen45'>Add Other Documents</Button>
              </FormGroup>
            </Col>
          </Row>
          <hr style={{
            borderColor: '#D3D3D3',
            borderWidth: 2,
            marginTop: 15,
            marginBottom: 0,
            width: 100000
          }} className='pull-right'/>
          <br/>
          <Row>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight>
              <Button>Cancel</Button>
            </Col>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight></Col>
            <Col sm={4} xs={6} collapseLeft className='form-border'>
              <Button bsStyle='darkgreen45'>Update Contact and IDs</Button>
            </Col>
          </Row>
        </Grid>
      </Form>
    )
  }
}
class BankDetail extends React.Component {
  componentDidMount() {
    $('#bankctry').select2({placeholder: "Select a Country", allowClear: true});
    $('#bankname').select2({placeholder: "Select bank", allowClear: true});
  }

  render() {
    return (
      <Form id='business-form'>
        <Grid>
          <Row>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight>
              <FormGroup >
                <Label htmlFor='bankacctname'>Account Name</Label>
                <Input id='text' id='bankacctname' placeholder='Bank Account Name' className='required'/>
              </FormGroup>

              <FormGroup >
                <Label htmlFor='bankctry'>Country Where Bank is located</Label>
                  <Select id='bankctry' placeholder='Select a Country'>
                    <option value='1'>NIGERIA</option>
                    <option value='2'>GHANA</option>
                    <option value='3'>UNITED KINGDOM</option>
                  </Select>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='bankname'>Bank Name</Label>
                  <Select id='bankname' placeholder='Select Bank'>
                    <option value='1'>NIGERIA</option>
                    <option value='2'>GHANA</option>
                    <option value='3'>UNITED KINGDOM</option>
                  </Select>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='bankacctno'>Account No</Label>
                <Input id='text' id='bankacctno' placeholder='Bank Account No' className='required'/>
              </FormGroup>
            </Col>
            <Col sm={4} xs={6} collapseLeft className='form-border'>
              <FormGroup>
                <Label htmlFor='other detail'>Other detail</Label>
                <Input  type='text' id='apisecret' placeholder='API Secret'/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='bankbvn'>BVN Number (Nigeria)</Label>
                <Input  type='text' id='bankbvn' placeholder='BVN Number (Nigeria)'/>
              </FormGroup>
            </Col>
          </Row>
          <hr style={{borderColor: '#D3D3D3',borderWidth: 2,marginTop: 15,marginBottom: 0,width: 100000}} className='pull-right'/>
          <br/>
          <Row>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight>
              <Button>Cancel</Button>
            </Col>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight></Col>
            <Col sm={4} xs={6} collapseLeft className='form-border'>
              <Button bsStyle='darkgreen45'>Update Bank Details</Button>
            </Col>
          </Row>
        </Grid>
      </Form>
    )
  }
}

class BusinessDetail extends React.Component {

  componentDidMount() {
    $('#idtype').select2({placeholder: "Select a Country", allowClear: true});
    $('#businesstype').select2({placeholder: "Select a business type", allowClear: true});
  }
  render() {
    //const {date, format, mode, inputFormat} = this.state;
    return (

      <Form id='business-form'>
        <Grid>
          <Row>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight>

              <FormGroup >
                <Label htmlFor='businesstype'>Type Of Business</Label>
                <Select id='businesstype' placeholder='Select a business type'>
                  <option value='1'>NIGERIA</option>
                  <option value='2'>GHANA</option>
                  <option value='3'>UNITED KINGDOM</option>
                </Select>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='hasawebsite'>Do you have a web site</Label>
                <div>
                  <Radio inline value='YES' defaultChecked name='hasawebsite'>
                    Yes
                  </Radio>
                  <Radio inline value='NO' name='hasawebsite'>
                    No
                  </Radio>
                </div>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='websiteurl'>Web Site URL</Label>
                <Input id='text' id='websiteurl' placeholder='Web Site URL' className='required'/>
              </FormGroup>
            </Col>
            <Col sm={4} xs={6} collapseLeft className='form-border'>
              <FormGroup>
                <Label htmlFor='apisecret'>API Secret *</Label>
                <Input disabled type='text' id='apisecret' placeholder='API Secret' className='required'/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='apikey'>API Key *</Label>
                <Input disabled type='text' id='apikey' placeholder='API Key' className='required'/>
              </FormGroup>
            </Col>
          </Row>
          <hr style={{borderColor: '#D3D3D3',borderWidth: 2,marginTop: 15,marginBottom: 0,width: 100000}} className='pull-right'/>
          <br/>
          <Row>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight>
              <Button>Cancel</Button>
            </Col>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight></Col>
            <Col sm={4} xs={6} collapseLeft className='form-border'>
              <Button bsStyle='darkgreen45'>Update Business Details</Button>
            </Col>
          </Row>
        </Grid>
      </Form>
    )
  }
}

class CompanyDetail extends React.Component {

  componentDidMount() {
    $('#idtype').select2({placeholder: "Select a Country", allowClear: true});
    $('#cntryhq').select2({placeholder: "Select a Country", allowClear: true});
  }
  render() {
    //const {date, format, mode, inputFormat} = this.state;
    return (

      <Form id='company-form'>
        <Grid>
          <Row>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight>

              <FormGroup >
                <Label htmlFor='legalform'>Legal Form</Label>
                <Input disabled type='text' id='legalform' placeholder='Name' className='required'/>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='corporatename'>Corporate Name</Label>
                <Input disabled type='email' id='email' placeholder='Email'/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='cntryhq'>Country Headquarter *</Label>
                <Select id='cntryhq' placeholder='Select a Country'>
                  <option value='1'>NIGERIA</option>
                  <option value='2'>GHANA</option>
                  <option value='3'>UNITED KINGDOM</option>
                </Select>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='officeadd'>Office Address*</Label>
                <Input id='text' id='officeadd' placeholder='Office Address' className='required'/>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='town'>Town/City*</Label>
                <Input id='text' id='town' placeholder='Town' className='required'/>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='stateregion'>State/Region*</Label>
                <Input id='text' id='stateregion' placeholder='State or Region' className='required'/>
              </FormGroup>

            </Col>
            <Col sm={4} xs={6} collapseLeft className='form-border'>
              <FormGroup>
                <Label>Address Verification</Label>
                <div>
                  <Radio inline value='YES' name='address-validate'>
                    Yes
                  </Radio>
                  <Radio inline value='NO' name='address-validate'>
                    No
                  </Radio>
                </div>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='comregno'>Company Registration Number *</Label>
                <Input type='text' id='comregno' placeholder='Company Registration Number' className='required'/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='comphoneno'>Office Phone Number *</Label>
                <Input type='text' id='comphoneno' placeholder='Office Phone Number' className='required'/>
              </FormGroup>
            </Col>
          </Row>
          <hr style={{
            borderColor: '#D3D3D3',
            borderWidth: 2,
            marginTop: 15,
            marginBottom: 0,
            width: 100000
          }} className='pull-right'/>
          <br/>
          <Row>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight>
              <Button>Cancel</Button>
            </Col>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight></Col>
            <Col sm={4} xs={6} collapseLeft className='form-border'>
              <Button bsStyle='darkgreen45'>Update Company Details</Button>
            </Col>
          </Row>
        </Grid>
      </Form>
    )
  }
}

class PersonDetail extends React.Component {
  componentDidMount() {
    $('#dateofbirth').datetimepicker({format: 'DD/MM/YYYY'});
    $('#cntryres').select2({placeholder: "Select a Country", allowClear: true});
    $('#nationality').select2({placeholder: "Select a Country", allowClear: true});
  }
  render() {
    //const {date, format, mode, inputFormat} = this.state;
    return (

      <Form id='person-form'>
        <Grid>
          <Row>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight>
              <FormGroup>
                <Label>Title</Label>
                <div>
                  <Radio inline value='MR' defaultChecked name='inline-radio-options'>
                    Mr.
                  </Radio>
                  <Radio inline value='MRS' name='inline-radio-options'>
                    Mrs.
                  </Radio>
                  <Radio inline value='MS' name='inline-radio-options'>
                    Ms.
                  </Radio>
                  <Radio inline value='OTHERS' name='inline-radio-options'>
                    Others
                  </Radio>
                </div>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='firstname'>First Name *</Label>
                <Input disabled type='text' id='firstname' placeholder='First Name' className='required'/>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='middlename'>Middle Name</Label>
                <Input disabled type='text' id='middlename' placeholder='Middle Name'/>
              </FormGroup>
              <FormGroup >
                <Label htmlFor='lastname'>Last Name *</Label>
                <Input disabled type='text' id='lastname' placeholder='Last Name' className='required'/>
              </FormGroup>
            </Col>
            <Col sm={4} xs={6} collapseLeft className='form-border'>
              <FormGroup>
                <Label>Gender</Label>
                <div>
                  <Radio inline value='MALE' defaultChecked name='gender'>
                    Male
                  </Radio>
                  <Radio inline value='FEMALE' name='gender'>
                    Female
                  </Radio>
                </div>
              </FormGroup>
              <FormGroup>
                <Label>Date Of Birth *</Label>
                <Input type='text' id='dateofbirth' placeholder='Date Of Birth' className='datepicker required'/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='cntryres'>Country Of Residence *</Label>
                <Select id='cntryres' placeholder='Select a Country' className='required'>
                  <option value='1'>NIGERIA</option>
                  <option value='2'>GHANA</option>
                  <option value='3'>UNITED KINGDOM</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='nationality'>Nationality *</Label>
                <Select id='nationality' placeholder='Select a Country' className='required'>
                  <option value='1'>NIGERIA</option>
                  <option value='2'>GHANA</option>
                  <option value='3'>UNITED KINGDOM</option>
                </Select>
              </FormGroup>
            </Col>
          </Row>
          <hr style={{
            borderColor: '#D3D3D3',
            borderWidth: 2,
            marginTop: 15,
            marginBottom: 0,
            width: 100000
          }} className='pull-right'/>
          <br/>
          <Row>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight>
              <Button>Cancel</Button>
            </Col>
            <Col sm={4} xs={12} collapseLeft xsOnlyCollapseRight></Col>
            <Col sm={4} xs={6} collapseLeft className='form-border'>
              <Button bsStyle='darkgreen45'>Update Personal Detail</Button>
            </Col>
          </Row>
        </Grid>
      </Form>
    )
  }
}

class Body extends React.Component {
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <h3>INFORMATION</h3>
            <h4>Account/Information</h4>
          </Row>
          <hr style={{
            borderColor: '#D3D3D3',
            borderWidth: 2,
            marginTop: 15,
            marginBottom: 0,
            width: 10000
          }}/>

        </Grid>
        <Grid>
          <Col xs={4}>
            PLEASE COMPLETE YOUR PERSONAL AND BANK DETAILS
            <p>To complete your profile, please provide us with the information requested. This information is mandatory in order to process your file.</p>
            <br/>
            <p>Important: Regarding any correspondence with our services, please be sure to mention your merchant account reference no. 26102790. HiPay Mobile contact: support@xtremepay.com</p>
            <br>
              <Button bsStyle='darkgreen45'>Upload Your Documents</Button>
            </br>
          </Col>
          <Col xs={8}>
            <Accordian>
              <AccordianPane active>
                <AccordianTitle>PERSONAL DETAILS</AccordianTitle>
                <AccordianContent>
                  <PersonDetail/>
                </AccordianContent>
              </AccordianPane>
              <AccordianPane>
                <AccordianTitle>LEGAL DETAILS</AccordianTitle>
                <AccordianContent>
                  <LegalDetail/>
                </AccordianContent>
              </AccordianPane>
              <AccordianPane>
                <AccordianTitle>BENEFICIAL OWNER</AccordianTitle>
                <AccordianContent>
                  <BeneficiaryDetail/>
                </AccordianContent>
              </AccordianPane>
              <AccordianPane>
                <AccordianTitle>COMPANY</AccordianTitle>
                <AccordianContent>
                  <CompanyDetail/>
                </AccordianContent>
              </AccordianPane>
              <AccordianPane>
                <AccordianTitle>BUSINESS ACTIVITY</AccordianTitle>
                <AccordianContent>
                  <BusinessDetail/>
                </AccordianContent>
              </AccordianPane>
              <AccordianPane>
                <AccordianTitle>BANK DETAILS</AccordianTitle>
                <AccordianContent>
                  <BankDetail/>
                </AccordianContent>
              </AccordianPane>
            </Accordian>
          </Col>
        </Grid>
      </Container>
    );
  }
}

@SidebarMixin
export default class extends React.Component {
  render() {
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
