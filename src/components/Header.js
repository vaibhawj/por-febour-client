import React from 'react';
import { NavLink } from 'react-router-dom';
import TitleBar from './TitleBar';
import './style.css';
import { connect } from 'react-redux';
import { TAB_COUPLE, TAB_WEDDING, TAB_RSVP, TAB_LOGISTICS, TAB_PHOTOS } from '../constants';

const activeTabClass = 'rounded active';
const defaultTabClass = 'rounded';

const HeaderComp = ({ activeTab }) => {
    return (
        <div>
            <div className="row"><TitleBar /></div>

            <ul className="nav nav-tabs" role="tablist">
                <li className={activeTab === TAB_COUPLE ? activeTabClass : defaultTabClass}><NavLink activeClassName="active" to='/couple'>
                    <img src="img/couple.png" className="tabIcon" alt="couple"/><span className="hidden-xs">Our Story</span></NavLink></li>
                
                <li className={activeTab === TAB_WEDDING ? activeTabClass : defaultTabClass}><NavLink activeClassName="active" to='/wedding'>
                    <img src="img/wedding.png" className="tabIcon" alt="wedding"/><span className="hidden-xs">The Wedding</span></NavLink></li>

                <li className={activeTab === TAB_PHOTOS ? activeTabClass : defaultTabClass}><NavLink activeClassName="active" to='/photos'>
                    <img src="img/photos.png" className="tabIcon" alt="photos"/><span className="hidden-xs"> Photos</span></NavLink></li>

                <li className={activeTab === TAB_RSVP ? activeTabClass : defaultTabClass}><NavLink activeClassName="active" to='/rsvp'>
                    <img src="img/rsvp.png" className="tabIcon" alt="rsvp"/><span className="hidden-xs"> RSVP</span></NavLink></li>
                
                <li className={activeTab === TAB_LOGISTICS ? activeTabClass : defaultTabClass}><NavLink activeClassName="active" to='/logistics'>
                    <img src="img/logistics.png" className="tabIcon" alt="logistics"/><span className="hidden-xs">Logistics</span></NavLink></li>
            </ul>
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
