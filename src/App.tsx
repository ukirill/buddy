import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TransactionModel} from "./models/transactionModel";
import Transaction from "./components/transaction";

const trans1 = new TransactionModel(1, 100, 200, "")

function App() {
  return (
    <Transaction tx={trans1}/>
  );
}

export default App;
