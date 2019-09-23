import React from "react"
import { Grid } from "semantic-ui-react"
import ClaimsList from "./Claims/ClaimsList"
import ClaimsDetails from "./Claims/ClaimsDetails"


function AccountClaimsDashboard(){

    return(
        <Grid>
    <Grid.Row >
      <Grid.Column width={12}>
          <ClaimsList></ClaimsList>
      </Grid.Column>
      <Grid.Column width={4}>
          <ClaimsDetails/>
      </Grid.Column>
    </Grid.Row>
    
  </Grid>
    )
}

export default AccountClaimsDashboard;