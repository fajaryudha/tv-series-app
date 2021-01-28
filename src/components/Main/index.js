import React from "react";
import { Switch, Route } from "react-router-dom";
import Series from "../../containers/Series";
import SinggleSeries from "../../containers/SinggleSeries";

const Main = props => {
    return (
        <Switch>
            <Route exact path="/" component={Series} />
            <Route path="/series/:id/" component={SinggleSeries} />
        </Switch>
    );
}

export default Main;

