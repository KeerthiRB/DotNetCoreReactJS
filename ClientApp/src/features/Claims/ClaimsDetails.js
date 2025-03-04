import React,{Fragment, useState, useEffect} from "react"
import { Header, Card, Button,  List } from "semantic-ui-react"
import axios from 'axios';
import IVModel from '../../Models/IVModel';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function ClaimsDetails(){
    const[claim,SetClaim]= useState(IVModel.ClaimsEntity);
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
    <Link to="/Transactions/"><Button basic color='green'>
        Transactions 
      </Button></Link>
      
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