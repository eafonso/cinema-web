//import Componente from './component';
// import Filme from './Filme/Filme.js';
import { useState } from 'react';
import Componente from './component.js';

//import axios from 'axios';


var respostaJSON = [];


async function chamarAPI(){
  var requestOptions = {
    method: 'GET',
    //redirect: 'follow'
  };
  

    const response = await fetch("https://localhost:44349/Ingressos/listarIngressos", requestOptions)
    const data = await response.json();
    for(var i = 0;i < data.length; i++){
      if(respostaJSON.length < data.length){
      respostaJSON.push({
        id: data[i].id,
        codigo: data[i].codigo,
        valor: data[i].valor,

      })
    }
  }
  //console.log(respostaJSON);
}


function ListaDeFilmes() {
  
  chamarAPI();
  console.log(respostaJSON);
  return (
    // {respostaJSON.map(respostaJSON => <Componente filme='Batman' nome='eafonso' id='0101' valor='15$' acento='A1'/>)}
    <div>
      {respostaJSON.map(respostaJSON => <Componente filme='Batman' id={respostaJSON.id} valor={respostaJSON.valor} codigo={respostaJSON.codigo}/>)}
    </div>
    
  );
}



export default ListaDeFilmes;
