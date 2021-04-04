import './App.css';
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register"
import Home from "./components/Home"
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar transparent/>
      <ToastContainer />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      {/* <Footer  /> */}
    </BrowserRouter>
  );
}

export default App;
