import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Home from './components/pages/Home/Home'
import Experience from './components/pages/Experience/Experience'
import SideQuests from './components/pages/SideQuests/SideQuests'

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="content">
        <Home />
        <Experience />
        <SideQuests />
      </div>
    </>
  )
}

export default App
