import {HashRouter  , Switch, Route} from "react-router-dom";
import {HomePage} from "../../pages/homePage/HomePage";
import {NewRoomPage} from "../../pages/newRoomPage/NewRoomPage";
import {JoinRoomPage} from "../../pages/joinRommPage/JoinRoomPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
  <HashRouter>
    <Switch>
       <Route exact path="/">
         <HomePage/>
       </Route>
      <Route path="/newRoom">
        <NewRoomPage/>
      </Route>
      <Route path="/joinRoom">
        <JoinRoomPage/>
      </Route>

    </Switch>
  </HashRouter>

    </>
  );
}

export default App;
