import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';


// linkFilme = (e) => {
//   <Link to="/filme" />
// };

export var codigo = 0;

function Componente(props) {

  const navigate = useNavigate();
  const linkFilme = useCallback(() => navigate('/filme', {replace: true}), [navigate])
  codigo = props.codigo;
  return (
    <div onClick={linkFilme} style={{marginLeft:'1%',display:'flex',flexDirection:'row', backgroundColor:'#4149D9', width:'98%', justifyContent:'space-between', borderRadius:'30px', marginBottom: '10px'}}>
        <h1 style={{marginLeft:'2%'}}>{props.filme}</h1>
        <div style={{marginRight:'2%'}}>
            {/* <p>Nome: {props.nome}</p> */}
            {/* <p>ID: {props.id}</p> */}
            <p>Valor: {props.valor}</p>
            <p>Codigo: {props.codigo}</p>
            {/* <p>Acento: {props.acento}</p> */}
        </div>
    </div>
  );
}



export default Componente;
