import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import { useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import { Button } from "@material-ui/core";

function App() {
  // const [user, setUser] = useState(null);

  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div>
            <Header />

            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
                <Route path="">
                  <div className="app__welcome">
                    Hi {user.displayName?.split(" ")?.[0]}
                    <h4>
                      Click on Add Channel to add a channel or click on channel
                      to start a chat
                    </h4>
                  </div>
                </Route>
              </Switch>
            </div>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
