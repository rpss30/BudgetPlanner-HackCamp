import { Link } from 'react-router-dom';

const Home = () => {
  const styles = {
    color: "white"
  }

  return (
    <>
      <h1>Welcome</h1>
      <Link to ='/planner'>Planner</Link>
    </>
  )
}

export default Home