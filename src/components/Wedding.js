import React from 'react';
import { connect } from 'react-redux';
import { ACTION_SET_ACTIVE_TAB, TAB_WEDDING } from '../constants'

class WeddingComp extends React.Component {

    componentWillMount() {
        this.props.setRoute(TAB_WEDDING);
    }

    render() {
        return (
            <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                <p>Watch this space for the latest uploads from events. Yeah, let's hope for that <span role="img" aria-label="">😎</span></p>
                <p>If you happen to have some nice clicks, Post em (as public post) on Instagram with #sushGotVibe and they will appear here.</p>
                <ul className="juicer-feed" data-feed-id="vaibhawj"></ul>
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

const Wedding = connect(mapStateToProps, mapDispatchToProps)(WeddingComp);

export default Wedding;