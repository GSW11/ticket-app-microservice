// import buildClient from "../api/build-client"

// const LandingPage =  ({ currentUser }) => {
//   return currentUser ? <h1>You are signed in</h1> : <h1>You are Not signed in</h1>
// }

// LandingPage.getInitialProps = async (context) => {
//   const client = buildClient(context)
//   const { data } = await client.get('/api/users/currentuser')

//   return data
// }

// export default LandingPage
import axios from '../api/base-axios'

const fetchData = async () => {
  
}

const LandingPage = () => {
  return <h1>LandingPage</h1>
}

export default LandingPage