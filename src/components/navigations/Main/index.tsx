import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";

import Agreement from "../../pages/Agreement";
import AgreementLocation from "../../pages/AgreementLocation";
import Download from "../../pages/Download";
import Home from "../../pages/Home";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
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
                <Route path='/download' component={Download} />
            </Switch>
        </BrowserRouter>
    )
}

export default Main