import React from 'react';
import { connect } from 'react-redux';
import { ACTION_SET_ACTIVE_TAB, TAB_WISHES, ACTION_CHANGE_KEY } from '../constants';
import FacebookProvider, { Comments } from 'react-facebook';


class WishesComp extends React.Component {

    componentWillMount() {
        this.props.setRoute(TAB_WISHES);

        const script = document.createElement("script");
        script.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.11';
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                <div id="fb-root"></div>
                <div className="fb-comments" data-href="https://sush-and-vaibhaw.herokuapp.com/wishes" data-numposts="5"></div>
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

const Wishes = connect(mapStateToProps, mapDispatchToProps)(WishesComp);

export default Wishes;