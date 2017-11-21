import React from 'react';
import TitleBar from './TitleBar';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import './style.css';
import Sticky from 'react-stickynode';

const HeaderComp = ({ activeTab }) => {
    return (
        <Sticky enabled={true} top={0} innerZ={5}>
            <div className="row"><TitleBar /></div>
            <NavBar {...this.props} />
        </Sticky>
    )
}

const mapStateToProps = (state) => {
    return ({
        activeTab: state.activeTab
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({

    })

}

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComp);

export default Header;
