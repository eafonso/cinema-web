import logo from './logo.svg';
import './App.css';
import Componente from './component';
import Home from './Home/Home';


var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://localhost:44349/Ingressos/listarIngressos',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


function App() {
  return (
    <Home/>
    // <Componente filme='Batman' nome='eafonso' id='0101' valor='15$' acento='A1'/>
  );
}



export default App;
