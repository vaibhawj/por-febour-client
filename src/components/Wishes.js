import React from 'react';
import { connect } from 'react-redux';
import { ACTION_SET_ACTIVE_TAB, TAB_WISHES } from '../constants';
import FacebookProvider, { Comments } from 'react-facebook';

const FBAppId = "134669920573096";

function checkFbIsRendered() {
    if (document.getElementsByClassName('fb-comments') &&
        document.getElementsByClassName('fb-comments')[0] &&
        document.getElementsByClassName('fb-comments')[0].attributes &&
        document.getElementsByClassName('fb-comments')[0].attributes['fb-xfbml-state'] &&
        document.getElementsByClassName('fb-comments')[0].attributes['fb-xfbml-state'].value === 'rendered') {
        document.getElementById('fb--spinner').style.display = 'none';
    } else {
        window.requestAnimationFrame(checkFbIsRendered);
    }
}

class WishesComp extends React.Component {

    componentWillMount() {
        this.props.setRoute(TAB_WISHES);
    }

    render() {
        return (
            <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                <p>Put your lovely wishes here. We will surely read them after honeymoon <span role="img" aria-label="">😍</span></p>
                <span id="fb--spinner"><img src="img/fb-spinner.gif" className="fb--spinner" alt="Loading" /></span>
                <FacebookProvider appId={FBAppId}>
                    <Comments href="https://sush-and-vaibhaw.herokuapp.com/wishes" />
                </FacebookProvider>
                {checkFbIsRendered()}
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