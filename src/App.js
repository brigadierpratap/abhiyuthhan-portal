import "./App.css";
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

import Designregister from "./components/design-to-debug/design-to-debug.component";
import Loopofcode from "./components/loop-of-code/loop-of-code.component";

import Homepage from "./pages/homepage/homepage.component";
import Nav from "./components/nav/nav.component";

import Registration from "./components/registration/registration.component";
import { Helmet } from "react-helmet";
import Ended from "./components/assessories/Ended";

class App extends Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();
    this.state = {
      currentUser: null,
      id: null,
      loading: false,
    };
  }

  componentDidMount() {
    if (this.state.currentUser == null)
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          this.setState({ loading: true });
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot((snapShot) => {
            this.setState({
              id: snapShot.id,
              currentUser: snapShot.data(),
              loading: false,
            });
          });
        } else {
          this.setState({ id: null, currentUser: null });
        }
      });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Abhiyuthhan</title>
        </Helmet>
        <Nav
          currentUser={this.state.currentUser}
          loading={this.state.loading}
          removeuser={this.removeuser}
        />

        <Switch>
          <Route exact path="/">
            <Homepage currentUser={this.state.currentUser} />
          </Route>
          {this.state.currentUser ? (
            <div>
              <Route path="/Quiz">
                <Registration
                  event_name="Quizopedia"
                  eventkey="Quizopedia"
                  path="/Quiz"
                  currentUser={this.state.currentUser}
                  id={this.state.id}
                />
                <Helmet>
                  <title>Quiz-O-Quest</title>
                </Helmet>
              </Route>
              <Route path="/Kasa-parabel">
                <Registration
                  event_name="Kas Parable"
                  eventkey="treasure"
                  path="/Kasa-parabel"
                  currentUser={this.state.currentUser}
                  id={this.state.id}
                />
                <Helmet>
                  <title>Kasparabel</title>
                </Helmet>
              </Route>
              <Route path="/design-to-debug">
                <Designregister currentUser={this.state.currentUser} />
                <Helmet>
                  <title>Design2Debug</title>
                </Helmet>
              </Route>
              <Route path="/loop-of-code">
                <Loopofcode currentUser={this.state.currentUser} />
              </Route>
            </div>
          ) : (
            <Route path="/">
              <Homepage currentUser={this.state.currentUser} />
            </Route>
          )}
        </Switch>
      </div>
    );
  }
}

export default App;
/*
<Route path="/Quiz/Quiz1">
  <Quiz1/>
</Route>
<Route exact path="/audio-visual"><Registration event_name="Audio Visual" path="/audio-visual" currentUser={this.state.currentUser} id={this.state.id} /></Route>

<Route path="/Others">
  <Others/>  
</Route>
*/
