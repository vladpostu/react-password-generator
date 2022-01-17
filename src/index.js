
import React from "react";
import ReactDOM from "react-dom";

import Layout from './hoc/Layout/Layout';
import Navbar from './Navbar/Navbar';
import LandingPage from './LandingPage/LandingPage';
import MainContent from './MainContent/MainContent';

const App = () => (
  <Layout>
    <Navbar />
    <LandingPage />
    <MainContent />
  </Layout>
)


ReactDOM.render(<App />, document.getElementById("root"));
