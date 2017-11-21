import React from 'react';
import TitleBar from './TitleBar';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import './style.css';

const HeaderComp = ({ activeTab }) => {
    return (
        <div>
            <div className="row"><TitleBar /></div>
            <NavBar {...this.props} />
        </div>
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
