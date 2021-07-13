/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Seo from "../components/seo";
import "../assets/scss/index.scss";
const HomePage = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <div className="home-banner grids col-1 sm-2 d-flex">
        <div className="main-container">
          <img src="/assets/app_logo.png" height="300" /> <br/><br/>
          <span className="hero-title">Frequency.wtf</span><br/><br/><br/>
          <button className="call-to-action-alt">Read the docs</button> &nbsp;
          <button className="call-to-action">Go To App</button>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
