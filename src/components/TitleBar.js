import React from 'react';
import AddToCalendar from 'react-add-to-calendar';

const event = {
    title: "Sushila and Vaibhaw's marriage",
    description: 'Bless us with your presence as we begin a new chapter in our life',
    location: 'Terapanth Bhawan, Gandhi Nagar, Bengaluru, Karnataka, India',
    startTime: '2018-02-24T18:00:00+05:30',
    endTime: '2018-02-24T23:59:00+05:30'
}

const listItems = [{ apple: "Apple" }, { google: "Google" }, { outlook: "Outlook" }, { outlookcom: "Outlook.com" }, { yahoo: "Yahoo" }];

const dateHtml = '<span><!-- react-text: 16 --> 24th FEB, 2018<!-- /react-text --><i class="glyphicon glyphicon-calendar saveDate"></i></span>';

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
                    <span>&amp;</span> Vaibhaw
                </span>
                <div className="wedding-date" title="Click me to add to Calendar">
                    <AddToCalendar event={event} buttonLabel="24th FEB, 2018"
                        listItems={listItems} buttonTemplate="textOnly"
                    />
                </div>

            </header>
        );
    }

}

export default TitleBar;
