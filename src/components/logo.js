import React from "react"
import { Link } from "gatsby"

const Logo = props => (
  <div className="site-logo">
    <Link to="/">
      <img src="/assets/app_logo.png" height="30"/>
    </Link>
  </div>
)

export default Logo
