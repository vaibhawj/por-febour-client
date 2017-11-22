import {
    ACTION_SET_ACTIVE_TAB, ACTION_SET_FIELD, ACTION_SUBMIT_RSVP,
    TAB_COUPLE, ACTION_ALERT_DISMISS, ACTION_SHOW_ALERT
} from '../constants';

const initialState = {
    activeTab: TAB_COUPLE,
    rsvp: {
        name: '',
        email: '',
        phone: '+91',
        isComing: '',
        msg: '',
        alertVisible: false,
        alertMsg: '',
        alertType: '',
        hasOldRsvp: false,
        _rev: '',
        isLoading: false
    }
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
                rsvp:{
                    ...state.rsvp,
                    isLoading: true
                }
            }

        case ACTION_ALERT_DISMISS:
            return {
                ...state,
                alertVisible: false,
                alertMsg: '',
                alertType: ''
            }

        case ACTION_SHOW_ALERT:
           let newRsvp = action.alertType==='success'? initialState.rsvp : state.rsvp;
            return {
                ...state,
                alertVisible: true,
                alertType: action.alertType,
                alertMsg: action.alertMsg,
                rsvp: {
                    ...newRsvp,
                    isLoading: false
                }
            }

        default: return state;
    }
}



export default Reducer;