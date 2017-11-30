import React from 'react';
import CoupleCarousel from './CoupleCarousel';
import { connect } from 'react-redux';
import { ACTION_SET_ACTIVE_TAB, TAB_COUPLE } from '../constants'

class CoupleComp extends React.Component {

    componentWillMount() {
        this.props.setRoute(TAB_COUPLE);
    }

    render() {
        return (
            <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <CoupleCarousel />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <p>Thank you for visiting our wedding website. We are truly blessed in every sense to have such a wonderful family and friends who have been so supportive throughout our lives. We love you all dearly for being there with us at each step and we can't wait to share our special day with you. We hope that all the information you will need is provided on our wed-app. Please bless us with your gracious presence or comments on our wed-app if you wont be able to join us. Hope to see you there!</p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return ({});
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setRoute: (tab) => dispatch({ type: ACTION_SET_ACTIVE_TAB, tab })
    })
}

const Couple = connect(mapStateToProps, mapDispatchToProps)(CoupleComp);

export default Couple;
