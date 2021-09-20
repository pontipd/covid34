import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/css/reset.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/scss/main.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { useSelector, useDispatch } from 'react-redux'
import { selectUserName, setTypeLogOutState, setUserLogOutState } from './app/reducer/userSlice'
import { auth } from './config/firebase'
import { signOut } from 'firebase/auth'

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Home from './pages/Home';

import Account from './pages/Account';
import PageNotFound from './pages/PageNotFound';
import TestDashboard from './pages/TestDashboard';
import ParentDashboard from './pages/dashboard/ParentDashboard';
import StaffDashboard from './pages/dashboard/StaffDashboard';
import VerifyByAdmin from './pages/verify/VerifyByAdmin';

const CheckAuth = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)

  const handleSignOut = () => {
    setLoading(true)
    signOut(auth).then(() => {
      dispatch(setUserLogOutState())
      dispatch(setTypeLogOutState())
      setLoading(false)
      console.log('your are sign out')
    }).catch((err) => alert(err.message))
    setLoading(false)
  }
  if (userName) {
    return <Header handleSignOut={handleSignOut} />
  }
}

function App() {
  library.add(fab, fas, far);
  return (
    <div>
      {CheckAuth()}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <Route exact path="/dashboard" component={TestDashboard} /> */}
        <Route path="/dashboard/staff" component={StaffDashboard} />
        <Route path="/dashboard/parent" component={ParentDashboard} />
        <Route path="/account" component={Account} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route exact path="/verify-by-admin" component={VerifyByAdmin} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
