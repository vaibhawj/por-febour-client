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
                        <p>It all started 10 years back at the dumbest phase of life and career. They never knew it will go this far. And marriage whooaa they never thought of it. All they like was each others company. After getting settled and luckily in the same city the destiny wrote a new chapter in their life. Having travelled together a lot they love trying different cuisines. Irish Coffee with Crepe is something they love always.</p>
                        <p>Girl is studious <span role="img" aria-label="">🤓</span>&nbsp; But she would rather boast off her running feats and sports medals than her high scores. She is damn moody man. Sometime she will just call for a cup of tea and then donno where and all we roam spending the whole day. She loves keeping her fit and having watches and shoes.</p>
                        <p>Boy has always been looked upon as a sincere and silent type. He likes to imagine himself as Sherlock. Well his childhood dream was to be detective <span role="img" aria-label="">🤠</span>&nbsp; He loves Badminton and swimming. Ahhhaaa I have never seen him bored. He is foody and has a highly adaptable taste.</p>
                        <p>Besides being so different both of them love travelling together, Watching Action and SciFi movies, sometimes doing absolutely nothing and oo Yea trying different foods together. More than a couple they are buddies.</p>
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
