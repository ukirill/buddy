import React, {FunctionComponent, useState} from 'react';
import {TransactionModel} from '../models/transactionModel'
import {Button, Input, Box, Flex, Spacer} from '@chakra-ui/core'

interface OwnProps {
  tx : TransactionModel
}

type Props = OwnProps;

const Transaction: FunctionComponent<Props> = (props) => {
  const [income, setIncome] = useState(props.tx.income)
  const [outcome, setOutcome] = useState(props.tx.outcome)

  return (
    <div>
      <Flex p='4'>
          <Input p="2"
            defaultValue={props.tx.income}
            onChange={(e) => setIncome(parseFloat(e.target.value))}
            name='income'
          />
          <Input
            defaultValue={props.tx.outcome}
            onChange={(e) => setOutcome(parseFloat(e.target.value))}
            name='outcome'
          />
          <Input

          />
        <Button
          p="4"
          onClick={()=>console.log("click"+income+outcome)}
        >
          Save
        </Button>
        <Button p='4'>Cancel</Button>
      </Flex>
    </div>
  );
};

export default Transaction;
