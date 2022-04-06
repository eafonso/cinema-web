import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { codigo } from '../ListaDeFilmes/component';

var respostaJSON = [];


async function chamarAPI(){
  var requestOptions = {
    method: 'GET',
    //redirect: 'follow'
  };
  
    var link = "https://localhost:44349/Ingressos/consultarIngresso/" + codigo
    const response = await fetch(link, requestOptions)
    const data = await response.json();
    for(var i = 0;i < data.length; i++){
      if(respostaJSON.length < data.length){
      respostaJSON.push({
        id: data[i].id,
        codigo: data[i].codigo,
        titulo: data[i].titulo,
        valor: data[i].valor,
        descricao: data[i].descricao,
        poltrona: data[i].poltrona

      })
    }
  }
  //console.log(respostaJSON);
}
function Filme(props) {
  
  chamarAPI();
  const navigate = useNavigate();
  const linkFilme = useCallback(() => navigate('/filme', {replace: true}), [navigate])

  return (
    <div onClick={linkFilme} style={{marginLeft:'1%',display:'flex',flexDirection:'row', backgroundColor:'#4149D9', width:'98%', justifyContent:'space-between', borderRadius:'30px', marginBottom: '10px'}}>
        <h1 style={{marginLeft:'2%'}}>{respostaJSON.titulo}</h1>
        <div style={{marginRight:'2%'}}>
            <p>Nome: {props.nome}</p>
            <p>ID: {props.id}</p>
            <p>Valor: {props.valor}</p>
            <p>Acento: {props.acento}</p>
        </div>
    </div>
  );
}



export default Filme;
