/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Navigation from "./navigation"
import "../assets/scss/style.scss";
import "../assets/scss/common.scss";

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
    siteSearchIndex {
      index
    }
  }
`

const Layout = ({ children, className, props }) => {
  const { site, siteSearchIndex } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div className="primary-container">
      <Header>
        <div sx={layoutStyle.nav}>
          <Navigation />
        </div>
        <div sx={layoutStyle.appearance}>
          <button className="call-to-action">Go to App</button>
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
