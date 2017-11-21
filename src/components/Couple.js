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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec urna aliquam, ornare eros vel, malesuada lorem. Nullam faucibus lorem at eros consectetur lobortis. Maecenas nec nibh congue, placerat sem id, rutrum velit. Phasellus porta enim at facilisis condimentum. Maecenas pharetra dolor vel elit tempor pellentesque sed sed eros. Aenean vitae mauris tincidunt, imperdiet orci semper, rhoncus ligula. Vivamus scelerisque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec urna aliquam, ornare eros vel, malesuada lorem. Nullam faucibus lorem at eros consectetur lobortis. Maecenas nec nibh congue, placerat sem id, rutrum velit. Phasellus porta enim at facilisis condimentum. Maecenas pharetra dolor vel elit tempor pellentesque sed sed eros. Aenean vitae mauris tincidunt, imperdiet orci semper, rhoncus ligula. Vivamus scelerisque.</p>
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
