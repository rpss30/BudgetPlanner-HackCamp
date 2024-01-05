import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';

import { Layout } from '../components/layout/Layout';

const Planner = () => {
  

  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  const handleIncomeSubmit = () => {
    // Logic to handle income submission
    const source = document.getElementById('incomeSource').value;
    const amount = document.getElementById('incomeAmount').value;
    
    if (source && amount) {
      setIncomeList([...incomeList, { source, amount }]);
    }
  };

  const handleExpenseSubmit = () => {
    // Logic to handle expense submission
    const type = document.getElementById('expenseType').value;
    const name = document.getElementById('expenseName').value;
    const amount = document.getElementById('expenseAmount').value;
    const importance = document.getElementById('importance').value;

    if (type && name && amount && importance) {
      setExpenseList([...expenseList, { type, name, amount, importance }]);
    }
  };

  return (
    <Layout curIndex={0}>
      <SimpleGrid
        spacing={4}
        margin={5}
        templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
      >
        <Card boxShadow="lg">
          <CardHeader>
            <Heading size="md"> Your Income</Heading>
          </CardHeader>
          <CardBody>
            <FormControl isRequired>
              <FormLabel>Source</FormLabel>
              <Input id="incomeSource" placeholder="Source" />
              <FormLabel>Write Your Income</FormLabel>
              <Input id="incomeAmount" placeholder="Income Amount" />
            </FormControl>
          </CardBody>
          <CardFooter>
            <Button colorScheme="teal" onClick={handleIncomeSubmit}>
              Submit Amount
            </Button>
          </CardFooter>
        </Card>
        <Card boxShadow="lg">
          <CardHeader>
            <Heading size="md"> Your Expenses</Heading>
          </CardHeader>
          <CardBody>
            <FormControl isRequired>
              <FormLabel>Type of Income</FormLabel>
              <ExpenseType />

              <FormLabel>Name</FormLabel>
              <Input id="expenseName" placeholder="Enter Expense Name" />

              <FormLabel>Expenses Amount</FormLabel>
              <Input id="expenseAmount" placeholder="Enter Expenses Amount" />

              <FormLabel>Importance (1 being the lowest priority)</FormLabel>
              <SliderInput id="importance" />
            </FormControl>
          </CardBody>
          <CardFooter>
            <Button colorScheme="teal" onClick={handleExpenseSubmit}>
              Submit Amount
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>

      <div>
        <Heading size="md">Income List</Heading>
        <ul>
          {incomeList.map((income, index) => (
            <li key={index}>{`Source: ${income.source}, Amount: ${income.amount}`}</li>
          ))}
        </ul>
      </div>

      <Heading size="md">Expense List</Heading>
      <ul>
        {expenseList.map((expense, index) => (
          <li key={index}>{`Type: ${expense.type}, Name: ${expense.name}, Amount: ${expense.amount}, Importance: ${expense.importance}`}</li>
        ))}
      </ul>
    </Layout>
  );
}

function ExpenseType() {
  return (
    <Select id="expenseType" placeholder="Select an Option">
      <option value="fixed">Fixed Expense</option>
      <option value="variable">Variable Expense</option>
    </Select>
  );
}

import {
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

function SliderInput() {
  const [value, setValue] = useState(1);

  const handleChange = (value) => setValue(value);

  return (
    <Flex>
      <NumberInput max={10} min={1} maxW="100px" mr="2rem" value={value} onChange={handleChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  );
}

export default Planner;