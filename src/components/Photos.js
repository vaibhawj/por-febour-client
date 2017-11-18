import React from 'react';
import { connect } from 'react-redux';
import { ACTION_SET_ACTIVE_TAB, TAB_PHOTOS } from '../constants';


class PhotosComp extends React.Component {

    componentWillMount() {
        this.props.setRoute(TAB_PHOTOS);
    }

    render() {
        return (
            <div style={{ marginLeft: '2%', marginRight: '2%' }}>
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

const Photos = connect(mapStateToProps, mapDispatchToProps)(PhotosComp);

export default Photos;