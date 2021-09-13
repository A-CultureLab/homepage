import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";

import Agreement from "../../pages/Agreement";
import AgreementLocation from "../../pages/AgreementLocation";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import React from 'react'

const Main = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact />
                <Route path='/agreement' component={Agreement} />
                <Route path='/agreement-location' component={AgreementLocation} />
                <Route path='/privacy-policy' component={PrivacyPolicy} />
                <Route path='/support' />
            </Switch>
        </BrowserRouter>
    )
}

export default Main