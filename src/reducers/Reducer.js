import {
    ACTION_SET_ACTIVE_TAB, ACTION_SET_FIELD, ACTION_SUBMIT_RSVP,
    TAB_COUPLE, ACTION_ALERT_DISMISS, ACTION_SHOW_ALERT, ACTION_INITIALIZE_RSVP,
    ACTION_CHANGE_KEY
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
                isLoading: true,
                alertVisible: false,
                alertMsg: '',
                alertType: ''
            }

        case ACTION_ALERT_DISMISS:
            const newRsvp = action.alertType === 'success' ? initialState.rsvp : state.rsvp;

            return {
                ...state,
                rsvp: {
                    ...newRsvp
                },
                alertVisible: false,
                alertMsg: '',
                alertType: '',
                key: Math.random()
            }

        case ACTION_SHOW_ALERT:
            return {
                ...state,
                alertVisible: true,
                alertType: action.alertType,
                alertMsg: action.alertMsg,
                isLoading: false
            }

        case ACTION_INITIALIZE_RSVP:
            return {
                ...state,
                rsvp: {
                    ...initialState.rsvp
                }
            }

        case ACTION_CHANGE_KEY:
            return {
                ...state,
                key: Math.random()
            }

        default: return state;
    }
}



export default Reducer;