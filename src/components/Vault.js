/** @jsx jsx */
import { Box, Grid, Heading, jsx } from "theme-ui"

const Vault = () => (
  <Grid columns={[1]} width="100%" className="grid">
    <Box>
    <Heading>TOP VAULTS</Heading> <br/>
    </Box>
    <Box>
      <table className="table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Uniswap</td>
            <td>Uniswap</td>
            <td>Uniswap</td>
            <td>Uniswap</td>
          </tr>
          <tr>
            <td>Uniswap</td>
            <td>Uniswap</td>
            <td>Uniswap</td>
            <td>Uniswap</td>
          </tr>
          <tr>
            <td>Uniswap</td>
            <td>Uniswap</td>
            <td>Uniswap</td>
            <td>Uniswap</td>
          </tr>
          <tr>
            <td>Uniswap</td>
            <td>Uniswap</td>
            <td>Uniswap</td>
            <td>Uniswap</td>
          </tr>
          <tr>
            <td>Uniswap</td>
            <td>Uniswap</td>
            <td>Uniswap</td>
            <td>Uniswap</td>
          </tr>
          <tr>
            <td>Uniswap</td>
            <td>Uniswap</td>
            <td>Uniswap</td>
            <td>Uniswap</td>
          </tr>
        </tbody>
      </table>

    </Box>
  </Grid>
)

export default Vault;