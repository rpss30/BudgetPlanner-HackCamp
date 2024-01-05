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
} from '@chakra-ui/react';

const steps = [
  { title: "First", description: "Personals" },
  { title: "Second", description: "My Plans" },
  { title: "Third", description: "Tips & Tricks" },
  { title: "Fourth", description: "Graph Result" },
];

export const Layout = ({children, curIndex}) => {
  const { activeStep } = useSteps({
    index: curIndex,
    count: steps.length,
  });

  return (
    <Box height="100vh" padding={5}>
      <Stepper size="md" colorScheme="teal" color="#F5F9E9" index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle color="#F5F9E9">{step.title}</StepTitle>
              <StepDescription color="#C2C1A5">
                {step.description}
              </StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      {children}
    </Box>
  );
};
