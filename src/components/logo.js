import React from "react"
import { Link } from "gatsby"
import LogoImage from "../../public/assets/app_logo.png";
const Logo = props => (
  <div className="site-logo">
    <Link to="/">
      <img src={LogoImage} alt="logo" height="30"/>
    </Link>
  </div>
)

export default Logo
