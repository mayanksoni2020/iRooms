import React,{Component} from 'react';
import Layout from './component/Layout/layout';
import {Switch,Route} from 'react-router-dom';
import SharedRoomPage from './component/SharedRoomPage/sharedRoomPage';
import FamilyRooms from './component/FamilyRoompage/familyroom';
import PrivateRooms from './component/PrivateRoomPage/privateroom';
import Login from './container/LOGIN/login';
import Admin from './container/Admin/adminEditor';
import Sign from './component/Signup/signup';
import LoginPage from './Profile/profile';
import Aboutus from './component/ABOUTUS/aboutus';
import Menu from './component/User/User/menubar';
import CompleteProfile from './component/User/CompleteProfile/completePro';
import PlayGround from './container/MultiplePages/multiplepages';
import Rough from './container/Playground/rough';
import Contact from './component/Contactus/contactus';
import Temporary from './container/SinglePageprop/singlepageprop';
import Work from './component/Workwithus/workwithus';
import Profile from './Profile/profile';
import store from './store';
import LoadingView from './component/Loadingview/loading';
import {Provider} from 'react-redux';
import {loadUser} from './actions/authAction';
import ListProperty from './container/List/listproperty';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount() {
   
    store.dispatch(loadUser());
  
  }
  // static propTypes={
  //   auth:PropTypes.func.isRequired
  // }
render()
{

  return (
    <Provider store={store}>
     
    <Switch>
      <Route path="/" exact component={Layout}></Route>
      <Route path="/sharedrooms" component={SharedRoomPage}></Route>
      <Route path="/privaterooms" component={PrivateRooms}></Route>
      <Route path="/familyrooms" component={FamilyRooms}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/admin" component={Admin}></Route>
      <Route path="/signup" component={Sign}></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/aboutus" component={Aboutus}></Route>
      <Route path="/menu" component={Menu}></Route>
      <Route path="/dummy" component={Profile}></Route>
      <Route path="/playground/:userID" component={PlayGround}></Route>
      <Route path="/cp" component={CompleteProfile}></Route>
      <Route path="/contactus" component={Contact}></Route>
      <Route path="/rough" component={Rough}></Route>
      <Route path="/temporary" component={Temporary}></Route>
      <Route path="/listproperty" component={ListProperty}></Route>
      <Route path="/work" component={Work}></Route>
   
      
      </Switch>
      </Provider>
  );
}
}
// const mapStateToProps=(state)=>({
//   auth:state.auth
// });
// export default connect(mapStateToProps,null)(App);
export default App;
