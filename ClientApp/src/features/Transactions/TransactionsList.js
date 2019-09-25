import React,{Fragment, useState, useEffect} from "react"
import { Table, Header } from "semantic-ui-react"
import axios from 'axios';
import IVModel from '../../Models/IVModel';

const defaultTransactionList=[IVModel.TransactionDetails]

function TransactionsList(){
    const[Transactions,SetTransaction]=useState(defaultTransactionList);
    useEffect(()=> {
        axios.get("/Transactions/gettransactions").then(response=>{
            SetTransaction(response.data)
        });
      },[]);

      return(
        <Fragment>
        <Header>Transactions List</Header>
            <Table size="large">
    <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Transaction ID</Table.HeaderCell>
                <Table.HeaderCell>Transaction Date</Table.HeaderCell>
                <Table.HeaderCell>Ammount</Table.HeaderCell>
                <Table.HeaderCell>Note</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
            {Transactions.map((trans)=>(
                <Table.Row key={trans.transactionId}>
                <Table.Cell>{trans.transactionDate}</Table.Cell>
                <Table.Cell>{trans.transactionFrom}</Table.Cell>
                <Table.Cell>{trans.transactionAmount}</Table.Cell>
                <Table.Cell>{trans.transactionNote}</Table.Cell>
              </Table.Row>
            ))}       
              
            </Table.Body>
            </Table>
            </Fragment>
   
      );
}
export default TransactionsList;