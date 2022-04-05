import ticket from './ticket.png'



function Home() {
    return (
    //   <div style={{marginLeft:'1%',display:'flex',flexDirection:'row', backgroundColor:'#4149D9', width:'98%', justifyContent:'space-between', borderRadius:'30px'}}>
    //       <h1 style={{marginLeft:'2%'}}>{props.filme}</h1>
    //       <div style={{marginRight:'2%'}}>
    //           <p>Nome: {props.nome}</p>
    //           <p>ID: {props.id}</p>
    //           <p>Valor: {props.valor}</p>
    //           <p>Acento: {props.acento}</p>
    //       </div>
    //   </div>
      <div style={{display:'flex', flexDirection:'column', backgroundColor:'#4149D9', alignItems:'center', justifyContent:'center', height:'100%'}}>
      <img src = {ticket} style = {{width : 500, height: 500}}/>
      <button style={{marginTop: 50 ,backgroundColor: '#7654F0', width : 200, height : 100, justifyContent: 'center', alignItems : 'center', borderRadius: 30}}>
        <h1 style={{color: '#F2DE91', fontSize: 35}}>Entrar</h1>
      </button>
    </div>
    );
  }
  export default Home;
  