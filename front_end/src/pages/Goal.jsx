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
  Center,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  Button,
  Text,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'

const steps = [
  { title: 'First', description: 'Personals' },
  { title: 'Second', description: 'My Plans' },
  { title: 'Third', description: 'Tips & Tricks' },
  { title: 'Fourth', description: 'Graph Result' },
]

function Goal() {
  const { activeStep } = useSteps({
    index: 1,
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
      
      <GoalBody />
      
    </Box>
  )
}

function GoalBody() {
  return (
  <Center>    
    <Card margin={5} padding={5} boxShadow='lg'>
        <CardHeader>
          <Heading size='md'>How much would you like to save?</Heading>
        </CardHeader>

        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
            children='$'
          />
          <Input placeholder='Enter amount' />
        </InputGroup>

        <CardFooter>
          <Button colorScheme='teal'>Submit Goal</Button>
        </CardFooter>
      </Card>
    </Center>
  )
}



export default Goal