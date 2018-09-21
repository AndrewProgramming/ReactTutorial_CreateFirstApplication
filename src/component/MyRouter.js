import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import MyLayout from "./MyLayout";
import TutorialList from "./TutorialList";
import Tooltip from "./Tooltip";

const MyRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={MyLayout}/>
            <Route exact path="/tutorialList" component={TutorialList}/>
            <Route exact path="/tooltip" component={Tooltip}/>

        </div>
    </Router>
);

export default MyRouter;