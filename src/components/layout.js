/** @jsx jsx */
import { jsx } from "theme-ui";
import Logo from "./logo";
import Header from "./header";
import Navigation from "./navigation";
import "../assets/scss/style.scss";
import "../assets/scss/common.scss";
import Theme from "./theme";

const Layout = ({ children, className }) => {
  return (
    <div className="primary-container">
      <Header>
        <div sx={layoutStyle.nav}>
        <Logo />
          <Navigation />
        </div>
        <div sx={layoutStyle.appearance}>
          <button className="call-to-action">Go to App</button>
          <Theme />
        </div>
      </Header>
      <main className={"container " + className}>{children}</main>
    </div>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}
