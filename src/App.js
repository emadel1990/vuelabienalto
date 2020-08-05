import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/app.css";

import Layout from "./Layout/Layout";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Formations from "./pages/Formations";
import Courses from "./pages/Courses";
import Foundations from "./pages/Foundations";
import Contact from "./pages/Contact";
import CursoPNL from "./pages/CoursesList/CoursePnl";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/nosotros" component={AboutUs} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/formaciones" component={Formations} />
            <Route exact path="/cursos" component={Courses} />
            <Route exact path="/fundaciones" component={Foundations} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/curso-pnl" component={CursoPNL} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
