import { useState } from "react";
import {
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { Layout } from "../../components/layout/Layout";

import IncomeList from "./ItemsList";

const Planner = () => {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  // Logic to handle income submission
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);

  // Logic to handle expense submission
  const [expenseInput, setExpenseInput] = useState({
    type: "",
    name: "",
    amount: 0,
    importance: 1,
  });

  const handleIncomeSubmit = () => {
    if (source && amount) {
      setIncomeList([...incomeList, { source, amount }]);
    }
    setSource("");
    setAmount(0);
  };

  const handleExpenseSubmit = () => {
    if (expenseInput) {
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
              <FormLabel> Source </FormLabel>
              <Input
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="Source of Income"
              />

              <FormLabel> Write Your Income </FormLabel>
              <MoneyInputText amount={amount} />
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

              {/* Expense Type */}
              <Select placeholder="Select an Option">
                <option value="fixed">Fixed Expense</option>
                <option value="variable">Variable Expense</option>
              </Select>

              {/* Name */}
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Enter Expense Name"
                value={expenseInput.name}
                onChange={(e) => setExpenseInput(e)}
              />

              {/* Amount */}
              <FormLabel>Expenses Amount</FormLabel>
              <MoneyInputText />

              {/* Importance */}
              <FormLabel>Importance (1 being the lowest priority)</FormLabel>
              <SliderInput />
            </FormControl>
          </CardBody>
          <CardFooter>
            <Button colorScheme="teal" onClick={handleExpenseSubmit}>
              Submit Amount
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>

      <Heading size="md">Income List</Heading>
      <IncomeList itemsInput={incomeList} />

      <Heading size="md">Expense List</Heading>
      <IncomeList itemsInput={expenseList} />
    </Layout>
  );
};

const MoneyInputText = () => {
  const [amount, setAmount] = useState(0);

  const format = (val) => `$   ${val}`;
  const handleChange = (e) => {
    setAmount(e);
  }

  return (
    <InputGroup>
      {/* <InputLeftElement pointerEvents="none" color="green.300" fontSize="1.2em">
        $
      </InputLeftElement> */}
      <NumberInput value={format(amount)} onChange={handleChange}>
        <NumberInputField />
      </NumberInput>
    </InputGroup>
  );
};

const SliderInput = () => {
  const [value, setValue] = useState(1);

  const handleChange = (value) => setValue(value);

  return (
    <Flex>
      <NumberInput
        max={10}
        min={1}
        maxW="100px"
        mr="2rem"
        value={value}
        onChange={handleChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  );
};

export default Planner;
