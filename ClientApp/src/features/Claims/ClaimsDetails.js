import React,{Fragment, useState, useEffect} from "react"
import { Table, Header, Card, Button, ListList, List } from "semantic-ui-react"
import axios, { AxiosResponse } from 'axios';

const defaultClaimsEntity={
    claimID:0,
    claimType:"Unknown",
    claimsAmount:0,
    claimsStatus:"N/A",
    claimsTransactions:[""]   
 };

function ClaimsDetails(){
    const[claim,SetClaim]= useState(defaultClaimsEntity);
    useEffect(()=> {
        axios.get("/Claims/GetClaim").then(response=>{
            SetClaim(response.data)
        });
      },[]);

      return(
        <Fragment>
        <Header>Claim Details</Header>
    <Card>
        <Card.Content>
        <Card.Header>Claim ID :{claim.claimID} </Card.Header>
    <Card.Meta>Claim Type : {claim.claimType}</Card.Meta>
    <Card.Description>
      Claims Question and Answers comes here.

      <List>
          <Header>Transaction IDs</Header>
{claim.claimsTransactions.map((trans)=>(
<List.Item key={trans}>{trans}</List.Item>
))}
      </List>
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <div className='ui two buttons'>
      <Button basic color='green'>
        Approve
      </Button>
      <Button basic color='red'>
        Decline
      </Button>
    </div>
  </Card.Content>
    </Card>
    </Fragment>
      )

}

export default ClaimsDetails;