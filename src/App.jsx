import Navbar from "./components/Navbar/Navbar"
import "./layout.scss"
import Homepage from "./routes/homepage/Homepage"

function App() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Homepage />
      </div>
    </div>
  )
}

export default App