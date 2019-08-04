import React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm, change } from 'redux-form';
import { Button, Card, CardBody, Col, FormGroup } from 'reactstrap';
import ReduxFormInput from '../../components/ReduxFormInput';
import { FaChevronRight } from 'react-icons/fa';
import validate from './validate';
import ReduxFormSelect from '../../components/ReduxFormSelect';
import { Gender, CurrentDate } from '../../config/constants';
import { name, mobile } from '../../lib/normalize';
import '../../styles/reduxformjest.css';

interface Props { };

export const PersonalDetailForm: React.FC<Props & InjectedFormProps<{}, Props>> = (props: any) => {
  const { handleSubmit } = props;

  const handleChange = (event: any) => {
    var birthYear = event.target.value.slice(0, 4);
    var currentYear: any = CurrentDate.slice(0, 4);
    var userAge = currentYear - birthYear;
    props.dispatch(change('user', 'userAge', userAge));
  }
  return (
    <form onSubmit={handleSubmit} noValidate={true}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
            <FormGroup row={true}>
              <Col xs="12" lg="12">
                <Field
                  name="userName"
                  type="text"
                  component={ReduxFormInput}
                  label="Name *"
                  placeHolder="Enter User Name"
                  normalize={name}
                />
              </Col>
            </FormGroup>
            <FormGroup row={true}>
              <Col xs="12" lg="6">
                <Field
                  name="userDOB"
                  type="date"
                  component={ReduxFormInput}
                  label="DOB *"
                  placeHolder="Enter Date of Birth"
                  onChange={handleChange}
                  maxDate={CurrentDate}
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="userAge"
                  type="text"
                  component={ReduxFormInput}
                  label="Age *"
                  placeHolder="Enter User Age"
                />
              </Col>
            </FormGroup>

            <FormGroup row={true}>
              <Col xs="12" lg="6">
                <Field
                  name="userGender"
                  type="text"
                  datas={Gender}
                  component={ReduxFormSelect}
                  label="Gender *"
                  placeHolder="Select Gender"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="userMobileNumber"
                  type="text"
                  component={ReduxFormInput}
                  label="Mobile No *"
                  placeHolder="Enter Mobile Number"
                  normalize={mobile}
                />
              </Col>
            </FormGroup>
            <FormGroup row={true}>
              <Col xs="12" lg="12">
                <Field
                  name="userAddress"
                  type="textarea"
                  component={ReduxFormInput}
                  label="Address *"
                  placeHolder="Enter Address"
                />
              </Col>
            </FormGroup>
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button
              className="float-right"
              color="success"
              type="submit"
              style={{ marginRight: '10px' }}
            >
              Next &nbsp;
              <FaChevronRight className="button-padding" size={18} />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
}

const form = reduxForm<{}, Props>({
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  form: 'user',
  validate,
})(PersonalDetailForm);

export default connect(null)(form);