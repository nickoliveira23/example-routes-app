import useAuth from "../../hooks/useAuth"

import Navbar from "../../components/Navbar"

const Home = () => {
  const { user, signOut } = useAuth()

  return (
    <div>
      <Navbar />
      <h1>This is the Home page! Welcome {user?.name}</h1>
      <button onClick={signOut}>Logout</button>
    </div>
  )
}

export default Home