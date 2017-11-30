import React from 'react';
import { connect } from 'react-redux';
import { ACTION_SET_ACTIVE_TAB, TAB_WISHES } from '../constants';
import FacebookProvider, { Comments } from 'react-facebook';

const FBAppId = "134669920573096";

window.onload = function () {
    if(window.FB && window.FB.Event) {
        window.FB.Event.subscribe('xfbml.render', function (response) {
            document.getElementById('fb-loader').style.display = 'none';
        });
    } else {
        document.getElementById('fb-loader').style.display = 'none';
    }
};

class WishesComp extends React.Component {

    componentWillMount() {
        this.props.setRoute(TAB_WISHES);
    }

    render() {
        return (
            <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                <span id="fb-loader" style={{marginLeft: '45%'}}><img src="img/fb-spinner.gif" className="tabIcon" alt="Loading..." /></span>
                <FacebookProvider appId={ FBAppId }>
                    <Comments href="https://sush-and-vaibhaw.herokuapp.com/wishes" />
                </FacebookProvider>
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