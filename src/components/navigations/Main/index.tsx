import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";

import Agreement from "../../pages/Agreement";
import AgreementLocation from "../../pages/AgreementLocation";
import Home from "../../pages/Home";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import React from 'react'
import Support from "../../pages/Support";

const Main = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/agreement' component={Agreement} />
                <Route path='/agreement-location' component={AgreementLocation} />
                <Route path='/privacy-policy' component={PrivacyPolicy} />
                <Route path='/support' component={Support} />
            </Switch>
        </BrowserRouter>
    )
}

export default Main