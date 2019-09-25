import React,{Fragment} from 'react'
import { Header, Card } from "semantic-ui-react";


function TransactionDetails(){
    return(
<Fragment>
    <Header>Transaction Transaction Details</Header>
    <Card>
        <Card.Content>
            <Card.Header>
                Transaction ID:12034567895234:2015
            </Card.Header>
        </Card.Content>
    </Card>
</Fragment>
    )
}

export default TransactionDetails;