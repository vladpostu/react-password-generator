
import React from "react";
import ReactDOM from "react-dom";

import Layout from './hoc/Layout/Layout';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import MainContent from './Components/MainContent/MainContent';
import Footer from './Components/Footer/Footer';

const App = () => (
  <Layout>
    <Navbar />
    <LandingPage />
    <MainContent />
    <Footer />
  </Layout>
)


ReactDOM.render(<App />, document.getElementById("root"));
