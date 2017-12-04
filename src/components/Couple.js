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
                        <p>It all started 10 years back at the dumbest phase of life and career. They never knew it will go this far. And marriage whooaa <span role="img" aria-label="">😱</span>&nbsp; they never thought of it. All they like was each others company. After getting settled and luckily in the same city <img src="img/city.png" className="cityIcon" alt="Bengaluru" />, the destiny wrote a new chapter in their life.</p>
                        <p>Girl is studious <span role="img" aria-label="">🤓</span>&nbsp; But she would rather boast off her running feats <span role="img" aria-label="">🏃🏻‍</span>&nbsp;and sports medals than her high scores. She is moody like a princess <span role="img" aria-label="">👸</span>&nbsp; and the unplanned dates make her happy. She loves keeping herself fit and is fond of watches and shoes.</p>
                        <p>Boy has always been looked upon as a sincere and silent type. He likes to imagine himself as Sherlock. Well, his childhood dream was to be detective <span role="img" aria-label="">🤠</span>&nbsp; He loves Badminton and swimming. I have never seen him bored. He is foody and has a highly adaptable taste <span role="img" aria-label="">😋</span></p>
                        <p>Besides being so different both of them love travelling together, Watching Action and SciFi movies and sometimes doing absolutely nothing. They love trying different cuisines. Irish Coffee (like real Irish <span role="img" aria-label="">😉</span>) with Crepe is something they love always. More than a couple they are buddies <span role="img" aria-label="">👫</span></p>
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
