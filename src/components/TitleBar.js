import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const date = "24th FEB, 2018";
const event = {
    title: "Sushila and Vaibhaw's marriage",
    description: 'Bless us with your presence as we begin a new chapter in our life',
    location: 'Terapanth Bhawan, Gandhi Nagar, Bengaluru, Karnataka, India',
    startTime: '2018-02-24T18:00:00+05:30',
    endTime: '2018-02-24T23:59:00+05:30'
}

const listItems = [{ apple: "Apple" }, { google: "Google" }, { outlook: "Outlook" }, { outlookcom: "Outlook.com" }, { yahoo: "Yahoo" }];
const dateHtml = `<span class="wedding-date"><!-- react-text: 16 --> ${date}<!-- /react-text --><i id="saveDate" class="glyphicon glyphicon-calendar saveDate animationActive"></i></span>`;
const tooltip = (
    <Tooltip id="tooltip">Click to mark the date!</Tooltip>
);


const handleClick = () => {
    const calendarIcon = document.getElementById('saveDate');
    calendarIcon.classList.remove('animationActive');
}

class TitleBar extends React.Component {

    componentDidMount() {
        const dateElement = document.getElementsByClassName('react-add-to-calendar__button')[0];
        dateElement.innerHTML = dateHtml;
    }

    render() {
        return (
            <header className="titlebar">
                <span className="bride-name">Sushila</span>
                <span className="groom-name">&nbsp;
                    <span><img src="img/ganesha.png" className="tabIcon ganesha" alt="&amp;" /></span> Vaibhaw
                </span>
                <div onClick={handleClick} className="wedding-date-wrapper">
                    <OverlayTrigger placement="right" overlay={tooltip}>
                        <span>
                            <AddToCalendar event={event} buttonLabel={date}
                                listItems={listItems} buttonTemplate="textOnly"
                            />
                        </span>
                    </OverlayTrigger>
                </div>

            </header>
        );
    }

}

export default TitleBar;
