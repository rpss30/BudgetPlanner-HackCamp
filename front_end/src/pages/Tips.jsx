import {
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

import { Layout } from '../components/layout/layout';

function Tips() {
  return (
    <Layout>
      <TipsBody />
    </Layout>
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