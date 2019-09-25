import React from "react"
import { Grid } from "semantic-ui-react"
import TransactionDetails from "./TransactionDetails";
import TransactionsList from "./TransactionsList";

function TransactionDashboard(){
    return(<Grid>
        <Grid.Row >
          <Grid.Column width={12}>
          <TransactionsList/>
          </Grid.Column>
          <Grid.Column width={4}>              
              <TransactionDetails/>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>);
}
export default TransactionDashboard;