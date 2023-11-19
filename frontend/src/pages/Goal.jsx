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
  Text
} from '@chakra-ui/react'

const steps = [
  { title: 'First', description: 'Personals' },
  { title: 'Second', description: 'My Plans' },
  { title: 'Third', description: 'Tips & Tricks' },
  { title: 'Fourth', description: 'Graph Result' },
]

function Goal() {
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
      

      <SimpleGrid spacing={4} margin={5} templateColumns='repeat(auto-fill, minmax(500px, 1fr))'>
        <Card boxShadow='lg'>
          <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card boxShadow='lg'>
          <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  )
}

export default Goal