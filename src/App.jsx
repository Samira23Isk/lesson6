import './App.css';
import Header from './Header/Header';
import{Route, Routes} from 'react-router-dom';
import About from './About/About';
import Menu from './Menu/Menu';
import Main from './Main/Main';
import Form from './Form/Form';


function App() {
  return (
    <>
<Header/>
<Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/menu' element={<Menu/>}/>
  <Route path='/form' element={<Form/>}/>
</Routes>
    </>
  );
}

export default App;
