import {
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
  InputLeftElement,
} from "@chakra-ui/react";

import { Layout } from "../../components/layout/Layout";

const Goal = () => {
  return (
    <Layout curIndex={1}>
      <GoalBody />
    </Layout>
  );
}

function GoalBody() {
  return (
    <Center>
      <Card margin={5} padding={5} boxShadow="lg">
        <CardHeader>
          <Heading size="md">How much would you like to save?</Heading>
        </CardHeader>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children="$"
          />
          <Input placeholder="Enter amount" />
        </InputGroup>

        <CardFooter>
          <Button colorScheme="teal">Submit Goal</Button>
        </CardFooter>
      </Card>
    </Center>
  );
}

export default Goal;