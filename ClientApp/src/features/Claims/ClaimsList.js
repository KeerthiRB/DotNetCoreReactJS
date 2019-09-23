import React,{Fragment, useState, useEffect} from "react"
import { Table, Header } from "semantic-ui-react"
import axios, { AxiosResponse } from 'axios';

const defaultClaimsEntity=[{
    claimID:0,
    claimType:"Unknown",
    claimsAmount:0,
    claimsStatus:"N/A",
    claimsTransactions:[""]   
 }];

function ClaimsList(){
    const[ClaimsEntities,SetClaimsEntities]= useState(defaultClaimsEntity)
    useEffect(()=> {
        axios.get("/Claims/GetClaims").then(response=>{
            SetClaimsEntities(response.data)
        });
      },[]);
    
        return(
    <Fragment>
        <Header>Claims List</Header>
            <Table size="large">
    <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Claim ID</Table.HeaderCell>
                <Table.HeaderCell>Claim Type</Table.HeaderCell>
                <Table.HeaderCell>Ammount</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
            {ClaimsEntities.map((Claims)=>(
                <Table.Row key={Claims.claimID}>
                <Table.Cell>{Claims.claimID}</Table.Cell>
                <Table.Cell>{Claims.claimType}</Table.Cell>
                <Table.Cell>{Claims.claimsAmount}</Table.Cell>
                <Table.Cell>{Claims.claimsStatus}</Table.Cell>
              </Table.Row>
            ))}       
              
            </Table.Body>
            </Table>
            </Fragment>
        )
}
export default ClaimsList;