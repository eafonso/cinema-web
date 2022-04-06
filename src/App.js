import logo from './logo.svg';
import './App.css';
import Home from './Home/Home.js';
import ListaDeFilmes from './ListaDeFilmes/ListaDeFilmes';
import Filme from './Filme/Filme.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://localhost:44349/Ingressos/listarIngressos',
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/lista' element={<ListaDeFilmes />} />
            <Route exact path='/filme' element={<Filme />} />
        </Routes>
    </Router>
    // <Home/>
    // <Componente filme='Batman' nome='eafonso' id='0101' valor='15$' acento='A1'/>
  );
}



export default App;
