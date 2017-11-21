import React from 'react';
import TitleBar from './TitleBar';
import NavBar from './NavBar';
import './style.css';
import Sticky from 'react-stickynode';

const Header = ({ activeTab }) => {
    return (
        <Sticky enabled={true} top={0} innerZ={5}>
            <div className="row"><TitleBar /></div>
            <NavBar {...this.props} />
        </Sticky>
    )
}

export default Header;
