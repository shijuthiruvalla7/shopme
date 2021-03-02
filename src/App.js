import Navbar from "./components/navbar.js";
import Header from './components/header'
import Main from './components/main'
import Login from './components/login'
import Card from './components/card'
import Shopingarea from './components/shopingarea'
function App() {
  return (
    <div className="App">
       <Header/>
      <Shopingarea/>
      {/* <Main/> */}
      {/* <Login/ */}
      <Navbar/>

    </div>
  );
}

export default App;
