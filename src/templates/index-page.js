/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import "../assets/scss/index.scss";
import React from 'react';
import Seo from "../components/seo";
import Stats from "../components/Stats";
import Vaults from "../components/Vault";
import Features from "../components/Features";
import Footer from "../components/footer";
const HomePage = ({ data }) => {
  return (<React.Fragment>
    <Layout>
      <Seo />
      <div className="home-banner grids col-1 sm-2 d-flex">
        <div className="main-container">
          <img src="/assets/app_logo.png" height="300" alt="logo"/> <br/><br/>
          <span className="hero-title">Frequency.wtf</span><br/><br/><br/>
          <button sx={style.button}>Read the docs</button> &nbsp;
          <button className="call-to-action">Go To App</button>
        </div>
      </div>
      <Stats />
      <br/><br/>
      <Vaults />
      <br/><br/>
      <Features/>
      <br/><br/>
    </Layout>
    <Footer/></React.Fragment>
  )
}

export default HomePage

const style = {
  button: {
    color: "darkButtontext",
    borderRadius: "2px",
    bg: "darkbutton",
    padding: "15px 10px",
    border: "none",
    minWidth: "100px"
  },
}