import { Router, Route } from 'react-router';
import FormConfig from './components/MainScreen/MainScreen';
import Report from './components/Report/Report';
import Navbar from './components/NavbarForm/NavbarForm';
import PushNotificationContext from './data/notification-data';
import history from './history';
import ModalContext from './data/modal-data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (<>
  <Router history={history}>
    <ModalContext>
      <PushNotificationContext>
        <Navbar/>
          <Route exact path={'/'}>
            <FormConfig/>
          </Route>
          <Route exact path={'/reportes'}>
            <Report/>
          </Route>
      </PushNotificationContext>
    </ModalContext>
  </Router>
  </>);
}

export default App;
