import {
    ACTION_SET_ACTIVE_TAB, ACTION_SET_FIELD, ACTION_SUBMIT_RSVP,
    TAB_COUPLE, ACTION_ALERT_DISMISS, ACTION_SHOW_ALERT, ACTION_INIT
} from '../constants';

const initialState = {
    activeTab: TAB_COUPLE,
    rsvp: {
        name: '',
        email: '',
        phone: '+91',
        isComing: '',
        msg: ''
    },
    alertVisible: false,
    alertMsg: '',
    alertType: '',
    isLoading: false
}




const Reducer = (state = initialState, action) => {
    //console.log(state);
    switch (action.type) {
        case ACTION_SET_ACTIVE_TAB: return {
            ...state,
            activeTab: action.tab
        }

        case ACTION_SET_FIELD: return {
            ...state,
            rsvp: {
                ...state.rsvp,
                [action.fieldName]: action.value
            }
        }

        case ACTION_SUBMIT_RSVP:
            return {
                ...state,
                isLoading: true
            }

        case ACTION_ALERT_DISMISS:
            return {
                ...state,
                alertVisible: false,
                alertMsg: '',
                alertType: ''
            }

        case ACTION_SHOW_ALERT:
            return {
                ...state,
                alertVisible: true,
                alertType: action.alertType,
                alertMsg: action.alertMsg,
                isLoading: false
            }

        case ACTION_INIT:
            return {
                ...state,
                rsvp: {
                    ...initialState.rsvp
                }
            }

        default: return state;
    }
}



export default Reducer;