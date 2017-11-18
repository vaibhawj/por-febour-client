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


class RSVPComp extends React.Component {

    componentWillMount() {
        this.props.setRoute(TAB_RSVP);
    }

    render() {
        if (this.props.alertVisible && this.props.alertType==='success') {
            setTimeout(function (self) {
                self.props.handleAlertDismiss();
            }, 3000, this);
        }

        return (
            <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                <form>
                    <span >Please complete the form below to let us know if you will be joining us in Bengaluru</span><br />
                    <br />

                    <Collapse in={this.props.alertVisible}>
                        <Alert bsStyle={this.props.alertType === '' ? 'info' : this.props.alertType} onDismiss={this.props.handleAlertDismiss}> {this.props.alertMsg}
                        </Alert>
                    </Collapse>

                    <FormGroup
                        controlId="formPhone"
                        validationState={this.props.getPhoneValidationState()}>

                        <InputGroup>
                            <InputGroup.Addon><Glyphicon glyph="earphone" /></InputGroup.Addon>
                            <FormControl
                                type="phone"
                                value={this.props.phone}
                                placeholder="Enter phone"
                                onChange={this.props.handlePhoneChange}
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

                    <Button bsStyle="primary" onClick={
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
    if (phone === '') return null;
    return phone.match(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/) ?
        'success' : 'error';
}

const emailValidationState = (email) => {
    if (email === '') return null;
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ?
        'success' : 'error';
}

const mapStateToProps = (state) => {
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
        isLoading: state.rsvp.isLoading
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
const saveRsvpUrl = "https://api-rsvp.herokuapp.com/saveRsvp/";
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

        submitRsvp(dispatch, rsvp);
    } else {
        dispatch(actionShowAlert('Except Email other fields are mandatory', 'warning'));
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setRoute: (tab) => dispatch({ type: ACTION_SET_ACTIVE_TAB, tab }),
        handleEmailChange: (e) => dispatch({ type: ACTION_SET_FIELD, fieldName: 'email', value: e.target.value }),
        handleNameChange: (e) => dispatch({ type: ACTION_SET_FIELD, fieldName: 'name', value: e.target.value }),
        handlePhoneChange: (e) => dispatch({ type: ACTION_SET_FIELD, fieldName: 'phone', value: e.target.value }),
        handlePlanChange: (value) => dispatch({ type: ACTION_SET_FIELD, fieldName: 'isComing', value }),
        handleMsgChange: (e) => dispatch({ type: ACTION_SET_FIELD, fieldName: 'msg', value: e.target.value }),
        handleSubmit: (rsvp) => callSaveRsvp(dispatch, rsvp),
        handleAlertDismiss: () => dispatch({ type: ACTION_ALERT_DISMISS })
    })

}

const RSVP = connect(mapStateToProps, mapDispatchToProps)(RSVPComp);

export default RSVP;
