import React from 'react';
import {
    Router,
    Switch,
    Route, Redirect
} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Couple from './Couple';
import Wedding from './Wedding';
import RSVP from './RSVP';
import Logistics from './Logistics';
import NoMatch from './NoMatch';
import Header from './Header';
import Photos from './Photos';
import Footer from './Footer';

class App extends React.Component {
    render() {

        return (
            <Router onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}>
                <div className="container">
                    <Header />

                    <div className="tab-content tabs">
                        <Switch>
                            <Redirect exact from="/" to="/couple" />
                            <Route path="/couple" component={Couple} />
                            <Route path="/wedding" component={Wedding} />
                            <Route path="/photos" component={Photos} />
                            <Route path="/rsvp" component={RSVP} />
                            <Route path="/logistics" component={Logistics} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;
