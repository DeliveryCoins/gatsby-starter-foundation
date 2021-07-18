/** @jsx jsx */
import { Box, Grid, jsx } from "theme-ui"

const Stats = () => (
  <Grid width={[128, null, 192]} className="grid">
    <Box bg="muted" className="boxes-container">
      <span className="count">1</span>
      <br />
      <span className="box-label">NFT SOLD</span>
    </Box>
    <Box bg="muted" className="boxes-container">
      <span className="count">1</span>
      <br />
      <span className="box-label">NFT SOLD</span>
    </Box>
    <Box bg="muted" className="boxes-container">
      <span className="count">1</span>
      <br />
      <span className="box-label">NFT SOLD</span>
    </Box>
  </Grid>
)

export default Stats;