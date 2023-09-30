import './App.css';
import{Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Header from './elements/Header';
import About from './Pages/About.jsx';
import Footer from "./elements/Footer.jsx";


const App = () => {
  return (

    <div className="App">
    <Header />
    <main>
     <Routes>
      <Route index element={<Home/>}/>
     <Route path='/About' element={<About/>}About/>
     </Routes>
    </main>
     <Footer />
    </div>
  )
}

export default App;
