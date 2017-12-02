import React from 'react';
import {
    Button, FormGroup, FormControl, ButtonToolbar, ToggleButton,
    ToggleButtonGroup, Glyphicon, InputGroup, Alert, Collapse
} from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    ACTION_SET_ACTIVE_TAB, ACTION_SET_FIELD, ACTION_SUBMIT_RSVP,
    TAB_RSVP, ACTION_ALERT_DISMISS, ACTION_SHOW_ALERT
} from '../constants';
import Phone from 'react-phone-input';
import { PhoneNumberUtil } from 'google-libphonenumber';

const saveRsvpUrl = "https://api-rsvp.herokuapp.com/saveRsvp/";

class RSVPComp extends React.Component {

    componentWillMount() {
        this.props.setRoute(TAB_RSVP);
    }

    render() {
        if (this.props.alertVisible && this.props.alertType === 'success') {
            setTimeout(function (self) {
                self.props.handleAlertDismiss(self.props.alertType);
            }, 3000, this);
        }

        return (
            <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                <form>
                    <span><p>How about letting us know your plan?! It will help us plan better 🙂</p></span>
                    <br />

                    <Collapse in={this.props.alertVisible}>
                        <Alert bsStyle={this.props.alertType === '' ? 'info' : this.props.alertType} onDismiss={() => this.props.handleAlertDismiss(this.props.alertType)}> {this.props.alertMsg}
                        </Alert>
                    </Collapse>

                    <FormGroup
                        controlId="formPhone"
                        validationState={this.props.getPhoneValidationState()}>

                        <InputGroup>
                            <InputGroup.Addon><Glyphicon glyph="earphone" /></InputGroup.Addon>
                            <Phone key = {this.props.key}
                                defaultCountry={'in'} onChange={this.props.handlePhoneChange} value={this.props.phone}
                            />
                        </InputGroup>
                        <FormControl.Feedback />
                    </FormGroup>

                    <FormGroup
                        controlId="formName"
                        validationState={this.props.getNameValidationState()}>

                        <InputGroup>
                            <InputGroup.Addon><Glyphicon glyph="user" /></InputGroup.Addon>
                            <FormControl
                                type="text"
                                value={this.props.name}
                                placeholder="Enter name"
                                onChange={this.props.handleNameChange}
                            />
                            <FormControl.Feedback />
                        </InputGroup>
                    </FormGroup>

                    <FormGroup
                        controlId="formEmail"
                        validationState={this.props.getEmailValidationState()}>

                        <InputGroup>
                            <InputGroup.Addon><Glyphicon glyph="envelope" /></InputGroup.Addon>
                            <FormControl
                                type="email"
                                value={this.props.email}
                                placeholder="Enter email"
                                onChange={this.props.handleEmailChange}
                            />
                        </InputGroup>
                        <FormControl.Feedback />
                    </FormGroup>

                    <FormGroup>
                        <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name="options" onChange={(value) => this.props.handlePlanChange(value)}
                                defaultValue={this.props.isComing} >
                                <ToggleButton value="coming" checked={this.props.isComing === 'coming'}>Coming</ToggleButton>
                                <ToggleButton value="not-coming" checked={this.props.isComing === 'not-coming'}>Not coming</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </FormGroup>

                    <Collapse in={this.props.isComing !== ''}>
                        <FormGroup>
                            <FormControl componentClass="textarea" value={this.props.msg}
                                onChange={this.props.handleMsgChange}
                                placeholder={
                                    this.props.isComing === 'coming' ? "Cool! Tell us your tentative plan or anything you wish to tell"
                                        : "Ohh! Could you please tell us why?"
                                }>
                            </FormControl>
                        </FormGroup>

                    </Collapse>

                    <div className="rsvpButtons">
                        <Button className="submitButton"
                            bsStyle="primary" onClick={
                                (e) => {
                                    e.preventDefault(); this.props.handleSubmit({
                                        name: this.props.name,
                                        phone: this.props.phone,
                                        email: this.props.email,
                                        isComing: this.props.isComing,
                                        msg: this.props.msg
                                    })
                                }} disabled={this.props.isLoading} >
                            {this.props.isLoading && <Glyphicon glyph="refresh" className="spinning" />}
                            {this.props.isLoading ? 'Saving' : 'Submit'} </Button>
                    </div>
                </form>
            </div>
        );
    }
}

const nameValidationState = (name) => {
    const length = name.length;
    if (length > 3) return 'success';
    else if (length > 1) return 'warning';
    else if (length > 0) return 'error';
}

const phoneValidationState = (phone) => {
    if (phone === '+91') return null;
    let valid = false;
    try {
        const phoneUtil = PhoneNumberUtil.getInstance();
        valid = phoneUtil.isValidNumber(phoneUtil.parse(phone));
    } catch (e) {
        valid = false;
    }
    return valid ? 'success' : 'error';
}

const emailValidationState = (email) => {
    if (email === '') return null;
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ?
        'success' : 'error';
}

const mapStateToProps = (state, ownProps) => {
    //console.log(ownProps);
    return ({
        name: state.rsvp.name,
        email: state.rsvp.email,
        phone: state.rsvp.phone,
        isComing: state.rsvp.isComing,
        msg: state.rsvp.msg,
        getNameValidationState: () => {
            return nameValidationState(state.rsvp.name);
        },
        getEmailValidationState: () => {
            return emailValidationState(state.rsvp.email);
        },
        getPhoneValidationState: () => {
            return phoneValidationState(state.rsvp.phone);
        },

        alertVisible: state.alertVisible,
        alertType: state.alertType,
        alertMsg: state.alertMsg,
        isLoading: state.isLoading,
        key: state.key
    })
}

const actionShowAlert = (alertMsg, alertType) => {
    return {
        type: ACTION_SHOW_ALERT,
        alertVisible: true,
        alertMsg,
        alertType
    }
}

const submitRsvp = async (dispatch, rsvp) => {

    let action = await axios.post(saveRsvpUrl, {
        "name": rsvp.name,
        "phone": rsvp.phone,
        "email": rsvp.email,
        "isComing": rsvp.isComing,
        "msg": rsvp.msg
    })
        .then((res) => {
            return actionShowAlert('Saved successfully', 'success');
        })
        .catch((error) => {
            console.log(error);
            return actionShowAlert('Error!', 'danger');
        })
    dispatch(action);
}

const callSaveRsvp = (dispatch, rsvp) => {
    if (phoneValidationState(rsvp.phone) === 'success' && emailValidationState(rsvp.email) !== 'error'
        && nameValidationState(rsvp.name) === 'success' && rsvp.isComing !== '') {

        dispatch({ type: ACTION_SUBMIT_RSVP });

        submitRsvp(dispatch, { ...rsvp, phone: rsvp.phone.substring(1) });
    } else {
        dispatch(actionShowAlert('Except Email other fields are mandatory', 'warning'));
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setRoute: (tab) => dispatch({ type: ACTION_SET_ACTIVE_TAB, tab }),
        handleEmailChange: (e) => dispatch({ type: ACTION_SET_FIELD, fieldName: 'email', value: e.target.value }),
        handleNameChange: (e) => dispatch({ type: ACTION_SET_FIELD, fieldName: 'name', value: e.target.value }),
        handlePhoneChange: (value) => dispatch({ type: ACTION_SET_FIELD, fieldName: 'phone', value }),
        handlePlanChange: (value) => dispatch({ type: ACTION_SET_FIELD, fieldName: 'isComing', value }),
        handleMsgChange: (e) => dispatch({ type: ACTION_SET_FIELD, fieldName: 'msg', value: e.target.value }),
        handleSubmit: (rsvp) => callSaveRsvp(dispatch, rsvp),
        handleAlertDismiss: (alertType) => dispatch({ type: ACTION_ALERT_DISMISS, alertType })
    })

}

const RSVP = connect(mapStateToProps, mapDispatchToProps)(RSVPComp);

export default RSVP;
