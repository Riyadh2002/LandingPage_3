import Hero from "./components/Hero"
import './index.css'
import Shopping from "./components/Shopping"
import Middle from "./components/Middle"
import NewArival from "./components/NewArival"
import GiveWay from "./components/GiveWay"
import WhatsNew from "./components/WhatsNew"
import Give from "./components/Give"


function App() {


  return (
    <>
      <Hero />
<div className="mt-16"> {/* or use 'my-16' for top & bottom if needed */}
  <Shopping />
</div>

      <Middle/>
      <NewArival/>
      <GiveWay/>
      <Give/>
      <WhatsNew/>
    </>
  )
}

export default App
