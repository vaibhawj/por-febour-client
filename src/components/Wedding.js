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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec urna aliquam, ornare eros vel, malesuada lorem. Nullam faucibus lorem at eros consectetur lobortis. Maecenas nec nibh congue, placerat sem id, rutrum velit. Phasellus porta enim at facilisis condimentum. Maecenas pharetra dolor vel elit tempor pellentesque sed sed eros. Aenean vitae mauris tincidunt, imperdiet orci semper, rhoncus ligula. Vivamus scelerisque.</p>
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