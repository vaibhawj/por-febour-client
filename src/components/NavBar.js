import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { TAB_COUPLE, TAB_WEDDING, TAB_RSVP, TAB_LOGISTICS, TAB_WISHES } from '../constants';

const activeTabClass = 'rounded active';
const defaultTabClass = 'rounded';

const NavBar = ({ activeTab }) => {
    return (
        <ul className="nav nav-tabs" role="tablist" id="nav">
            <li className={activeTab === TAB_COUPLE ? activeTabClass : defaultTabClass}>
                <NavLink activeClassName="active" to='/couple'>
                    <img src="img/couple.png" className="tabIcon" alt="couple" /><span className="hidden-xs">Our Story</span>
                </NavLink>
            </li>

            <li className={activeTab === TAB_WEDDING ? activeTabClass : defaultTabClass}>
                <NavLink activeClassName="active" to='/wedding'>
                    <img src="img/wedding.png" className="tabIcon" alt="wedding" /><span className="hidden-xs"><i className="fa fa-hashtag"></i> Wedding</span>
                </NavLink>
            </li>

            <li className={activeTab === TAB_WISHES ? activeTabClass : defaultTabClass}>
                <NavLink activeClassName="active" to='/wishes'>
                    <img src="img/wishes.png" className="tabIcon" alt="wishes" /><span className="hidden-xs"> Wishes</span>
                </NavLink>
            </li>

            <li className={activeTab === TAB_RSVP ? activeTabClass : defaultTabClass}>
                <NavLink activeClassName="active" to='/rsvp'>
                    <img src="img/rsvp.png" className="tabIcon" alt="rsvp" /><span className="hidden-xs"> RSVP</span>
                </NavLink>
            </li>

            <li className={activeTab === TAB_LOGISTICS ? activeTabClass : defaultTabClass}>
                <NavLink activeClassName="active" to='/logistics'>
                    <img src="img/logistics.png" className="tabIcon" alt="logistics" /><span className="hidden-xs">Venue</span>
                </NavLink>
            </li>
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);