import React from 'react';
import { connect } from 'react-redux';
import { ACTION_SET_ACTIVE_TAB, TAB_LOGISTICS } from '../constants';

const iframeWidth = "100%";
const iframeHeight = "350px";

const iframeHtml = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9778947282741!2d77.5790128292092!3d12.977506999428273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae160df938ac0f%3A0x7eb578563b8d398d!2sTerapanth+Bhawan!5e0!3m2!1sen!2sin!4v1517153288308" width=${iframeWidth} height=${iframeHeight} frameborder="0" style="border:0" allowfullscreen></iframe>`;

class LogisticsComp extends React.Component {

    componentWillMount() {
        this.props.setRoute(TAB_LOGISTICS);
    }

    constructor() {
        super();
        this.iframe = () => {
            return {
                __html: iframeHtml
            }
        }
    }

    render() {
        return (
            <div style={{ marginLeft: '2%', marginRight: '2%' }} >
                <p>Wedding functions start at 7 pm <span role="img" aria-label="">💃🏼🕺🏽</span></p>
                <p>Here is how you get to the place</p>
                <div className="map-holder">
                    <div dangerouslySetInnerHTML={this.iframe()} />
                </div>
            </div >
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

const Logistics = connect(mapStateToProps, mapDispatchToProps)(LogisticsComp);

export default Logistics;