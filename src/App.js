import './App.css';
import Navbar from "./components/Header";
import Dashboard from "./components/User/Dashboard/Dashboard";
import Register from "./components/Register"
import Home from "./components/Home"
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <ToastContainer />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
      {/* <Footer  /> */}
    </BrowserRouter>
  );
}

export default App;
