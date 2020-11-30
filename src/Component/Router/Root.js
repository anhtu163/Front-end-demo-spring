import {Route, BrowserRouter , Switch} from 'react-router-dom';
import DashboardContainer from '../../Container/DashboardContainer';
import LoginContainer from '../../Container/LoginContainer';

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route  path="/login">
              <LoginContainer />
            </Route>
            <Route path="/">
              <DashboardContainer/>
            </Route>
        </Switch>  
    </BrowserRouter>
)



export default Root