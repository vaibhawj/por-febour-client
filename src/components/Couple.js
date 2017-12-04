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
                        <p>They met in College 10 years back and hit it off pretty fast</p>
                        <p>Girl is nerdy 🤓 . But, she would rather boast off her Running feats 🏃🏻‍ and sports medals than her high scores. She is moody.</p>
                        <p>Boy has always been looked upon as sincere and silent type. But, she knows the truth 😈 . He is foody.</p>
                        <p>He tries really hard keeping up with her mood swings. In return, she gives the good company in his food swings even though she is a Calorie calculator.</p>
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
