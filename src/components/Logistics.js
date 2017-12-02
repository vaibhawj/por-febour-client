import React from 'react';
import { connect } from 'react-redux';
import { ACTION_SET_ACTIVE_TAB, TAB_LOGISTICS } from '../constants';

const iframeWidth = "100%";
const iframeHeight = "350px";

const iframeHtml = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124431.71832435323!2d77.56368747855326!3d12.940389910708253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae161206c93841%3A0x182db9fe5710e140!2sTerapanth+Bhawan+Bangalore!5e0!3m2!1sen!2sin!4v1511044279372" width=${iframeWidth} height=${iframeHeight} frameborder="0" style="border:0" allowfullscreen></iframe>`;

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
                <p>Here is how you get to the place. Don't be late! 😁</p>
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