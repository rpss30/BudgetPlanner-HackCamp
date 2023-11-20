import { Link } from 'react-router-dom';
import { Text, Heading, Button, Box } from '@chakra-ui/react'



const Home = () => {
  return (
    <>    
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh" // Adjust the height as needed
      >
        <Box>
          <Heading as='h1' size='4xl' color='#F5F9E9'>
            Welcome to Budget Planner
          </Heading>
          <Text padding={4} fontSize='3xl' color='#C2C1A5'>Your Gateway to Financial Freedom!</Text>
          <Button colorScheme='teal' variant='solid' boxShadow='lg'>
            <Link to='/planner'>Start Now!</Link>
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Home