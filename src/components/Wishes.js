import React from 'react';
import { connect } from 'react-redux';
import { ACTION_SET_ACTIVE_TAB, TAB_WISHES, ACTION_CHANGE_KEY } from '../constants';
import FacebookProvider, { Comments } from 'react-facebook';


class WishesComp extends React.Component {

    componentWillMount() {
        this.props.setRoute(TAB_WISHES);
    }

    render() {
        return (
            <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                <FacebookProvider appId="134669920573096">
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