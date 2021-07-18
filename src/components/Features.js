/** @jsx jsx */
import { Box, Grid, jsx } from "theme-ui"
import React from "react"

const Features = () => (
  <React.Fragment>
    <Grid gap={2} columns={[2]} className="grid">
      <Box bg="muted" className="boxes-container-feature">
        <img src="/assets/desktop_1.png" width="80%" alt="feature" />
      </Box>
      <Box bg="muted" className="boxes-container-feature">
        <div
          className="label"
          sx={{
            color: "text",
          }}
        >
          label
        </div>
        <div
          className="header"
          sx={{
            color: "text",
          }}
        >
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur
        </div>
        <div
          className="description"
          sx={{
            color: "text",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </Box>
    </Grid>
    <br />
    <br />
    <Grid columns={[2]} className="grid reverse-grid">
      <Box bg="muted" className="boxes-container-feature">
        <div
          className="label"
          sx={{
            color: "text",
          }}
        >
          label
        </div>
        <div
          className="header"
          sx={{
            color: "text",
          }}
        >
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur
        </div>
        <div
          className="description"
          sx={{
            color: "text",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </Box>
      <Box bg="muted" className="boxes-container-feature">
        <img src="/assets/desktop_2.png" width="80%" alt="feature" />
      </Box>
    </Grid>
    <br />
    <br />
    <Grid columns={[2]} className="grid">
      <Box bg="muted" className="boxes-container-feature">
        <img src="/assets/desktop_3.png" width="80%" alt="feature" />
      </Box>
      <Box bg="muted" className="boxes-container-feature">
        <div
          className="label"
          sx={{
            color: "text",
          }}
        >
          label
        </div>
        <div
          className="header"
          sx={{
            color: "text",
          }}
        >
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur
        </div>
        <div
          className="description"
          sx={{
            color: "text",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </Box>
    </Grid>
  </React.Fragment>
)

export default Features
