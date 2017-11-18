import React from 'react';
import {connect} from 'react-redux';
import {ACTION_SET_ACTIVE_TAB, TAB_LOGISTICS} from '../constants';

class LogisticsComp extends React.Component {

    componentWillMount(){
        this.props.setRoute(TAB_LOGISTICS);
    }

    render(){
        return (
            <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                <h3>Logistics</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec urna aliquam, ornare eros vel, malesuada lorem. Nullam faucibus lorem at eros consectetur lobortis. Maecenas nec nibh congue, placerat sem id, rutrum velit. Phasellus porta enim at facilisis condimentum. Maecenas pharetra dolor vel elit tempor pellentesque sed sed eros. Aenean vitae mauris tincidunt, imperdiet orci semper, rhoncus ligula. Vivamus scelerisque.</p>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return ({});
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setRoute:(tab)=> dispatch({ type: ACTION_SET_ACTIVE_TAB, tab })
    })

}

const Logistics = connect(mapStateToProps, mapDispatchToProps)(LogisticsComp);

export default Logistics;