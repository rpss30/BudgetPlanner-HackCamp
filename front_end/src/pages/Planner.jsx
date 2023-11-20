import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react'



const steps = [
  { title: 'First', description: 'Personals' },
  { title: 'Second', description: 'My Plans' },
  { title: 'Third', description: 'Tips & Tricks' },
  { title: 'Fourth', description: 'Graph Result' },
]

function Planner() {
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  return (
    <Box height="100vh" padding={5}>
      <Stepper size='md' colorScheme='teal' color='#F5F9E9' index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index} >
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle color='#F5F9E9'>{step.title}</StepTitle>
            <StepDescription color='#C2C1A5'>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
        ))}
      </Stepper>
      

      <SimpleGrid spacing={4} margin={5} templateColumns='repeat(auto-fill, minmax(500px, 1fr))'>
        <Card boxShadow='lg'>
          <CardHeader>
            <Heading size='md'> Your Income</Heading>
          </CardHeader>
          <CardBody>
            <FormControl isRequired>
              <FormLabel>Source</FormLabel>
              <Input placeholder='Source' />
              <FormLabel>Write Your Income</FormLabel>
              <Input placeholder='Income Amount' />
            </FormControl>
          </CardBody>
          <CardFooter>
            <Button colorScheme='teal'>Submit Amount</Button>
          </CardFooter>
        </Card>
        <Card boxShadow='lg'>
          <CardHeader>
            <Heading size='md'> Your Expenses</Heading>
          </CardHeader>
          <CardBody>
            <FormControl isRequired>
              <FormLabel>Type of Income</FormLabel>
              <ExpenseType />

              <FormLabel>Name</FormLabel>
              <Input placeholder='Enter Expense Name' />

              <FormLabel>Expenses Amount</FormLabel>
              <Input placeholder='Enter Expenses Amount' />

              <FormLabel>Importance (1 being the lowest priority)</FormLabel>
              <SliderInput />
            </FormControl>
          </CardBody>
          <CardFooter>
            <Button colorScheme='teal'>Submit Amount</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  )
}

function ExpenseType(){
  return (
    <Select placeholder='Select an Option'>
      <option value='fixed'>Fixed Expense</option>
      <option value='variable'>Variable Expense</option>
    </Select>
  )
}

import { Flex, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper} from '@chakra-ui/react'
import { useState } from 'react'

function SliderInput() {
  const [value, setValue] = useState(1)
  const handleChange = (value) => setValue(value)

  return (
    <Flex>
      <NumberInput max={10} min={1} maxW='100px' mr='2rem' value={value} onChange={handleChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  )
}

export default Planner