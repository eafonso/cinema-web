import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';


// linkFilme = (e) => {
//   <Link to="/filme" />
// };

function Componente(props) {

  const navigate = useNavigate();
  const linkFilme = useCallback(() => navigate('/filme', {replace: true}), [navigate])

  return (
    <div onClick={linkFilme} style={{marginLeft:'1%',display:'flex',flexDirection:'row', backgroundColor:'#4149D9', width:'98%', justifyContent:'space-between', borderRadius:'30px'}}>
        <h1 style={{marginLeft:'2%'}}>{props.filme}</h1>
        <div style={{marginRight:'2%'}}>
            <p>Nome: {props.nome}</p>
            <p>ID: {props.id}</p>
            <p>Valor: {props.valor}</p>
            <p>Acento: {props.acento}</p>
        </div>
    </div>
  );
}



export default Componente;
