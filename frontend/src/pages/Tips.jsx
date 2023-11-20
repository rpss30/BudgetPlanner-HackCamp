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
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  Button,
  Text,
  Center
} from '@chakra-ui/react'

const steps = [
  { title: 'First', description: 'Personals' },
  { title: 'Second', description: 'My Plans' },
  { title: 'Third', description: 'Tips & Tricks' },
  { title: 'Fourth', description: 'Graph Result' },
]

function Tips() {
  const { activeStep } = useSteps({
    index: 2,
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

          <Box flexShrink='0' colorScheme='red'>
            <StepTitle color='#F5F9E9'>{step.title}</StepTitle>
            <StepDescription color='#C2C1A5'>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
        ))}
      </Stepper>
      

      <TipsBody />
    </Box>
  )
}

function TipsBody() {
  return (
  <Center>    
    <Card margin={5} boxShadow='lg' width='500px'>
        <CardHeader>
          <Heading as='h1'>Recommendation</Heading>
        </CardHeader>
        <CardBody>
          <Text fontWeight='bold'>You can save by</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme='teal'>Find Out</Button>
        </CardFooter>
      </Card>
    </Center>
  )
}

export default Tips